import React, { useRef } from 'react';
import './styles/addNewLinkModal.css'

export default function AddNewLinkModal(setValue, value, name) {
  const labelRef = useRef()
  const toggleLabel = (ref) => {
    let { opacity } = ref.current.style
    
    if (!Boolean(opacity) || JSON.parse(opacity) === 0) {
      ref.current.style.opacity = 1
    } else {
      ref.current.style.opacity = 0
    }
  }

  const setValue = (val) => {
    
  }

  return (
    <div className="input-wrapper">
      <input 
        className="input"
        type="text"
        name={name}
        id={name}
        placeholder={name}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => toggleLabel(labelRef)}
        onBlur={() => toggleLabel(labelRef)}
      />
      <label className="input-label" htmlFor={name} ref={labelRef}>Name</label>
    </div>
  );
}
