import useSWR from 'swr'
import { fetcher } from '.'

type HookTypes = {
  username?: string
}

export function useGitProfile(props: HookTypes) {
  const { data, error, isLoading } = useSWR(
    props.username
      ? `https://api.github.com/users/${props.username}`
      : 'https://picsum.photos/200/300', // TODO: replace with a default image

    (url: string) => fetcher(url),
    { revalidateOnFocus: true },
  )

  return {
    data: data,
    error,
    isLoading,
  }
}
