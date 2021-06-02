import React, { useRef, useState } from "react";
import "./styles/singleLink.css";
import { useSelector, useDispatch } from "react-redux";
import Draggable from "react-draggable";
import { removeById, updateLinkPosition, toggleFavourites } from "../store/links";
import { toggleEditingModal } from "../store/addLinkModal";
import { selectEdit, selectChangePosition, selectNewTabOpening } from "../store/menu";
import { incrementOpenedLinks } from "../store/stats";
import { drag, updatePosition, isDraggableDisabled } from "./utils/dragAndDropUtil";

export default function SingleLink(props) {
  const dispatch = useDispatch();
  const linkWrapper = useRef();
  const isNewTabOpening = useSelector(selectNewTabOpening);
  const clikcFunc = () => {
    if (props.feature) props.feature();
  };

  const isEditing = useSelector(selectEdit);
  const isPositionChanging = useSelector(selectChangePosition);
  const [isElementDragged, setIsElementDragged] = useState(false);
  const getEditingClass = () => {
    const isOdd = (number) => number % 2;
    if (isEditing && !props.feature) {
      if (isOdd(props.index) === 0) {
        return "editing-1";
      } else {
        return "editing-2";
      }
    }
  };
  const isFavourite = () => {
    if (props.isFavourite) return "single-link-fovurite";
    else return "";
  };

  const removeLink = (id, e) => {
    e.stopPropagation();
    dispatch(removeById(id));
  };

  const openEditWindow = (e, id) => {
    e.stopPropagation();
    dispatch(toggleEditingModal(id));
  };

  const toggleFavourite = (e, id) => {
    e.stopPropagation();
    dispatch(toggleFavourites(id));
  };

  const updatePostionDraggedElement = (e) => {
    setIsElementDragged(false);
    dispatch(updateLinkPosition(updatePosition(e, props.index, linkWrapper)));
  };

  return (
    <Draggable
      disabled={isDraggableDisabled(isPositionChanging, props)}
      onStart={(e) => drag(e, linkWrapper)}
      onDrag={() => setIsElementDragged(true)}
      onStop={(e) => updatePostionDraggedElement(e)}
      position={{ x: 0, y: 0 }}
    >
      <div className={"single-link-wrapper editing " + getEditingClass()} ref={linkWrapper} data-index={props.index}>
        {isEditing && !props.feature ? (
          <div>
            <button className="link-btn link-btn--delete" onClick={(e) => removeLink(props.id, e)} data-tip="remove">
              <span>🗑</span>
            </button>

            <button className="link-btn link-btn--edit" onClick={(e) => openEditWindow(e, props.id)} data-tip="edit">
              <span>⚙️</span>
            </button>

            <button className="link-btn link-btn--favourite" onClick={(e) => toggleFavourite(e, props.id)}>
              <span>⭐️</span>
            </button>
          </div>
        ) : null}

        <a href={props.href} {...{ target: isNewTabOpening && !isPositionChanging && "_blank" }} className="not-styled-anchor" onClick={() => dispatch(incrementOpenedLinks())}>
          <div className={"single-link " + isFavourite()} onClick={() => clikcFunc()}>
            {isPositionChanging && !isElementDragged && !props.feature ? <span className="position-changing-icon">🤚</span> : null}

            {isPositionChanging && isElementDragged ? <span className="position-changing-icon position-changing-icon--dragged">🤏</span> : null}

            <span className="fovourite-sign">{props.isFavourite && !isPositionChanging ? "⭐️" : null}</span>

            {props.img.length > 4 ? (
              <img className="single-link__img" alt="link" src={props.img} />
            ) : (
              <span className="single-link__img--default">{props.name.slice(0, 1)}</span>
            )}
          </div>
          <span className="single-link-name">{props.name}</span>
        </a>
      </div>
    </Draggable>
  );
}
