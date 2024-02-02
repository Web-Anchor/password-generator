import React, { useState } from 'react'
import axios from 'axios'
import { message } from 'antd'
import Input from './Input'
import Chat from './Chat'

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

  function clearPrompt() {
    // --------------------------------------------------------------------------------
    // 📌  Clear Prompt callBack
    // --------------------------------------------------------------------------------
    console.log('📌 Clear Prompt callBack')
  }

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

      const response = await fetch('/api/v1/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input.prompt }),
      })

      const reader = response?.body?.getReader?.()
      let stream = ''

      const decode = new TextDecoder()
      while (true && reader) {
        const { done, value } = await reader.read()
        if (done) {
          break
        }
        const text = decode.decode(value)
        stream += text

        setState((prev) => ({ ...prev, stream }))
      }
      clearPrompt() // clear prompt

      // add to chat list and clear prompt list & stream
      setState((prev) => ({
        ...prev,
        chats: [...(prev.chats ?? []), stream],
        stream: undefined,
      }))
      const data = await response?.body
      console.error('DONE 🚀 ', data)
    } catch (error) {
      console.error('😢 error: ', error)
    } finally {
      setState((prev) => ({ ...prev, fetching: false }))
    }
  }

  return (
    <section className="flex flex-col gap-10">
      <Chat stream={state.stream} chats={state.chats} />
      <Input
        callBack={submit}
        fetching={state.fetching}
        clearState={clearPrompt}
      />
    </section>
  )
}
