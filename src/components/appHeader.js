import { useDispatch, useSelector } from "react-redux";
import {
  toggleEdit,
  selectEdit,
  toggleChangingPosition,
  selectChangePosition,
  toggleDataImporting,
  selectNewTabOpening,
  toggleNewTabOpening,
} from "../store/menu";
import { getStorage } from "../utils";
import AskGoogle from "./askGoogle";
import "./styles/appHeader.css";

export default function AppHeader() {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectEdit);
  const isNewTabOpeningActive = useSelector(selectNewTabOpening);
  const isPositionChanging = useSelector(selectChangePosition);

  const isMenuItemActive = (isActive) => (isActive ? "menu-item-active" : null);

  const createBackup = () => {
    const a = document.createElement("a");
    const file = new Blob([getStorage()], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "home-app-backup";
    a.click();
  };

  return (
    <header className="app-header">
      <AskGoogle />
      <nav className="app-header__navigation">
        <ul className="menu">
          <li
            className={"menu__item"}
            onClick={() => {
              dispatch(toggleNewTabOpening());
            }}
          >
            New tab opening
            <span className="icon">{isNewTabOpeningActive && "✅"}</span>
          </li>
          <li className={"menu__item " + isMenuItemActive(isEditing)} onClick={() => dispatch(toggleEdit())}>
            <span className="item-text">
              Edit
              <span className="icon">{isEditing ? " ❌" : ""}</span>
            </span>
          </li>
          <li className={"menu__item " + isMenuItemActive(isPositionChanging)} onClick={() => dispatch(toggleChangingPosition())}>
            <span className="item-text">
              Change position
              <span className="icon">{isPositionChanging ? " ❌" : ""}</span>
            </span>
          </li>
          <li className="menu__item" onClick={() => createBackup()}>
            <span className="item-text">Create backup</span>
          </li>
          <li className="menu__item" onClick={() => dispatch(toggleDataImporting())}>
            <span className="item-text">Import data</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
