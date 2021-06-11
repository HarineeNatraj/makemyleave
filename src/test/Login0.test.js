import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Login from '../components/Login/login'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
    fragment
  )
})
