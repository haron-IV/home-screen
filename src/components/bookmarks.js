import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectBookmark } from '../store/bookmarks'
import ReactTooltip from 'react-tooltip';
import './styles/Bookmarks.css'

export default  function Bookmarks() {
  const bokmarkLinks = useSelector(selectBookmark)
  
  const prepareLinkToShow = link => link.length > 50 ? `${link.slice(0, 45)}...` : link

  return (
    <div className="bookmark-list-wrapper">
      <ul className="bookmark-list">
        {bokmarkLinks.map( ({ link, id}) => <li key={id} className="bookmark-link">
          <a href={link} target="_blank" rel="noreferrer" data-tip={link.length > 50 ? link : null}>{prepareLinkToShow(link)}</a>
          <ReactTooltip />
        </li>)}
      </ul>
    </div>
  ); 
}
