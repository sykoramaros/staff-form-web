import "./index.css"
import { useState, useEffect } from "react"
import rawData from "./rawData.json"
import Toggler from "./components/Toggler"
import StaffList from "./components/StaffList"
import StaffForm from "./components/StaffForm"
import ResultRow from "./components/ResultRow"

const App = () => {
  // JSON 👇
  const [staffList, setStaffList] = useState(rawData.staff)
  // JSON 👆

  // Proměnná pro nového programátora, kterého chceme přidat 👇
  const [newStaff, setNewStaff] = useState({
    id:
      staffList.length > 0
        ? Math.max(...staffList.map((staff) => staff.id)) + 1
        : 1,
    name: "",
    option: "",
  })
  // 👆

  // VALIDACE 👇
  const [valid, setValid] = useState(false)
  // VALIDACE 👆

  // TOGGLER 👇
  const [activeTab, setActiveTab] = useState(1)
  const handleChoose = (name) => {
    switch (name) {
      case "your-team": {
        setActiveTab(1)
        break
      }
      case "your-task": {
        setActiveTab(2)
        break
      }
      default:
        break
    }
  }
  // TOGGLER 👆

  // VALIDACE 👇
  const validateData = (staff) => {
    // Zkontroluj, zda jsou vyplněna všechna požadovaná pole
    if (staff.name.trim().length === 0 || staff.option.length === 0) {
      // Pokud name je prázdné nebo option není vybraná, nastav validaci na false
      return setValid(false)
    } else {
      // Pokud name a option jsou vyplněny, nastav validaci na true
      setValid(true)
    }
  }

  useEffect(() => {
    // Po každé změně ověř platnost dat
    validateData(newStaff)
  }, [newStaff])
  // VALIDACE 👆

  // HANDLE CHANGE 👇
  const handleChange = (e) => {
    const updatedStaff = { ...newStaff, [e.target.name]: e.target.value }
    setNewStaff(updatedStaff)
    validateData(updatedStaff)
  }
  // HANDLE CHANGE 👆

  // HANDLE ADD 👇
  const handleAdd = () => {
    // Přidání nového zaměstnance do seznamu
    const updatedStaffList = [...staffList, newStaff]
    setStaffList(updatedStaffList)

    // Vyčistit formulář
    let nextId = 1
    if (staffList.length > 0) {
      nextId = Math.max(...staffList.map((staff) => staff.id)) + 1
    }

    setNewStaff({
      id: nextId,
      name: "",
      option: "", // Pokud používáte rádio buttony
    })

    // Po přidání zrušit validaci
    setValid(false)
  }
  // HANDLE ADD 👆

  // HANDLE DELETE 👇
  const handleDelete = (idToDel) => {
    const temp = staffList.filter((staff) => staff.id !== idToDel)
    setStaffList(temp)
  }
  // HANDLE DELETE 👆

  // ----------- BODY ----------

  return (
    <div className="body">
      <div className="container">
        <h1>Your app for handling projects</h1>
        <h2>Toggle view</h2>
        <Toggler onChoose={handleChoose} active={activeTab} />
        {activeTab === 1 && (
          <>
            <h2>Your Team</h2>
            <hr />
            <StaffList data={staffList} onDelete={handleDelete} />
            <StaffForm
              data={newStaff}
              valid={valid}
              onChange={handleChange}
              onAdd={handleAdd}
            />
          </>
        )}
        {activeTab === 2 && (
          <>
            <h2>Your Task</h2>
            <hr />
            <ResultRow staffList={staffList} /> {/* Předání staffList */}
          </>
        )}
      </div>
    </div>
  )
}
export default App
