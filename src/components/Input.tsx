import Button from '@components/Button'
import React, { useState } from 'react'
import FileUpload from './FileUpload'
import { classNames } from '@helpers/index'

type StateType = {
  prompt?: string
  file?: File
  fileObj?: any
}

type ComponentType = {
  fetching?: boolean
  callBack?: (props: any) => void
  cancelCallback?: () => void
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
