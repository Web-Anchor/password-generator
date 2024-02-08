import React, { useState } from 'react'

type Props = {
  label: string
  description?: string
  name: string
  id?: string
  checked?: boolean
}

export default function Checkbox(props: Props) {
  const [checked, setChecked] = useState<boolean>(!!props.checked)

  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id={props.id ?? props.name}
          aria-describedby="comments-description"
          name={props.name}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
        />
      </div>
      <div className="flex gap-2 ml-3 text-sm leading-6">
        <label
          htmlFor={props.id ?? props.name}
          className="font-medium text-gray-100 cursor-pointer"
        >
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
