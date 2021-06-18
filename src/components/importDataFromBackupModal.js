import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStorage, STORAGE_MODEL } from "../utils";
import { toggleDataImporting } from "../store/menu";
import "./styles/addNewLinkModal.css";

export default function ImportDataFromBackupModal() {
  const dispatch = useDispatch();
  const [backupFile, setBackupFile] = useState(null);

  const importDataFromBackupFile = (e) => {
    e.preventDefault();

    let jsonBackup;
    const fr = new FileReader();

    fr.onload = (function () {
      return function (e) {
        jsonBackup = JSON.parse(e.target.result);
        setStorage({ ...STORAGE_MODEL, ...jsonBackup });
        window.location.reload();
      };
    })(backupFile);
    fr.readAsText(backupFile);
  };

  const lastModifiedDate = () => {
    const d = new Date(backupFile.lastModified);
    return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} | ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

  return (
    <div className="add-new-link-modal">
      <header className="add-new-link-modal__header">Import data from backup file</header>

      <form className="add-new-link-modal__configuration" onSubmit={(e) => importDataFromBackupFile(e)}>
        <div className="file-input-wrapper">
          <input
            className="file-input"
            id="file"
            type="file"
            accept=".json"
            onChange={(e) => {
              setBackupFile(e.target.files[0]);
            }}
          />
          <label className="file-input-label" for="file">
            {backupFile ? `${backupFile.name}` : "Drop backup file here"}
          </label>
        </div>
        {backupFile !== null ? (
          <div className="backup-file-info">
            <p>Last modified: {lastModifiedDate()}</p>
          </div>
        ) : null}

        <div className="control-panel">
          <input type="submit" className="add-link-button" />
          <button
            className="add-link-button"
            onClick={() => {
              dispatch(toggleDataImporting());
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
