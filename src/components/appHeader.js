import { useDispatch, useSelector } from 'react-redux';
import { toggleEdit, selectEdit, toggleChangingPosition, selectChangePosition } from '../store/menu'
import './styles/appHeader.css'

export default function AppHeader() {
  const dispatch = useDispatch()
  const isEditing = useSelector(selectEdit)
  const isPositionChanging = useSelector(selectChangePosition)

  return (
    <header className="app-header">
      <nav className="app-header__navigation">
        <ul className="menu">
          <li className="menu__item" onClick={() => dispatch(toggleEdit())}>
            <span>
              Edit
              <span className="icon">
                {isEditing ? ' ❌' : ''}
              </span>
            </span>
          </li>
          <li className="menu__item" onClick={() => dispatch(toggleChangingPosition())}>
            <span>
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
