import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Timetable from '../components/admin/timetable/timetable'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Timetable />
    </BrowserRouter>,
    fragment
  )
})
