import React from 'react';
import { useDispatch } from 'react-redux'
import { LinksView } from './components/linksView'
import { setLinks } from './store/links'
import './App.css';
import { STORAGE_NAME, STORAGE_MODEL, getLinks } from './utils'

function App() {
  const initStorage = () => {
    if (!localStorage.getItem(STORAGE_NAME)) {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(STORAGE_MODEL))
    }
  }
  initStorage()

  const dispatch = useDispatch()
  const showLinksFromStorage = () => {
    dispatch(setLinks(
      getLinks()
    ))
  }

  showLinksFromStorage()

  return (
    <div className="App">
      <LinksView />
    </div>
  );
}

export default App;
