import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Calender from '../components/Calender/Calender'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Calender />
    </BrowserRouter>,
    fragment
  )
})
