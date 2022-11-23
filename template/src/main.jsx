// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'

// User Modules
import { data } from './components/ScatterPlot/js/request'
import ScatterPlot from './components/ScatterPlot/ScatterPlot'

// CSS
import './index.css'
import "./components/ScatterPlot/ScatterPlot.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <ScatterPlot passed_data={ data } /> }
  </React.StrictMode>
)
