import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './STORE/store'
import './index.css'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
