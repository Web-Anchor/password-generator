import React, { useState } from 'react'
import Button from '@components/Button'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { classNames } from '@helpers/helpers'

type ComponentType = {
  fetching?: boolean
  chats?: string[]
  stream?: string
  callBack?: (props: any) => void
}

export default function Chat(props: ComponentType) {
  const [state, setState] = useState<{ copied?: boolean; index?: number }>({})

  const handleCopyClick = (index: number) => {
    const chat = props?.chats?.[index]

    navigator.clipboard.writeText(chat!)

    // set 1s timeout to reset the copied state
    setState({ copied: true, index })
    setTimeout(() => {
      setState({ copied: false })
    }, 1000)
  }

  return (
    <section className="flex flex-col gap-10 max-h-[400px] overflow-y-auto">
      <div className="flex flex-col gap-5 lg:px-40">
        {props?.chats?.map((chat: string, index: number) => {
          return (
            <div key={index} className="flex items-start">
              <>
                <textarea
                  value={chat}
                  style={{ position: 'fixed', top: '-9999px' }}
                  readOnly
                />
                <Button
                  children={
                    <svg
                      className={classNames(
                        'h-5 w-5 text-gray-200',
                        state.copied && state.index === index
                          ? 'text-pink-500'
                          : '',
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  }
                  fetching={props?.fetching}
                  callBack={() => handleCopyClick(index)}
                  class={classNames(
                    'absolute right-1 top-0 rounded-full text-xs p-1',
                    state.copied && state.index === index ? 'opacity-50' : '',
                  )}
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
        {props?.stream && (
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {props?.stream}
          </Markdown>
        )}
      </div>
    </section>
  )
}
