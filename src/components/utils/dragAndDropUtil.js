export const drag = (e, linkWrapper) => {
  e.stopPropagation()
  linkWrapper.current.style.zIndex = -1
}

export const updatePosition = (e, index, linkWrapper) => {
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

  const movedElementIndex = index
  const droppedAtIndex = () => { 
    if (droppedAt) {
      return droppedAt?.getAttribute('data-index') ? droppedAt.getAttribute('data-index') : movedElementIndex 
    }
    return movedElementIndex
  }

  // linkWrapper.current.style.transform = 'translate(0px, 0px)'
  linkWrapper.current.style.zIndex = 0

  return {movedElementIndex, droppedAtIndex: droppedAtIndex()}
}

export const isDraggableDisabled = (isPositionChanging, props) => {
  if (isPositionChanging && !Boolean(props.feature)) return false
  return true
}