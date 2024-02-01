import Button from '@components/Button'
import React, { useState } from 'react'
import axios from 'axios'
import { message } from 'antd'
import ReactHtmlParser from 'react-html-parser'

type StateType = {
  prompt?: string
  chat?: string[]
  fetching?: boolean
}

type ComponentType = {
  callBack?: (props: any) => void
}

export default function Input(props: ComponentType) {
  const [state, setState] = useState<StateType>({})
  console.log('====================================')
  console.log('state: ', state)
  console.log('====================================')

  async function submit() {
    try {
      if (!state.prompt) return message.error('Please enter a prompt')
      setState((prev) => ({ ...prev, fetching: true }))

      const { data } = await axios('/api/v1/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          prompt: state.prompt,
          max_tokens: 5,
        },
      })
      console.log('🚀 ', data)
      props?.callBack?.({ chat: data?.chat, prompt: state.prompt })
      setState((prev) => ({
        ...prev,
        chat: [...(prev.chat ?? []), data?.chat],
        prompt: '',
      }))
    } catch (error) {
      console.error('😢 error: ', error)
    } finally {
      setState((prev) => ({ ...prev, fetching: false }))
    }
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:px-40">
        {state.chat?.map((chat, index) => {
          return (
            <div key={index} className="flex items-start">
              <div className="min-w-0 flex-1">
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-gray-200">{ReactHtmlParser(chat)}</p>
                </div>
              </div>
            </div>
          )
        })}
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
          <form className="relative">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={3}
                name="comment"
                id="comment"
                className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-200 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Add your request..."
                value={state.prompt || ''}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, prompt: e.target.value }))
                }
              ></textarea>
              <div className="py-2" aria-hidden="true">
                <div className="py-px">
                  <div className="h-9"></div>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
              <div className="flex-shrink-0 ml-auto">
                <Button
                  label="Post"
                  fetching={state.fetching}
                  callBack={submit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
