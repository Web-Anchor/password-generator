import Button from '@components/Button'
import React, { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')

  async function submit() {
    console.log('🚀 ', value)
  }

  return (
    <div className="flex items-start space-x-4 lg:px-40">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
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
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <div className="py-2" aria-hidden="true">
              <div className="py-px">
                <div className="h-9"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex-shrink-0 ml-auto">
              <Button label="Post" callBack={submit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
