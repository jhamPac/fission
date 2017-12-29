import React    from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      Hello
    </div>
  )
}

$(document).ready(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
