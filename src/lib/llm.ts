import Groq from "groq-sdk";
import { STRUCTURE_PROMPT } from "./prompts";
import { OutputSchema } from "./schema";

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateOnce(text: string){
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You structure knowledge.",
        },
        {
          role: "user",
          content: STRUCTURE_PROMPT(text),
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    const output = completion.choices[0].message.content;

    if (!output) {
      throw new Error("Empty LLM Response");
    }

    const parsedOutput = JSON.parse(output);

    const validatedOutput = OutputSchema.parse(parsedOutput);

    return validatedOutput;
}

export async function generateStructuredOutput(
  text: string,
  retries = 1
) {
  try {
    return await generateOnce(text);
  } catch (err) {
    if (retries > 0) {
      console.warn("Retrying LLM call...");
      return generateStructuredOutput(text, retries - 1);
    }
    throw err;
  }
}