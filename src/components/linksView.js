import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/linksView.css'
import SingleLink from './singleLink'
import AddNewLinkModal from './addNewLinkModal'
import { selectLinks } from '../store/links'
import { toggleModal, selectIsAddNewModalVisible } from '../store/appStore'


export function LinksView() {
  const links = useSelector(selectLinks)
  const isModalVisible = useSelector(selectIsAddNewModalVisible)
  const dispatch = useDispatch()
  
  const toggleModalVisibility = () => {
    dispatch(toggleModal())
  }
  
  return (
    <main className="links-view">
      {links.map(({name, href, img}) => <SingleLink 
        name={name}
        href={href}
        img={img}
        key={`${href}${name}`}
      />)
      }

      <SingleLink 
        name="add"
        href=""
        img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
        feature={toggleModalVisibility}
      />

      {isModalVisible ? 
      <AddNewLinkModal /> 
      : null}
    </main>
  );
}
