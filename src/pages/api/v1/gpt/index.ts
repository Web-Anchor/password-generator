import type { APIRoute, APIContext } from 'astro'

import OpenAI from 'openai'
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
    model: 'gpt-3.5-turbo',
    temperature: 0.8,
    // max_tokens: body.max_tokens ?? 20,
    stream: false,
  })

  const response: any = {
    body,
    completion,
    chat: completion?.choices?.[0]?.message?.content,
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'application/json',
      'X-Custom-Header': 'foo', // custom header example
    },
  })
}
