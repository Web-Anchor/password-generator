const STORAGE_NAME = import.meta.env.PUBLIC_STORAGE_NAME ?? '_v0_storage'

export const saveToLocalStorage = (obj: Object) => {
  // save to local storage
  localStorage.setItem(STORAGE_NAME, JSON.stringify(obj))

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

  return { data: null }
}
