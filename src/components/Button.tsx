import React from 'react'
import { classNames } from '@helpers/index.ts'

type Props = {
  label?: string
  id?: string
  callBack?: (...args: any[]) => void | Promise<any>
  children?: React.ReactNode
  fetching?: boolean
  class?: string
}

const Loading = () => {
  return (
    <span className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="animate-spin w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </span>
  )
}

export default function Button(props: Props) {
  return (
    <section className="relative">
      {props.fetching && <Loading />}
      <button
        type="button"
        onClick={props?.callBack}
        className={classNames(
          'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
          props?.fetching && 'cursor-not-allowed opacity-25',
          props?.class ?? '',
        )}
        id={props.id}
        disabled={props.fetching}
      >
        {props.label ?? 'Click me!'}
      </button>
    </section>
  )
}
