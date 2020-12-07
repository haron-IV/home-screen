import React, { useRef, useState } from 'react'
import './styles/singleLink.css'
import ReactTooltip from 'react-tooltip';
import { useSelector, useDispatch } from 'react-redux'
import Draggable from 'react-draggable'
import { removeById, selectLinks, updateLinkPosition } from '../store/links'
import { toggleEditingModal } from '../store/addLinkModal'
import { selectEdit, selectChangePosition } from '../store/menu'
import { incrementOpenedLinks } from '../store/stats'

export default function SingleLink(props) {
  const dispatch = useDispatch()
  const linkWrapper = useRef()
  const openLink = (href) => {
    window.open(href)
    dispatch(incrementOpenedLinks())
  }
  const clikcFunc = () => {
    if (props.feature) props.feature()
    else {
      if (!isPositionChanging) openLink(props.href)
    }
  }
  
  const isEditing = useSelector(selectEdit)
  const isPositionChanging = useSelector(selectChangePosition)
  const getEditingClass = () => {
    const isOdd = number => number % 2
    if (isEditing && !props.feature) {
      if (isOdd(props.index) === 0) {
        return 'editing-1'
      } else {
        return 'editing-2'
      }
    }
  }

  const removeLink = (id, e) => {
    e.stopPropagation()
    dispatch(removeById(id))
  }

  const openEditWindow = (e, id) => {
    e.stopPropagation()
    dispatch(toggleEditingModal(id))
  }
  const isDraggableDisabled = () => {
    if (isPositionChanging && !Boolean(props.feature)) return false
    return true
  }
  let [draggedElement, setDraggedElement] = useState(null)
  const links = useSelector(selectLinks)
  const drag = (e) => {
    e.stopPropagation()
    linkWrapper.current.style.zIndex = -1
    setDraggedElement(props.index)
  }

  const [positionOfDraggable, setPositionOfDraggable] = useState({})
  const updatePosition = (e) => {
    let droppedAt = e.target
    let recurencyIndex = 0

    const setDroppedAtElement = () => {
      if (!droppedAt?.getAttribute('data-index') && recurencyIndex < 5) {
        droppedAt = droppedAt?.parentElement
        recurencyIndex++
        setDroppedAtElement()
      } else {
        recurencyIndex = 0
        return
      }
    }
    setDroppedAtElement()
    
    const movedElementIndex = props.index
    const droppedAtIndex = droppedAt?.getAttribute('data-index') ? droppedAt.getAttribute('data-index') : movedElementIndex
    
    dispatch(updateLinkPosition({droppedAtIndex, movedElementIndex}))
    linkWrapper.current.style.transform = 'translate(0px, 0px)'
    linkWrapper.current.style.zIndex = 0
  }
    
  return (
    <Draggable disabled={isDraggableDisabled()} onStart={(e) => drag(e)} onStop={(e) => updatePosition(e)} >
      <div className={'single-link-wrapper editing ' + getEditingClass()} ref={linkWrapper} data-index={props.index}>
        {isEditing && !props.feature ?
          <div>
            <button className="link-btn link-btn--delete" onClick={e => removeLink(props.id, e)} data-tip="remove">
              <ReactTooltip />
              <span>🗑</span>
            </button>

            <button className="link-btn link-btn--edit" onClick={e => openEditWindow(e, props.id)} data-tip="edit">
              <ReactTooltip />
              <span>⚙️</span>
            </button>
          </div>
          : 
          ''
        }

        <div className="single-link" onClick={ ()=> clikcFunc()} >
          {props.img.length > 4 ?
            <img className="single-link__img" alt="link" src={props.img} />
            :
            <span className="single-link__img--default">{props.name.slice(0, 1)}</span>
          }
          
        </div>
        <span className="single-link-name">{props.name}</span>
      </div>
    </Draggable>
  );
}
