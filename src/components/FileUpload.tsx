import Button from '@components/Button'
import { classNames } from '@helpers/helpers'
import React from 'react'
import { useRef, useState } from 'react'

type SelectTypes = {
  label?: string
  name: string
  class?: string
  callBack?: (...args: any[]) => void
  accept?: string
}

export default function FileUpload(props: SelectTypes) {
  const [file, setFile] = useState<any>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0]
    if (!file) return

    const fileObj = {
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      url: URL.createObjectURL(file),
    }

    setFile(fileObj)
    props.callBack?.({ file, fileObj })
  }

  return (
    <section
      className={classNames(
        'relative flex flex-1 flex-col gap-5 h-fit w-fit',
        props.class ?? '',
      )}
    >
      <div className="flex flex-col gap-5 w-full">
        <input
          type="file"
          value={file.value ?? ''}
          onChange={handleChange}
          name={props.name}
          ref={inputRef}
          accept={props.accept}
          hidden
        />
        <Button
          callBack={() => inputRef.current?.click()}
          label={props.label ?? 'Upload'}
          class="w-fit"
        />

        {file && (
          <button
            className="absolute -top-3 -right-3 w-fit overflow-hidden rounded-full bg-indigo-600"
            onClick={() => setFile('')}
          >
            <svg
              className="h-6 w-6 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />{' '}
              <line x1="15" y1="9" x2="9" y2="15" />{' '}
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
