import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { GeneralSections } from './general'
import Education from './education'
import Experience from './Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralSections/>
    <Education/>
    <Experience/>
  </React.StrictMode>,
)
