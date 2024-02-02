import React from 'react'
import { classNames } from '@helpers/index.ts'

type Props = {
  jsxCode?: string
}

export default function PrevComponent(props: Props) {
  const returnStatementRegex = /return\s*\(([\s\S]+)\);/
  const matches = props?.jsxCode?.match(returnStatementRegex)

  if (matches) {
    const returnContent = matches[1]
    console.log(returnContent)
  } else {
    console.log('No return statement found')
  }

  return null
}
