const STORAGE_NAME = import.meta.env.PUBLIC_STORAGE_NAME ?? '_v0_storage'

export const saveToLocalStorage = (obj: Object | string) => {
  const data = getFromLocalStorage()
  // add new obj to data object
  const dataArray = [...(data?.data ?? []), obj]
  localStorage.setItem(STORAGE_NAME, JSON.stringify(dataArray))

  return { obj: JSON.stringify(obj) }
}

export const getFromLocalStorage = () => {
  // get from local storage
  const data = localStorage.getItem(STORAGE_NAME)

  return { data: JSON.parse(data as string) }
}

export const removeFromLocalStorage = (name?: string) => {
  // remove from local storage
  localStorage.removeItem(name ?? STORAGE_NAME)
}
