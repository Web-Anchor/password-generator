import React, { useEffect, useState } from 'react'
import Checkbox from '@components/Checkbox'
import Button from '@components/Button'
import {
  calculatePasswordStrength,
  generateRandomPassword,
} from '@helpers/index'

type StateProps = {
  numbers: boolean
  symbols: boolean
  uppercase: boolean
  lowercase: boolean
  length: number
  password?: string
  strength?: string
}

const PasswordGenerator = () => {
  const [state, setState] = useState<StateProps>({
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    length: 12,
    password: '',
    strength: '',
  })

  function submit(event: any) {
    event.preventDefault()

    // --------------------------------------------------------------------------------
    // 📌 Submitted form values
    // --------------------------------------------------------------------------------
    const formData = new FormData(event.target)
    const config = Object.fromEntries(formData)

    const psw = generateRandomPassword({
      options: {
        numbers: config.numbers === 'on',
        symbols: config.symbols === 'on',
        uppercase: config.uppercase === 'on',
        lowercase: config.lowercase === 'on',
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false,
      },
    })

    const strength = calculatePasswordStrength(psw)
    console.log('FORM ', config, psw, strength)

    setState({ ...state, password: psw, strength })
  }

  useEffect(() => {
    // --------------------------------------------------------------------------------
    // 📌  Generate password on initial load
    // --------------------------------------------------------------------------------
    const psw = generateRandomPassword({
      options: {
        numbers: state.numbers,
        symbols: state.symbols,
        uppercase: state.uppercase,
        lowercase: state.lowercase,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false,
      },
    })
    const strength = calculatePasswordStrength(psw)

    setState({ ...state, password: psw, strength })
  }, [])

  function copyToClipboard() {
    navigator.clipboard.writeText(state.password!)
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
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-500 sm:grid-cols-2 sm:gap-6"
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
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
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
            <Checkbox
              label="Symbols"
              name="symbols"
              description="Including numerical digits in the password."
              checked={state.symbols}
            />
            <Checkbox
              label="Uppercase"
              name="uppercase"
              description="Using capital letters in the password."
              checked={state.uppercase}
            />
            <Checkbox
              label="Lowercase"
              name="lowercase"
              description="Utilizing lowercase letters in the password."
              checked={state.lowercase}
            />
          </div>
        </div>
        <div className="flex -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-2xl lg:flex-shrink-0">
          <div className="flex flex-1 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto px-8">
              <p className="text-base font-semibold text-gray-600">
                Your password is
                <span className="ml-1 text-indigo-600">{state.strength}</span>
              </p>
              <div className="flex flex-row gap-5 justify-center">
                <p className="my-8 flex items-baseline justify-center cursor-pointer">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 text-nowrap">
                    {state.password}
                  </span>
                </p>
                <span
                  className="my-auto pt-2 cursor-pointer"
                  onClick={copyToClipboard}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-900/50 hover:text-pink-600 cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                    />
                  </svg>
                </span>
              </div>

              <Button
                label="Generate new password"
                type="submit"
                class="w-fit"
              />
              <p className="mt-6 text-xs leading-5 text-gray-600">
                Your password will be generated and displayed above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PasswordGenerator
