import React from 'react'
import ReactDOM from 'react-dom/client'
import LineChart from './components/LineChart/LineChart'
import { data, data2, data3 } from "./components/LineChart/js/request"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LineChart data={data}/>
  </React.StrictMode>
)
