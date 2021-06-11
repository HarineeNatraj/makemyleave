import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import LeaveApprove from '../components/admin/leave-approve/leave-approve'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <leavea-approve />
    </BrowserRouter>,
    fragment
  )
})
