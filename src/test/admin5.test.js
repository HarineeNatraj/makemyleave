import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Calender, { Cframe } from '../components/admin/Calender/cframe'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Cframe />
    </BrowserRouter>,
    fragment
  )
})
