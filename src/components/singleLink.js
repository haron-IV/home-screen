import './styles/singleLink.css'
import ReactTooltip from 'react-tooltip';
import { useSelector, useDispatch } from 'react-redux'
import { removeById } from '../store/links'
import { toggleEditingModal } from '../store/addLinkModal'
import { selectEdit } from '../store/menu'
import { incrementOpenedLinks } from '../store/stats'

export default function SingleLink(props) {
  const dispatch = useDispatch()
  const openLink = (href) => {
    window.open(href)
    dispatch(incrementOpenedLinks())
  }
  const clikcFunc = () => {
    if (props.feature) props.feature()
    else openLink(props.href)
  }
  
  const isEditing = useSelector(selectEdit)
  const getEditingClass = () => {
    const isOdd = number => number % 2
    if (isEditing && !props.feature) {
      if (isOdd(props.index) === 0) {
        return 'editing-1'
      } else {
        return 'editing-2'
      }
    }
  }

  const removeLink = (id, e) => {
    e.stopPropagation()
    dispatch(removeById(id))
  }

  const openEditWindow = (e, id) => {
    e.stopPropagation()
    dispatch(toggleEditingModal(id))
  }
  // TODO: add fav link for list it better to see
  //add drag and drop
  return (
    <div className={'single-link-wrapper editing ' + getEditingClass()} >
      
      {isEditing && !props.feature ?
        <div>
          <button className="link-btn link-btn--delete" onClick={e => removeLink(props.id, e)} data-tip="remove">
            <ReactTooltip />
            <span>🗑</span>
          </button>

          <button className="link-btn link-btn--edit" onClick={e => openEditWindow(e, props.id)} data-tip="edit">
            <ReactTooltip />
            <span>⚙️</span>
          </button>
        </div>
        : 
        ''
      }

      <div className="single-link" onClick={ ()=> clikcFunc()} >
        {props.img.length > 4 ?
          <img className="single-link__img" alt="link" src={props.img} />
          :
          <span className="single-link__img--default">{props.name.slice(0, 1)}</span>
        }
        
      </div>
      <span className="single-link-name">{props.name}</span>
    </div>
  );
}
