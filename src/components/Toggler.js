import React from "react"
import "./Toggler.css"

function Toggler({ active, onChoose }) {
  const handleClick = (e) => {
    onChoose(e.target.name)
  }
  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        name="your-team"
        onClick={handleClick}
      >
        List of Programmers
      </button>
      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        name="your-task"
        onClick={handleClick}
      >
        Form for planning tasks
      </button>
    </div>
  )
}
export default Toggler
