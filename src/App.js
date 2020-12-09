import React from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux'
import { LinksView } from './components/linksView'
import AppHeader from './components/appHeader'
import SectionBookmark from './components/sectionBookmark'
import AppFooter from './components/appFooter'
import ImportDataFromBackupModal from './components/importDataFromBackupModal'
import { setLinks } from './store/links'
import { setBookmark } from './store/bookmarks'
import { setLinksOpened } from './store/stats'
import { setDeviceWidth } from './store/appStore'
import { selectDataImporting } from './store/menu'
import './App.css';
import { STORAGE_NAME, STORAGE_MODEL, getLinks, getBookmark } from './utils'

function App() {
  const isDataImporting = useSelector(selectDataImporting)
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
  const setWindowSize = () => {
    dispatch(setDeviceWidth(window.innerWidth))
  }

  showLinksFromStorage()
  showBookmarkFromStorage()
  dispatch(setLinksOpened())
  setWindowSize()
  window.addEventListener('resize', setWindowSize)

  return (
    <div className="App">
      <AppHeader />
      <LinksView />
      <SectionBookmark />
      <AppFooter />
      {isDataImporting ? <ImportDataFromBackupModal /> : null}
      
      <ReactTooltip />
    </div>
  );
}

export default App;
