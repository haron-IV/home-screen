import { useDispatch, useSelector } from 'react-redux';
import { toggleEdit, selectEdit } from '../store/menu'
import './styles/appHeader.css'

export default function AppHeader(props) {
  const dispatch = useDispatch()
  const isEditing = useSelector(selectEdit)  

  return (
    <header className="app-header">
      <nav className="app-header__navigation">
        <ul className="menu">
          <li className="menu__item" onClick={() => dispatch(toggleEdit())}>
            <span>
              Edit
              {isEditing ? ' ❌' : ''}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
