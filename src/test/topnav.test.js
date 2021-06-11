import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import topnav from '../components/topnav/topnav'
import { BrowserRouter } from 'react-router-dom'
import Topnav from '../components/admin/admin-topnav/topnav'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Topnav/>
    </BrowserRouter>,
    fragment
  )
})
