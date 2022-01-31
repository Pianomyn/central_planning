import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuBar from './components/MenuBar'

function App() {
  const [count, setCount] = useState(0)

  return (<MenuBar></MenuBar>) 
}

export default App
