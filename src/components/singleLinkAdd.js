import './styles/singleLink.css'

export default function SingleLinkAdd(props) {
  return (
    <div className="single-link-wrapper" onClick={ () => }>
      <div className="single-link">
        <img className="single-link__img" alt="link" src="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg" />
      </div>
      <span className="single-link-name">{props.name}</span>
    </div>
  );
}
