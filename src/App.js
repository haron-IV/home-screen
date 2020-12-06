import React from 'react';
import { useDispatch } from 'react-redux'
import { LinksView } from './components/linksView'
import AppHeader from './components/appHeader'
import SectionBookmark from './components/sectionBookmark'
import AppFooter from './components/appFooter'
import { setLinks } from './store/links'
import { setBookmark } from './store/bookmarks'
import { setLinksOpened } from './store/stats'
import './App.css';
import { STORAGE_NAME, STORAGE_MODEL, getLinks, getBookmark } from './utils'

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
  const showBookmarkFromStorage = () => {
    dispatch(setBookmark(
      getBookmark()
    ))
  }

  showLinksFromStorage()
  showBookmarkFromStorage()
  dispatch(setLinksOpened())

  return (
    <div className="App">
      <AppHeader />
      <LinksView />
      <SectionBookmark />
      <AppFooter />
    </div>
  );
}

export default App;
