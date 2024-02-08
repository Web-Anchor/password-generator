import React, { useState } from 'react'

const PasswordGenerator = () => {
  const [passwords, setPasswords] = useState(['1234', '1234'])
  const [copiedPassword, setCopiedPassword] = useState(null)
  const [options, setOptions] = useState({
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
    length: 12,
  })

  const generatePassword = () => {
    console.log('Generating password...')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-wrap gap-4 p-4 bg-white shadow-sm ring-1 ring-gray-900/10 rounded-lg">
        {Object.keys(options).map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              // checked={options[option]}
              onChange={(e) => console.log(e.target.checked)}
              className="rounded text-emerald-500 focus:ring-emerald-400"
            />
            {option}
          </label>
        ))}
      </div>
      <button
        onClick={generatePassword}
        className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        Generate Password
      </button>
      <ul
        role="list"
        className="divide-y divide-gray-200 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/10 rounded-lg"
      >
        {passwords.map((password, index) => (
          <li
            key={index}
            className="relative flex items-center justify-between px-6 py-4 hover:bg-gray-50"
          >
            <div className="flex min-w-0 gap-x-4 items-center">
              <p className="text-md font-medium leading-6 text-gray-900 truncate">
                {password}
              </p>
            </div>
            <button
              onClick={() => console.log('Copying password...')}
              className={`flex shrink-0 items-center gap-x-2 ${
                copiedPassword === password
                  ? 'text-emerald-500'
                  : 'text-gray-400'
              }`}
            >
              {/* <ClipboardCopyIcon className="h-5 w-5" aria-hidden="true" /> */}
              icon
              {copiedPassword === password && (
                <span className="text-xs">Copied!</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PasswordGenerator
