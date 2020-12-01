const STORAGE_NAME = 'homeScreenApp'
const STORAGE_MODEL = {}
const getStorage = () => localStorage.getItem(STORAGE_NAME)

export { STORAGE_NAME, STORAGE_MODEL, getStorage }