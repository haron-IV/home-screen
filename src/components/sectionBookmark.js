import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import './styles/sectionBookmark.css'
import { addBookmark } from '../store/bookmarks'
import Bookmarks from './bookmarks'
import { uuid } from '../utils'

export default  function SectionBookmark() {
  const dispatch = useDispatch()
  const [link, setLink] = useState('')
  const [linkAlias, setLinkAlias] = useState('')
  const addLinkToBookmark = e => {
    e.preventDefault()
    if (link.length > 5) {
      const bookmarkLink = {
        link,
        linkAlias,
        id: uuid()
      }
      dispatch(addBookmark(bookmarkLink))
      setLink('')
      setLinkAlias('')
    } else {
      // TODO: add modal :)
      alert('Cannot add empty link')
    }
  }

  return (
    <section className="section-bookmark">
      <div className="input-wrapper">
        <form className="bookmark-form" onSubmit={e => addLinkToBookmark(e)}>
          <input type="text" className="bookmark-input" value={link} placeholder="Link" onInput={e => setLink(e.target.value)}/>
          <input type="text" className="bookmark-input bookmark-input-alias" value={linkAlias} placeholder="Link alias" onInput={e => setLinkAlias(e.target.value)}/>
          <input type="submit" className="bookmark-submit" value="Add link"/>
        </form>
      </div>

      <Bookmarks />
    </section>
  ); 
}
