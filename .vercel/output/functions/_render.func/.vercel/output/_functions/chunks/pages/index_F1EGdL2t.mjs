import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
import { initialProgrammerMessages } from './messages_dr4cO6ea.mjs';

const GET = async ({
  params,
  request,
  url
}) => {
  const response = {
    message: "This is a GET request",
    params,
    url
  };
  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "application/json",
      "X-Custom-Header": "foo"
      // custom header example
    }
  });
};
const POST$1 = async ({
  params,
  request
}) => {
  const response = {
    message: "This is a POST request",
    params
  };
  return new Response(JSON.stringify(response), {
    status: 200,
    statusText: "OK",
    headers: {
      "Content-Type": "application/json",
      "X-Custom-Header": "foo"
      // custom header example
    }
  });
};
const PUT = async ({
  params,
  request,
  url
}) => {
  const searchParams = new URLSearchParams(url.search);
  const searchId = searchParams.get("id");
  console.log("⭐️ ", params, url, searchId);
  if (!searchId) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return new Response(null, {
    status: 302,
    // Set the redirect status code (302 for temporary redirect)
    headers: {
      Location: "http://localhost:4321/"
      // Set the Location header to the redirect URL
    }
  });
};

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST: POST$1,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const openai = new OpenAI({
  apiKey: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.OPENAI_API_KEY
});
const POST = async ({
  params,
  request
}) => {
  const body = await request.json();
  const completion = await openai.chat.completions.create({
    messages: [...initialProgrammerMessages, ...body.prompt],
    model: "gpt-4-vision-preview",
    temperature: 0.8,
    max_tokens: body.max_tokens ?? 4096,
    stream: true
  });
  const stream = OpenAIStream(completion);
  return new StreamingTextResponse(stream);
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
