import React, { useEffect, useState } from 'react'
import Checkbox from '@components/Checkbox'
import Button from '@components/Button'
import Slider from '@components/Slider'
import {
  calculatePasswordStrength,
  classNames,
  generateRandomPassword,
} from '@helpers/index'

type StateProps = {
  numbers: boolean
  symbols: boolean
  uppercase: boolean
  lowercase: boolean
  length?: number
  password?: string
  strength?: string
}

const PasswordGenerator = () => {
  const [state, setState] = useState<StateProps>({
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    password: '',
  })

  const isAllDisabled =
    !state.numbers && !state.symbols && !state.uppercase && !state.lowercase

  function submit(event: any) {
    event.preventDefault()

    // --------------------------------------------------------------------------------
    // 📌 Submitted form values
    // --------------------------------------------------------------------------------
    const formData = new FormData(event.target)
    const config = Object.fromEntries(formData)

    const psw = generateRandomPassword({
      length: Number(config?.[`slider-thumb`]),
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

  function onChange(event: any) {
    let { name, value, checked } = event.target

    const psw = generateRandomPassword({
      length: name === 'slider-thumb' ? Number(value) : state.length!,
      options: {
        numbers: name === 'numbers' ? checked : state.numbers,
        symbols: name === 'symbols' ? checked : state.symbols,
        uppercase: name === 'uppercase' ? checked : state.uppercase,
        lowercase: name === 'lowercase' ? checked : state.lowercase,
        excludeSimilarCharacters: false,
        excludeAmbiguousCharacters: false,
      },
    })
    const strength = calculatePasswordStrength(psw)

    setState({
      ...state,
      [name]: value === 'on' ? checked : value,
      password: psw,
      strength,
    })
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
    console.log('INITIAL ', psw, strength)

    setState({ ...state, password: psw, strength })
  }, [])

  function copyToClipboard() {
    navigator.clipboard.writeText(state.password!)
  }

  const perks = [
    'Enhanced Security.',
    'Reduced Risk of Hacking.',
    'Data Confidentiality.',
    'Peace of Mind.',
  ]

  return (
    <form
      className="lg:mx-auto my-10 max-w-7xl px-6 lg:px-8"
      onSubmit={submit}
      onChange={onChange}
    >
      <div className="flex flex-col lg:flex-row mx-auto max-w-none rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-[1400px]">
        <div className="flex flex-col order-2 lg:order-1 p-8 sm:p-10 lg:flex-1 lg:max-w-[500px]">
          <div className="order-2 lg:order-1 mt-4 lg:mt-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-100">
              Password Generator
            </h3>

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
          </div>
          <div className="order-1 lg:order-2">
            <div className="lg:mt-10 flex items-center gap-x-4">
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
              <Slider
                name="slider-thumb"
                label="Password Length"
                minValue={12}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'order-1 lg:order-2 flex flex-1 p-2 lg:mt-0 lg:w-full lg:max-w-2xl lg:flex-shrink-0',
          )}
        >
          <div
            className={classNames(
              'flex flex-1 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:min-w-[516px]',
              isAllDisabled && 'bg-pink-100 ring-pink-200/50',
            )}
          >
            {isAllDisabled && (
              <div className="mx-auto px-8">
                <p className="text-base font-semibold text-gray-600">
                  Please select at least one option
                </p>
              </div>
            )}

            {!isAllDisabled && (
              <div className="mx-auto lg:px-8">
                <p className="text-base font-semibold text-gray-600">
                  Your password is
                  <span className="ml-1 text-indigo-600">{state.strength}</span>
                </p>
                <div className="flex flex-row gap-2 justify-center">
                  <p className="my-4 lg:my-8 flex items-baseline justify-center cursor-pointer">
                    <input
                      type="text"
                      value={state.password}
                      className="text-2xl lg:text-5xl font-bold tracking-tight text-gray-900 lg:text-nowrap max-w-52 lg:max-w-96 border-none bg-transparent text-center focus:outline-none focus:ring-transparent focus:border-transparent focus:ring-0"
                      readOnly
                    />
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
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default PasswordGenerator
