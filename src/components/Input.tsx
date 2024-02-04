import Button from '@components/Button'
import React, { useState } from 'react'
import FileUpload from './FileUpload'
import { removeFromLocalStorage } from '@lib/storage'

type StateType = {
  prompt?: string
  file?: File
  fileObj?: any
}

type ComponentType = {
  fetching?: boolean
  callBack?: (props: any) => void
  cancelCallback?: () => void
  clearStateCallback?: () => void
}

export default function Input(props: ComponentType) {
  const [state, setState] = useState<StateType>({})
  const btnRef = React.createRef<HTMLButtonElement>()

  function submit(e: React.FormEvent) {
    e.preventDefault()

    const form = new FormData(e.target as HTMLFormElement)
    const formProps = Object.fromEntries(form.entries())

    // --------------------------------------------------------------------------------
    // 📌  Input component state
    // --------------------------------------------------------------------------------
    const prompt = {
      prompt: formProps.prompt,
      ...state,
    }

    props?.callBack?.(prompt) // 📌 pass to callback
  }

  return (
    <section className="flex items-start space-x-4 lg:px-40">
      <div className="flex flex-col gap-5">
        <div className="flex-shrink-0">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <Button
          children={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          }
          class="bg-red-600"
          callBack={() => {
            removeFromLocalStorage()
            props?.clearStateCallback?.()
          }}
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
                  btnRef.current?.click()
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
              fetching={props.fetching}
            />
            {!props.fetching && (
              <Button label={'Send'} fetching={props.fetching} type="submit" />
            )}
            {props.fetching && (
              <Button
                label={'Cancel'}
                class="bg-red-600"
                callBack={props.cancelCallback}
              />
            )}
            <button ref={btnRef} type="submit" hidden />
          </div>
        </form>
      </div>
    </section>
  )
}
