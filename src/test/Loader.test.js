import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Loader from '../components/Loader/Loader'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Loader />
    </BrowserRouter>,
    fragment
  )
})
