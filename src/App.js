import React from 'react';
// import { Counter } from './features/counter/Counter';
import LinksView from './components/linksView'
import './App.css';
import { STORAGE_NAME } from './utils'

function App() {
  const initStorage = () => {
    if (!localStorage.getItem(STORAGE_NAME)) {
      localStorage.setItem(STORAGE_NAME, JSON.stringify({}))
    }
  }
  initStorage()
  return (
    <div className="App">
      <LinksView />
    </div>
  );
}

export default App;
