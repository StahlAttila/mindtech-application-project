import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import CovidDataContextProvider from './store/covid-context'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <CovidDataContextProvider>
      <App />
    </CovidDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
