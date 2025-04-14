// app/api/summarize/route.js
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.MY_API_KEY });

export async function POST(request) {
  const { text } = await request.json();

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: `${text}` }] }],
  });
  const reply = result.candidates?.[0]?.content?.parts?.[0]?.text || "No reply found.";

  return NextResponse.json({ reply });
}
