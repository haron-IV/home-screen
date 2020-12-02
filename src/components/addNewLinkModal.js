import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { toggleModal } from '../store/appStore'
import { addLink } from '../store/links'
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

  const addNewLink = e => {
    e.preventDefault()
    dispatch(addLink({
      name,
      href: link,
      img: icon,
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
            placeholder="name"
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
            placeholder="link"
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
            placeholder="link"
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
