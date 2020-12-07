import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/linksView.css'
import SingleLink from './singleLink'
import AddNewLinkModal from './addNewLinkModal'
import { selectLinks } from '../store/links'
import { toggleModal, selectIsModalVisible } from '../store/addLinkModal'


export function LinksView() {
  const links = useSelector(selectLinks)
  const isModalVisible = useSelector(selectIsModalVisible)
  const dispatch = useDispatch()
  
  const toggleModalVisibility = () => {
    dispatch(toggleModal())
  }
  
  return (
    <main className="links-view">
      {links.map(({name, href, img, id, index}) => <SingleLink 
        name={name}
        href={href}
        img={img}
        key={`${href}${name}`}
        index={index}
        id={id}
      />)
      }

      <SingleLink 
        name=""
        href=""
        img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
        feature={toggleModalVisibility}
      />

      {isModalVisible ? <AddNewLinkModal /> : null}
    </main>
  ); 
}
