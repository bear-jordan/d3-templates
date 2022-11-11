import React from 'react'
import ReactDOM from 'react-dom/client'
import ViolinPlot from './components/ViolinPlot/ViolinPlot'
import { data } from "./components/ViolinPlot/js/request"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <ViolinPlot data={data}/> }
  </React.StrictMode>
)
