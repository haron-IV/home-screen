import './styles/linksView.css'
import SingleLink from './singleLink'

export default function linksView() {
  const createNewLink = () => {
    // redux :)
    //
    alert()
  }
  return (
    <main className="links-view">
      <div>
        <SingleLink 
          name="youtube"
          href="https://youtube.com"
          img="https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg"
        />
        <SingleLink 
          name="add"
          href=""
          img="https://www.flaticon.com/svg/static/icons/svg/1828/1828925.svg"
          feature={createNewLink}
        />
        
      </div>
    </main>
  );
}
