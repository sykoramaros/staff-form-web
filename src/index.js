import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// Najde HTML element s id "result"
const container = document.getElementById("result")

// Vytvoří root pro React aplikaci
const root = createRoot(container)

// Renderuje komponentu App do rootu
root.render(<App tab="home" />)
