export const STRUCTURE_PROMPT = (text: string) => `
You are a strict JSON generator.

Rules:
- Output ONLY valid JSON
- Do NOT include explanations
- Do NOT include markdown
- Do NOT include code fences
- Follow the schema exactly

Schema:
{
  "title": string,
  "summary": string,
  "sections": [
    { "heading": string, "points": string[] }
  ]
}

Conversation:
${text}
`;
