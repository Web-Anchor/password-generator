import type { APIRoute, APIContext } from 'astro'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// --------------------------------------------------------------------------------
// 📌  Create AI instance
// --------------------------------------------------------------------------------
const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
})

type BodyType = {
  prompt: string
  max_tokens?: number
}

export const POST: APIRoute = async ({
  params,
  request,
  url,
}: APIContext): Promise<Response> => {
  const body: BodyType = await request.json()

  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a Coding Assistant' },
      { role: 'user', content: body.prompt },
    ],
    model: 'gpt-4-vision-preview',
    temperature: 0.8,
    max_tokens: body.max_tokens ?? 4096,
    stream: true,
  })

  const stream = OpenAIStream(completion)
  return new StreamingTextResponse(stream)
}
