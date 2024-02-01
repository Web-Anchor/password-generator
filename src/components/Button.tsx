import React from 'react'

type Props = {
  label?: string
  id?: string
  callBack?: (...args: any[]) => void | Promise<void>
  children?: React.ReactNode
}

export default function Button(props: Props) {
  return (
    <section className="relative">
      <button
        type="button"
        onClick={props?.callBack}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        id={props.id}
      >
        {props.label ?? 'Click me!'}
      </button>
    </section>
  )
}
