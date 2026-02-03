import { generateStructuredOutput, groq } from "@/lib/llm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const result = await generateStructuredOutput(text);

    return NextResponse.json(result);
  } catch (err) {
    console.error("Generate api failed: ", err);
    return NextResponse.json(
      { error: "Failed to generate structured output" },
      { status: 500 },
    );
  }
}
