export default async function handler(req, res) {
  // 1. Asegurarnos de que solo aceptamos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Extraer los mensajes que enviaremos desde el frontend
  const { messages } = req.body;

  try {
    // 3. Hacer la petición a Groq DESDE EL SERVIDOR
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        // Usamos la variable de entorno segura del servidor
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 256
      })
    });

    const data = await response.json();
    
    // 4. Devolver la respuesta de Groq a nuestro frontend
    return res.status(200).json(data);
    
  } catch (error) {
    console.error('Error calling Groq:', error);
    return res.status(500).json({ error: 'Error processing chat request' });
  }
}