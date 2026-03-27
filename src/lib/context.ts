export const WEBSITE_CONTEXT = `
Dolphiin is a security platform that makes API keys invisible to the frontend.

Core Information (Strictly from Website):
- Main Problem: "Your API key is in your code? That's a problem." Traditional .env files or hardcoded keys lead to security leaks (e.g., const API_KEY = 'sk-proj-5jA...').
- The Solution: Dolphiin replaces real keys with "DOLPHIIN_SECURE" tokens. Real keys are only injected at edge nodes, ensuring they never reach the frontend.
- Integration Process (3 Steps):
    1. Install the Library: "npm install dolphiin". One command connects your environment to the Dolphiin edge network.
    2. Connect your Keys: Link master keys once in the dashboard to generate user-specific, expiring tokens.
    3. Deploy & Forget: Real keys are injected at the edge (Cloudflare Workers, Vercel Edge, AWS Lambda).
- Key Benefits:
    - Total Key Privacy: Real keys are protected at the edge, far from the code.
    - Instant Integration: Zero configuration or code changes required.
    - Scoped Control: Manage access via session tokens without sharing master credentials.
- Performance: Ultra-low latency (<1ms overhead) because it lives at the edge.
- Timeline: Developing until August 2026. Launch date is August 2026.
- Early Adopters Offer: First 1,000 members get Pro features free for life. No credit card required.
- Contact & Support:
    - Twitter: @dolphiin_app
    - Support Email: hello@dolphiin.com
`;
