import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App 1</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https.//google.com',       
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const AnotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click Me to visit Google.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
