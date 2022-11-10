import React from 'react'
import ReactDOM from 'react-dom/client'
import BarChart from './components/BarChart/BarChart'
import { data } from "./components/BarChart/js/request"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    { <BarChart data={data}/> }
  </React.StrictMode>
)
