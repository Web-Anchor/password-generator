import React, { useRef, useState } from 'react'
import { message } from 'antd'
import Input from './Input'
import Chat from './Chat'
import { convertFileToBase64, saveToLocalStorage } from '@lib/index'

type StateType = {
  prompt?: string
  chats?: string[]
  stream?: string
  fetching?: boolean
  file?: File
  fileObj?: any
}

type ComponentType = {
  callBack?: (props: any) => void
}

export default function ChatContainer(props: ComponentType) {
  const [state, setState] = useState<StateType>({})
  const abortControllerRef = useRef<AbortController | null>(null)

  console.log('🚀 ~ state', state)

  console.log(import.meta.env)

  async function submit(input: {
    file?: File
    fileObj?: any
    prompt?: string
  }) {
    try {
      if (!input.prompt && !input.file) {
        return message.info('Please enter a prompt | add File')
      }
      setState((prev) => ({ ...prev, fetching: true }))

      let prompt: any = [
        {
          role: 'user',
          content: input.prompt,
        },
      ]
      if (input.file) {
        const imageUrl = await convertFileToBase64(input.file)
        prompt.push({
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: {
                url: imageUrl,
              },
            },
          ],
        })
      }

      abortControllerRef.current = new AbortController()
      const response = await fetch('/api/v1/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
        signal: abortControllerRef.current.signal,
      })

      const reader = response?.body?.getReader?.()
      let stream = ''

      const decode = new TextDecoder()
      while (true && reader) {
        const { done, value } = await reader.read()
        if (done) {
          // --------------------------------------------------------------------------------
          // 📌  Store Response to local storage
          // --------------------------------------------------------------------------------
          saveToLocalStorage(stream)

          break
        }
        const text = decode.decode(value)
        stream += text

        setState((prev) => ({ ...prev, stream }))
      }

      // add to chat list and clear prompt list & stream
      setState((prev) => ({
        ...prev,
        chats: [...(prev.chats ?? []), stream],
        stream: undefined,
      }))
    } catch (error) {
      console.error('😢 error: ', error)
    } finally {
      setState((prev) => ({ ...prev, fetching: false }))
    }
  }

  function abortRequest() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }

  return (
    <section className="flex flex-col gap-10">
      <Chat stream={state.stream} chats={state.chats} />
      <Input
        callBack={submit}
        fetching={state.fetching}
        cancelCallback={abortRequest}
      />
    </section>
  )
}
