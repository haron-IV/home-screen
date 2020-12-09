import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectBookmark, removeBookmarkLink } from '../store/bookmarks'
import { selectEdit } from '../store/menu'
import { incrementOpenedLinks } from '../store/stats'
import { selectDeviceWidth } from '../store/appStore'
import './styles/Bookmarks.css'

export default  function Bookmarks() {
  const dispatch = useDispatch()
  const bokmarkLinks = useSelector(selectBookmark)
  const isEditing = useSelector(selectEdit)
  const deviceWidth = useSelector(selectDeviceWidth)

  const calcHrefWidth = () => (deviceWidth  / 17) - 3
  const prepareLinkToShow = link => {
    const shortenLink = link.slice(0, calcHrefWidth())
    if (shortenLink.length !== link.length) return `${shortenLink}...`
    return link
  }
  const getTooltipLink = link => {
    if (prepareLinkToShow(link).length === link.length) return null
    return link
  }

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
            <a href={link} target="_blank" rel="noreferrer" data-tip={getTooltipLink(link)}>
              {prepareLinkToShow(link)}
            </a>
          </div>
          
          {isEditing ?
            <button className="bookmark-delete" onClick={e =>  deleteLink(id, e)}>🗑</button> 
          : null}
        </li>)}
      </ul>
    </div>
  ); 
}
