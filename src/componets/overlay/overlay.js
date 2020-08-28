import React from 'react'
import "./overlay.css"
const Overlay = ({toggle}) => {
  return (
    <div className="overlay" onClick={() => { toggle() }}>

    </div>
  )
}

export default Overlay