import { useSelector } from "react-redux";
import { getLinksCount } from "../store/links";
import { selectBookmarkCount } from "../store/bookmarks";
import { selectOpenedLinks, selectSearchCount, selectTranslatedPhrases } from "../store/stats";
import "./styles/appFooter.css";

export default function AppHeader(props) {
  const linksCount = useSelector(getLinksCount);
  const bookmarkCount = useSelector(selectBookmarkCount);
  const linksOpened = useSelector(selectOpenedLinks);
  const searchedPhrases = useSelector(selectSearchCount);
  const translatedPhrases = useSelector(selectTranslatedPhrases);

  return (
    <footer className="app-footer">
      <ul className="app-footer-links">
        <li className="footer-link-wrapper">
          <a href="http://bartek-dev.pl" target="_blank" rel="noreferrer">
            Author
          </a>
        </li>
        <li className="footer-link-wrapper">
          <a href="https://github.com/venglas/home-screen" target="_blank" rel="noreferrer">
            Code
          </a>
        </li>

        <li className="footer-link-wrapper">
          <a href="https://github.com/venglas/home-screen/issues" target="_blank" rel="noreferrer">
            Report issue
          </a>
        </li>
      </ul>

      <div className="footer-stats">
        <ul className="stats-wrapper">
          <li className="single-stat">
            <span className="stat-name">Links: </span>
            <span className="stat-value">{linksCount}</span>
          </li>
          <li className="single-stat">
            <span className="stat-name">Bookmarks: </span>
            <span className="stat-value">{bookmarkCount}</span>
          </li>
          <li className="single-stat">
            <span className="stat-name">Total items: </span>
            <span className="stat-value">{bookmarkCount + linksCount}</span>
          </li>
          <li className="single-stat">
            <span className="stat-name">Links opened: </span>
            <span className="stat-value">{linksOpened}</span>
          </li>
          <li className="single-stat">
            <span className="stat-name">Searched phrases: </span>
            <span className="stat-value">{searchedPhrases}</span>
          </li>
          <li className="single-stat">
            <span className="stat-name">Translated phrases: </span>
            <span className="stat-value">{translatedPhrases}</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
