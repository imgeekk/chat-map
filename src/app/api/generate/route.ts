import { groq } from "@/lib/llm";
import { STRUCTURE_PROMPT } from "@/lib/prompts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

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

    return NextResponse.json(JSON.parse(output));
  } catch {
    return NextResponse.json(
      { error: "Failed to generate structured output" },
      { status: 500 },
    );
  }
}
