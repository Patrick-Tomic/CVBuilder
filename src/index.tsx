import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main'
import './style.scss'
import {BrowserRouter} from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('body')!).render(
  <React.StrictMode>
   <BrowserRouter>
   <Main />
   </BrowserRouter>
  </React.StrictMode>
)
