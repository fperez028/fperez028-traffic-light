import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// components
import {TrafficLight} from './components/TrafficLight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight/>
  </React.StrictMode>,
)
