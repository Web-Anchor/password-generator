import type { APIRoute, APIContext } from 'astro'

export const POST: APIRoute = async ({
  params,
  request,
}: APIContext): Promise<Response> => {
  const response: any = {
    message: 'This is a POST request',
    params: params,
  }

  // --------------------------------------------------------------------------------
  // 📌 repose with html response. add image to response
  // --------------------------------------------------------------------------------
  const html = `
    <div class="flex flex-col content-center text-bold my-8">
      <h1>This is a POST request</h1>
      <p>Params: ${JSON.stringify(params)}</p>
      <img
        src="https://source.unsplash.com/random/400x400"
        class="rounded-full w-[200px] h-[200px]"
      />
    </div>
  `

  return new Response(html, {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': 'text/html',
      'X-Custom-Header': 'foo', // custom header example
    },
  })
}
