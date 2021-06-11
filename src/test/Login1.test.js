import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import login from '../components/login/model'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <model />
    </BrowserRouter>,
    fragment
  )
})
