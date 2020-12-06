import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectBookmark, removeBookmarkLink } from '../store/bookmarks'
import { selectEdit } from '../store/menu'
import { incrementOpenedLinks } from '../store/stats'
import ReactTooltip from 'react-tooltip';
import './styles/Bookmarks.css'

export default  function Bookmarks() {
  const dispatch = useDispatch()
  const bokmarkLinks = useSelector(selectBookmark)
  const isEditing = useSelector(selectEdit)

  const prepareLinkToShow = link => link.length > 50 ? `${link.slice(0, 45)}...` : link
  const deleteLink = (id, e) => {
    e.stopPropagation()
    dispatch(removeBookmarkLink(id))
  }
  const openLink = link => {
    window.open(link)
    dispatch(incrementOpenedLinks())
  }

  return (
    <div className="bookmark-list-wrapper">
      <ul className="bookmark-list">
        {bokmarkLinks.map( ({ link, linkAlias, id}) => <li key={id} className="bookmark-link" onClick={() => openLink(link)}>
          <div>
            {linkAlias ? <span className="link-alias">{linkAlias}:</span> : null}
            <a href={link} target="_blank" rel="noreferrer" data-tip={link.length > 50 ? link : null}>
              {prepareLinkToShow(link)}
            </a>
          </div>
          
          {isEditing ?
            <button className="bookmark-delete" onClick={e =>  deleteLink(id, e)}>🗑</button> 
          : <ReactTooltip />}
        </li>)}
      </ul>
    </div>
  ); 
}
