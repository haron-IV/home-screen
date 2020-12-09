import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './styles/linksView.css'
import SingleLink from './singleLink'
import AddNewLinkModal from './addNewLinkModal'
import { selectLinks } from '../store/links'
import { selectEdit, selectChangePosition } from '../store/menu'
import { toggleModal, selectIsModalVisible } from '../store/addLinkModal'


export function LinksView() {
  const links = useSelector(selectLinks)
  const isModalVisible = useSelector(selectIsModalVisible)
  const isEditing = useSelector(selectEdit)
  const isPositionChanging = useSelector(selectChangePosition)
  const dispatch = useDispatch()
  console.log(!isEditing || !isPositionChanging);
  const toggleModalVisibility = () => {
    dispatch(toggleModal())
  }
  
  return (
    <main className="links-view">
      {links.map(({name, href, img, id, index, favourite}) => <SingleLink 
        name={name}
        href={href}
        img={img}
        key={`${href}${name}`}
        index={index}
        id={id}
        isFavourite={favourite}
      />)
      }

      {isEditing || isPositionChanging ? null :
        <SingleLink 
         name=""
         href=""
         img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
         feature={toggleModalVisibility}
        />
      }

      {isModalVisible ? <AddNewLinkModal /> : null}
    </main>
  ); 
}
