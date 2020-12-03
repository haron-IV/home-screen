import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/addLinkModal'
import { addLink } from '../store/links'
import { uuid } from '../utils'
import './styles/addNewLinkModal.css'

export default function AddNewLinkModal() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [icon, setIcon] = useState('')
  const nameLabelRef = useRef()
  const linkLabelRef = useRef()
  const iconLaberRef = useRef()

  const toggleLabel = (ref) => {
    let { opacity } = ref.current.style
    
    if (!Boolean(opacity) || JSON.parse(opacity) === 0) {
      ref.current.style.opacity = 1
    } else {
      ref.current.style.opacity = 0
    }
  }
  
  const toggleModalVisibility = e => {
    e.preventDefault()
    dispatch(toggleModal())
  }

  const prepareLink = () => {
    if (!link.includes('http')) {
      if (!link.includes('www')) {
        return `https://${link}`
      } else {
        if (link.split('www')[1].includes('.')) {
          return link.split('www')[1].replace('.', 'https://')
        }
      }
    } else {
      return link
    }
  }

  const addNewLink = e => {
    e.preventDefault()
    dispatch(addLink({
      name,
      href: prepareLink(),
      img: icon,
      id: uuid()
    }))
    toggleModalVisibility(e)
  }

  return (
    <div className="add-new-link-modal">
      <header className="add-new-link-modal__header">
        Add new link to the list
      </header>

      <form className="add-new-link-modal__configuration">
        <div className="input-wrapper">
          <input 
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={() => toggleLabel(nameLabelRef)}
            onBlur={() => toggleLabel(nameLabelRef)}
          />
          <label className="input-label" htmlFor="name" ref={nameLabelRef}>Name</label>
        </div>

        <div className="input-wrapper">
          <input
            className="input"
            type="text"
            name="link"
            id="link"
            placeholder="Link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onFocus={() => toggleLabel(linkLabelRef)}
            onBlur={() => toggleLabel(linkLabelRef)}
            />
          <label className="input-label" htmlFor="link" ref={linkLabelRef}>Link</label>
        </div>

        <div className="input-wrapper">
          <input
            className="input"
            type="text"
            name="link"
            id="link"
            placeholder="Icon"
            value={icon}
            onChange={e => setIcon(e.target.value)}
            onFocus={() => toggleLabel(iconLaberRef)}
            onBlur={() => toggleLabel(iconLaberRef)}
            />
          <label className="input-label" htmlFor="icon" ref={iconLaberRef}>Icon</label>
        </div>

        <div className="control-panel">
          <input type="submit" className="add-link-button" value="Add new link" onClick={e => addNewLink(e)}/>
          <button className="add-link-button" onClick={e => toggleModalVisibility(e)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
