import { React, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Graph from '../components/Graph/Graph'
import { BrowserRouter } from 'react-router-dom'

it('Unit testing for add file', () => {
  const fragment = document.createElement('Fragment')
  ReactDOM.render(
    <BrowserRouter>
      <Graph/>
    </BrowserRouter>,
    fragment
  )
})
