export const STRUCTURE_PROMPT = (text: string) => `
You are a tool that converts ChatGPT conversations into structured notes.

Return ONLY valid JSON in this format:
{
  "title": "",
  "summary": "",
  "sections": [
    { "heading": "", "points": [] }
  ]
}

Conversation:
${text}
`;
