import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import studentedit from '../components/admin/student-edit/studentedit'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <studentedit />
    </BrowserRouter>,
    fragment
  )
})
