import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { render } from 'react-dom'
import  store  from './APP/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
)
