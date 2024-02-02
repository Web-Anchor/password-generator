import axios from 'axios'

// --------------------------------------------------------------------------------
// 📌  SWR fetchers
// --------------------------------------------------------------------------------

export async function fetcher(url: string) {
  return await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export function bodyFetcher(url: string, body?: any) {
  return axios.post(url, body)
}

// --------------------------------------------------------------------------------
// 📌  Default exports
// --------------------------------------------------------------------------------
export * from './git'
