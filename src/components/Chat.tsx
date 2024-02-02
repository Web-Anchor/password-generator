import React, { useState } from 'react'
import Button from '@components/Button'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import FileUpload from './FileUpload'

type ComponentType = {
  fetching?: boolean
  callBack?: (props: any) => void
}

export default function Chat(props: ComponentType) {
  const handleCopyClick = (index: number) => {
    const chat = state?.chat?.[index]
    navigator.clipboard.writeText(chat!)
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 lg:px-40 max-h-[400px]_">
        {props?.chats?.map((chat, index) => {
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
                  fetching={props?.fetching}
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
        {props?.stream && (
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {state?.stream}
          </Markdown>
        )}
      </div>
    </section>
  )
}
