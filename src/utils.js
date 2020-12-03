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
const setStorageLinks = (links) => {
  const storage = JSON.parse(getStorage())
  storage.links = links
  localStorage.setItem(STORAGE_NAME, JSON.stringify(storage))
}

const uuid =() => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = (dt + Math.random()*16)%16 | 0;
    dt = Math.floor(dt/16);
    return (c == 'x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

export { STORAGE_NAME, STORAGE_MODEL, getStorage, getLinks, addNewLink, uuid, setStorageLinks }