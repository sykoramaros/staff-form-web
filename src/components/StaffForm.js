import React from "react"
import "./StaffForm.css"

function StaffForm({ data, valid, onChange, onAdd }) {
  let buttonClassName = "staff-input"
  if (valid) {
    buttonClassName += " enabled"
  }

  return (
    <div className="staff-form">
      <label className="label-name">
        <input
          className="staff-input"
          type="text"
          name="name"
          placeholder="Name"
          // jmeno noveho programatora
          value={data.name}
          onChange={onChange}
        />
      </label>

      <label className="radioOne">
        <input
          type="radio"
          name="option"
          value="Junior" // Hodnota pro Junior
          checked={data.option === "Junior"}
          onChange={onChange}
        />
        Junior
      </label>
      <label className="radioTwo">
        <input
          type="radio"
          name="option"
          value="Senior" // Hodnota pro Senior
          checked={data.option === "Senior"}
          onChange={onChange}
        />
        Senior
      </label>
      <button className={buttonClassName} onClick={onAdd} disabled={!valid}>
        Add
      </button>
    </div>
  )
}
export default StaffForm
