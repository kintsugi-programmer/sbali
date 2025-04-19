// /app/api/chat/route.ts
import { NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

const apiKey = process.env.GEMINI_API_KEY
const modelName = 'gemini-2.0-flash'

function extractText(res: any): string {
  return res?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ''
}

export async function POST(req: Request) {
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 })
  }

  const { messages } = await req.json()
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'Require nonempty messages array' }, { status: 400 })
  }

  // Build the contents payload using only "model" and "user" roles
  const contents: Array<{ role: 'model' | 'user'; parts: { text: string }[] }> = []

  // 1) Seed the convo with your system prompt as a "model" message
  contents.push({
    role: 'model',
    parts: [
      {
        text: `You are "Siddhant Bali AI Avatar" — a friendly, concise expert assistant.`
      }
    ]
  })

  // 2) Append the entire history, mapping bot→model, user→user
  for (const m of messages) {
    contents.push({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    })
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const result = await ai.models.generateContent({
      model: modelName,
      contents
    })
    return NextResponse.json({ answer: extractText(result) })
  } catch (e) {
    console.error('GenAI Error', e)
    return NextResponse.json({ error: 'GenAI generation failed' }, { status: 500 })
  }
}
