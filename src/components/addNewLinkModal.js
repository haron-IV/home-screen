import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectModalType } from '../store/addLinkModal'
import { toggleModal, selectEditingElementId } from '../store/addLinkModal'
import { selectLinks, editLink } from '../store/links'
import { addLink } from '../store/links'
import { uuid } from '../utils'
import './styles/addNewLinkModal.css'

export default function AddNewLinkModal() {
  const dispatch = useDispatch()
  const modalType = useSelector(selectModalType)
  const editedElementId = useSelector(selectEditingElementId)
  const links = useSelector(selectLinks)

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [icon, setIcon] = useState('')
  useEffect(() => {
    if (modalType === 'edit' && editedElementId !== null) {
      const toEdit = links.filter(link => link.id === editedElementId)[0]
      setName(toEdit.name)
      setLink(toEdit.href)
      setIcon(toEdit.img)
    }
  }, [])
  
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

  const modalAction = e => {
    e.preventDefault()

    if (modalType === 'edit') {
      dispatch(editLink({
        name,
        href: prepareLink(),
        img: icon,
        id: editedElementId
      }))
    } else {
      dispatch(addLink({
        name,
        href: prepareLink(),
        img: icon,
        id: uuid()
      }))
    }
    toggleModalVisibility(e)
  }

  return (
    <div className="add-new-link-modal">
      <header className="add-new-link-modal__header">
        {modalType === 'edit' ? 'Edit link' : 'Add new link to the list'}
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
          <input type="submit" className="add-link-button" value={modalType === 'edit' ? 'confirm editing' : 'Add new link'} onClick={e => modalAction(e)}/>
          <button className="add-link-button" onClick={e => toggleModalVisibility(e)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
