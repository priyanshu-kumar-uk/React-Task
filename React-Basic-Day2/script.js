import React from "react"
import {createRoot} from "react-dom/client"

let h1  = React.createElement("h1",{},"this is h1")

let roote = document.getElementById("roote")

createRoot(roote).render(h1)