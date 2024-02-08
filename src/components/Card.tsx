import React, { useState } from 'react'
import Checkbox from '@components/Checkbox'
import Button from '@components/Button'

type StateProps = {
  numbers: boolean
  symbols: boolean
  uppercase: boolean
  lowercase: boolean
  length: number
  password?: string
}

const PasswordGenerator = () => {
  const [state, setState] = useState<StateProps>({
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
    length: 12,
  })

  function submit(event: any) {
    event.preventDefault()

    // --------------------------------------------------------------------------------
    // 📌 Submitted form values
    // --------------------------------------------------------------------------------
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log('submit', data)
  }

  const perks = [
    'Enhanced Security: Strong passwords provide a higher level of protection against unauthorized access.',
    'Reduced Risk of Hacking: Generating robust passwords lowers the likelihood of falling victim to hacking attempts.',
    'Data Confidentiality: Strong passwords help safeguard sensitive information and maintain confidentiality.',
    'Peace of Mind: Using secure passwords offers reassurance that your online accounts are well-protected.',
  ]

  return (
    <form className="mx-auto my-10 max-w-7xl px-6 lg:px-8" onSubmit={submit}>
      <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-100">
            Password Generator
          </h3>

          <span />
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {perks.map((perk, key) => {
              return (
                <li key={key} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {perk}
                </li>
              )
            })}
          </ul>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
              Options
            </h4>
            <div className="h-px flex-auto bg-gray-100"></div>
          </div>

          <div className="space-y-5 mt-5">
            <Checkbox
              label="Numbers"
              name="numbers"
              description="Including numerical digits in the password."
              checked={state.numbers}
            />
          </div>
        </div>
        <div className="flex -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-2xl lg:flex-shrink-0">
          <div className="flex flex-1 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs px-8">
              <p className="text-base font-semibold text-gray-600">
                Pay once, own it forever
              </p>
              <p className="my-8 flex items-baseline justify-center">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  $349
                </span>
              </p>

              <Button label="Generate new password" type="submit" />
              <p className="mt-6 text-xs leading-5 text-gray-600">
                Invoices and receipts available for easy company reimbursement
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PasswordGenerator
