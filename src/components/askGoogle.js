import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNewTabOpening } from "../store/menu";
import { incrementSearchCount } from "../store/stats";
import "./styles/askGoogle.css";

export default function AskGoogle() {
  const dispatch = useDispatch();
  const GOOGLE_URL = "https://google.com/search?q=";
  const [searchingPhrase, setSearchingPhrase] = useState("");
  const isNewTabOpeningOn = useSelector(selectNewTabOpening);

  const askGoogle = (e) => {
    e.preventDefault();
    window.open(`${GOOGLE_URL}${encodeURI(searchingPhrase)}`, !isNewTabOpeningOn && "_self");
    dispatch(incrementSearchCount());
    setSearchingPhrase("");
  };

  return (
    <div className="ask-google">
      <form className="ask-google__form" onSubmit={(e) => askGoogle(e)}>
        <input
          className="ask-google-input"
          type="text"
          placeholder="Ask google"
          autoFocus
          value={searchingPhrase}
          onInput={(e) => setSearchingPhrase(e.target.value)}
        />
        <input className="ask-google-submit" type="submit" value="search" />
      </form>
    </div>
  );
}
