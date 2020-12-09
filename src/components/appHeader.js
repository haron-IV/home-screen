import { useDispatch, useSelector } from 'react-redux';
import { toggleEdit, selectEdit, toggleChangingPosition, selectChangePosition } from '../store/menu'
import AskGoogle from './askGoogle'
import './styles/appHeader.css'

export default function AppHeader() {
  const dispatch = useDispatch()
  const isEditing = useSelector(selectEdit)
  const isPositionChanging = useSelector(selectChangePosition)

  const isMenuItemActive = (isActive) => isActive ? 'menu-item-active' : null

  return (
    <header className="app-header">
      <AskGoogle />
      <nav className="app-header__navigation">
        <ul className="menu">
          <li className={'menu__item ' + isMenuItemActive(isEditing)} onClick={() => dispatch(toggleEdit())}>
            <span className="item-text">
              Edit
              <span className="icon">
                {isEditing ? ' ❌' : ''}
              </span>
            </span>
          </li>
          <li className={'menu__item ' + isMenuItemActive(isPositionChanging)} onClick={() => dispatch(toggleChangingPosition())}>
            <span className="item-text">
              Change position
              <span className="icon">
                {isPositionChanging ? ' ❌' : ''}
              </span>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
