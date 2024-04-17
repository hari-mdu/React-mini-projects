import React from 'react'
import ReactDOM from 'react-dom/client'
import Cart from './Cart'
import { Form } from './Form'
import RegForm from './RegForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart />
    <Form />
    <RegForm/>
  </React.StrictMode>,
)
