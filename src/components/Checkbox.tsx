import React from 'react'

type Props = {
  label: string
  description?: string
  name: string
  id?: string
  checked?: boolean
}

export default function Checkbox(props: Props) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id={props.id}
          aria-describedby="comments-description"
          name={props.name}
          type="checkbox"
          checked={props.checked}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="flex gap-2 ml-3 text-sm leading-6">
        <label htmlFor="comments" className="font-medium text-gray-100">
          {props.label}
        </label>
        {props.description && (
          <span id="comments-description" className="text-gray-500">
            {props.description}
          </span>
        )}
      </div>
    </div>
  )
}
