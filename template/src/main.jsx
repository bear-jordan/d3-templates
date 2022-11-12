import React from 'react'
import ReactDOM from 'react-dom/client'
import DensityPlot from './components/DensityPlot/DensityPlot'
import { data } from './components/DensityPlot/js/request'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <DensityPlot passed_data={ data } /> }
  </React.StrictMode>
)
