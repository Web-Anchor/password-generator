import type { APIRoute, APIContext } from 'astro'

import OpenAI from 'openai'
const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
})

export const POST: APIRoute = async ({
  params,
  request,
  url,
}: APIContext): Promise<Response> => {
  const body = request.body

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  })

  const response: any = {
    message: 'This is a POST request',
    params,
    body,
    completion,
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
