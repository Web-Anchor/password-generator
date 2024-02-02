import Button from '@components/Button'
import React, { useState } from 'react'
import axios from 'axios'
import { message } from 'antd'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import FileUpload from './FileUpload'

type StateType = {
  prompt?: string
  chat?: string[]
  stream?: string
  fetching?: boolean
  file?: File
  fileObj?: any
}

type ComponentType = {
  callBack?: (props: any) => void
}

export default function Input(props: ComponentType) {
  const [state, setState] = useState<StateType>({})

  console.log('⭐️ STATE ', state)

  // async function submit(event: Event) {
  //   try {
  //     if (!state.prompt) return message.error('Please enter a prompt')
  //     setState((prev) => ({ ...prev, fetching: true }))

  //     const response = await fetch('/api/v1/gpt', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ prompt: state.prompt }),
  //     })

  //     const reader = response?.body?.getReader?.()
  //     let stream = ''

  //     const decode = new TextDecoder()
  //     while (true && reader) {
  //       const { done, value } = await reader.read()
  //       if (done) break
  //       const text = decode.decode(value)
  //       stream += text

  //       setState((prev) => ({ ...prev, stream }))
  //     }

  //     // add to chat list and clear prompt list & stream
  //     setState((prev) => ({
  //       ...prev,
  //       chat: [...(prev.chat ?? []), stream],
  //       prompt: '',
  //       stream: undefined,
  //     }))
  //   } catch (error) {
  //     console.error('😢 error: ', error)
  //   } finally {
  //     setState((prev) => ({ ...prev, fetching: false }))
  //   }
  // }

  function submit(e: React.FormEvent) {
    e.preventDefault()

    const form = new FormData(e.target as HTMLFormElement)
    const formProps = Object.fromEntries(form.entries())

    const prompt = {
      prompt: formProps.prompt,
      ...state,
    }

    console.log('Form Props', prompt)
    props?.callBack?.(prompt) // 📌 pass to callback
  }

  const handleCopyClick = (index: number) => {
    const chat = state?.chat?.[index]
    navigator.clipboard.writeText(chat!)
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:px-40 max-h-[400px]_">
        {state.chat?.map((chat, index) => {
          return (
            <div key={index} className="flex items-start">
              <>
                <textarea
                  value={chat}
                  style={{ position: 'fixed', top: '-9999px' }}
                  readOnly
                />
                <Button
                  label="Copy"
                  fetching={state.fetching}
                  callBack={() => handleCopyClick(index)}
                  class="absolute -right-[1090px] top-0"
                />
              </>

              <div className="min-w-0 flex-1">
                <div className="bg-gray-800 rounded-lg p-3 overflow-auto">
                  <Markdown
                    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                  >
                    {chat}
                  </Markdown>
                </div>
              </div>
            </div>
          )
        })}
        {state?.stream && (
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {state?.stream}
          </Markdown>
        )}
      </div>

      <div className="flex items-start space-x-4 lg:px-40">
        <div className="flex-shrink-0">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <form className="relative" onSubmit={submit}>
            <div className="overflow-y-auto rounded-lg shadow-sm ring-1 h-[200px] ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label htmlFor="prompt" className="sr-only">
                Add your prompt
              </label>
              <textarea
                rows={3}
                name="prompt"
                id="prompt"
                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Add your request..."
                value={state.prompt || ''}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, prompt: e.target.value }))
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.metaKey) {
                    submit(e)
                  }
                }}
              />
            </div>

            <div className="absolute bottom-0 right-0 flex flex-col gap-5 justify-between py-2 pl-3 pr-2 w-fit">
              <FileUpload
                name="file"
                label="File"
                accept="image/jpeg,image/png"
                callBack={(file) => {
                  setState((prev) => ({ ...prev, ...file }))
                }}
              />
              <Button label="Submit" fetching={state.fetching} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
