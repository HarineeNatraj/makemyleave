import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import leftnav from '../components/admin/admin-leftnav/leftnav'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <leftnav />
    </BrowserRouter>,
    fragment
  )
})
