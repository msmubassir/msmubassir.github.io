import { NextRequest, NextResponse } from "next/server";

const API_KEY = "sk-79nH8aoFgSuDNdVkiT4bNlYV82Mv1ki2iuPfIfY0d5aLnlLC5EKuLLoFCQDJPTDp";
const API_URL = "https://opencode.ai/zen/v1/chat/completions";
const MODEL = "minimax-m2.5-free";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API Error:", response.status, errorData);
      return NextResponse.json(
        { error: `API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "I couldn't generate a response.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}