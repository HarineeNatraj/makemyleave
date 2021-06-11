import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import timetable from '../components/admin/timetable/input'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <input />
    </BrowserRouter>,
    fragment
  )
})
