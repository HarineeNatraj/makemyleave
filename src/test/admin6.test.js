import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Dashboard from '../components/admin/dashboard/dashboard'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>,
    fragment
  )
})
