import React from "react"
import "./StaffList.css"

function StaffList({ data, onDelete }) {
  return (
    <div className="list">
      {data.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="names">{item.name}</span>
            <span className="option">{item.option}</span>
            <button className="btn-delete" onClick={() => onDelete(item.id)}>
              X
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default StaffList
