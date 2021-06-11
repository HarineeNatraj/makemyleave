import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Attendence from '../components/admin/Attendence/Attendence'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Attendence />
    </BrowserRouter>,
    fragment
  )
})
