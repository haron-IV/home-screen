import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/sectionBookmark.css'
import { addBookmark } from '../store/bookmarks'
import Bookmarks from './bookmarks'
import { uuid } from '../utils'

export default  function SectionBookmark() {
  const dispatch = useDispatch()
  const [link, setLink] = useState('')
  const addLinkToBookmark = e => {
    e.preventDefault()
    if (link.length > 5) {
      const bookmarkLink = {
        link,
        id: uuid()
      }
      dispatch(addBookmark(bookmarkLink))
    } else {
      alert('Cannot add empty link')
    }
  }

  return (
    <section className="section-bookmark">
      <div className="input-wrapper">
        <form className="bookmark-form" onSubmit={e => addLinkToBookmark(e)}>
          <input type="text" className="bookmark-input" value={link} onInput={e => setLink(e.target.value)}/>
          <input type="submit" className="bookmark-submit" value="Add link"/>
        </form>
      </div>

      <Bookmarks />
    </section>
  ); 
}
