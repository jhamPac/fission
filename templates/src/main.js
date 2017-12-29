import React    from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      Hello
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
