import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import topnav from '../components/admin/admin-topnav/topnav'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <topnav />
    </BrowserRouter>,
    fragment
  )
})
