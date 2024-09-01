import React, { useState, useEffect } from "react"
import "./ResultRow.css"

const ResultRow = ({ staffList }) => {
  const [linesOfCode, setLinesOfCode] = useState("")
  const [timeLimit, setTimeLimit] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("#97a8a6")

  useEffect(() => {
    if (linesOfCode && timeLimit) {
      calculateCompletion()
    } else {
      setBackgroundColor("#97a8a6")
    }
  }, [linesOfCode, timeLimit, staffList])

  const handleLinesChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value >= 0) {
      setLinesOfCode(e.target.value)
    } else {
      setLinesOfCode("")
    }
  }

  const handleTimeChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value >= 0) {
      setTimeLimit(e.target.value)
    } else {
      setTimeLimit("")
    }
  }

  const calculateCompletion = () => {
    let totalCapacity = 0

    if (Array.isArray(staffList)) {
      staffList.forEach((staff) => {
        if (staff.option === "Junior") {
          totalCapacity += 100 // Kapacita Juniora: 100 řádků za den
        } else if (staff.option === "Senior") {
          totalCapacity += 200 // Kapacita Seniora: 200 řádků za den
        }
      })
    }
    console.log("Total Capacity:", totalCapacity) // Celková kapacita týmu

    const totalDays = parseInt(timeLimit, 10)
    const totalLines = parseInt(linesOfCode, 10)

    if (totalDays > 0) {
      const dailyCapacity = totalCapacity
      const requiredDailyCapacity = totalLines / totalDays

      if (dailyCapacity >= requiredDailyCapacity) {
        setBackgroundColor("#007a12")
      } else {
        setBackgroundColor("#b03806")
      }
    } else {
      setBackgroundColor("white")
    }
  }

  return (
    <div className="result-row">
      <label className="label-inputOne">
        Lines of code
        <input
          className="lines-input"
          type="number"
          name="lines"
          value={linesOfCode}
          onChange={handleLinesChange}
        />
      </label>
      <label className="label-inputTwo">
        Time limit [days]
        <input
          className="lines-input"
          type="number"
          name="days"
          value={timeLimit}
          onChange={handleTimeChange}
        />
      </label>
      <div className="do-it-btn" style={{ backgroundColor }}>
        Do it
      </div>
    </div>
  )
}

export default ResultRow
