import './styles/singleLink.css'

export default function linksView(props) {
  const openLink = (href) => {
    window.open(href)
  }
  const clikcFunc = () => {
    if (props.feature) props.feature()
    else openLink(props.href)
  }
  
  return (
    <div className="single-link-wrapper" onClick={ ()=> clikcFunc()}>
      <div className="single-link">
        <img className="single-link__img" alt="link" src={props.img} />
      </div>
      <span className="single-link-name">{props.name}</span>
    </div>
  );
}
