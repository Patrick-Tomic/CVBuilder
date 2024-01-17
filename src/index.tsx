import React from 'react'
import ReactDOM from 'react-dom/client'
import Start from './start'
import './style.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('body')!).render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>
)
