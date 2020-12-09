import { useState } from 'react'
import './styles/askGoogle.css'

export default function AskGoogle() {
  const GOOGLE_URL = 'https://google.com/search?q='
  const [searchingPhrase, setSearchingPhrase] = useState('')

  const askGoogle = e => {
    e.preventDefault()
    window.open(`${GOOGLE_URL}${encodeURI(searchingPhrase)}`)
    setSearchingPhrase('')
  }

  return (
    <div className="ask-google">
      <form className="ask-google__form" onSubmit={e => askGoogle(e)}>
        <input className="ask-google-input" type="text" placeholder="Ask google" value={searchingPhrase} onInput={e => setSearchingPhrase(e.target.value)}/>
        <input className="ask-google-submit" type="submit" value="search" />
      </form>
    </div>
  );
}
