import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/linksView.css'
import SingleLink from './singleLink'
import AddNewLinkModal from './addNewLinkModal'
import { addLink, selectLinks } from '../store/links'


export function LinksView() {
  const links = useSelector(selectLinks)
  const dispatch = useDispatch()
  
  const addNewLink = () => {
    dispatch(addLink({
      name: "test",
      href: "https://google.com",
      img: "https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
    }))
  }
  return (
    <main className="links-view">
      {links.map(({name, href, img}) => <SingleLink 
        name={name}
        href={href}
        img={img}
      />)
        
      }
      <SingleLink 
        name="add"
        href=""
        img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
        feature={addNewLink}
      />
      <AddNewLinkModal />
    </main>
  );
}
