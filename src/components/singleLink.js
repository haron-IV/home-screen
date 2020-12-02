import './styles/singleLink.css'
import { useSelector } from 'react-redux'
import { selectEdit } from '../store/menu'

export default function SingleLink(props) {
  const openLink = (href) => {
    window.open(href)
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

  return (
    <div className={'single-link-wrapper editing ' + getEditingClass()} onClick={ ()=> clikcFunc()}>
      {isEditing && !props.feature ?
        <button className="delete-link-btn">
          <span>X</span>
        </button>
        : 
        ''
      }
      

      <div className="single-link">
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
