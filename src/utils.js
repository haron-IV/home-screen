const STORAGE_NAME = 'homeScreenApp'
const STORAGE_MODEL = {
  links: []
}
const getStorage = () => localStorage.getItem(STORAGE_NAME)
const setStograge = (storage) => localStorage.setItem(STORAGE_NAME, JSON.stringify(storage))
const getLinks = () => JSON.parse(localStorage.getItem(STORAGE_NAME)).links
const addNewLink = (link) => {
  const storage = JSON.parse(getStorage())
  storage.links.push(link)
  setStograge(storage)
}

export { STORAGE_NAME, STORAGE_MODEL, getStorage, getLinks, addNewLink }