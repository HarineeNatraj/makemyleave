import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import leftnav from '../components/leftnav/leftnav'
import { BrowserRouter } from 'react-router-dom'
import Leftnav from '../components/admin/admin-leftnav/leftnav'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Leftnav />
    </BrowserRouter>,
    fragment
  )
})
