import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/linksView.css";
import SingleLink from "./singleLink";
import AddNewLinkModal from "./addNewLinkModal";
import { selectLinks } from "../store/links";
import { selectEdit, selectChangePosition, selectNewTabOpening } from "../store/menu";
import { toggleModal, selectIsModalVisible } from "../store/addLinkModal";
import { incrementTranslatedPhrases } from "../store/stats";

export function LinksView() {
  const links = useSelector(selectLinks);
  const isModalVisible = useSelector(selectIsModalVisible);
  const isEditing = useSelector(selectEdit);
  const isPositionChanging = useSelector(selectChangePosition);
  const isNewTabOpeningActive = useSelector(selectNewTabOpening);
  const dispatch = useDispatch();
  const toggleModalVisibility = () => {
    dispatch(toggleModal());
  };
  const [textToTranslate, setTextToTranslate] = useState("");
  const handleTranslate = () => {
    if (textToTranslate.trim() === "") return;
    window.open(`https://translate.google.pl/?sl=en&tl=pl&text=${textToTranslate}`, isNewTabOpeningActive ? "_blank" : "_self");
    dispatch(incrementTranslatedPhrases());
  };

  return (
    <main className="links-view">
      <div className="links-wrapper">
        {links.map(({ name, href, img, id, index, favourite }) => (
          <SingleLink name={name} href={href} img={img} key={`${href}${name}`} index={index} id={id} isFavourite={favourite} />
        ))}

        {isEditing || isPositionChanging ? null : (
          <SingleLink name="" href="" img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg" feature={toggleModalVisibility} />
        )}

        {isModalVisible ? <AddNewLinkModal /> : null}
      </div>

      <div className="translator-wrapper">
        <textarea
          className="textfield"
          onChange={(e) => setTextToTranslate(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTranslate();
          }}
        ></textarea>
        <button className="translate-button" onClick={() => handleTranslate()}>
          Translate (en => pl)
        </button>
      </div>
    </main>
  );
}
