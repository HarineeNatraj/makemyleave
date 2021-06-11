import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Profile from '../components/Profile/Profile'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
    fragment
  )
})
