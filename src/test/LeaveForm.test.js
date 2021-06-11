import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import LeaveForm from '../components/LeaveForm/LeaveForm'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <LeaveForm />
    </BrowserRouter>,
    fragment
  )
})
