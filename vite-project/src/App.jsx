import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Counter.jsx'
import Counter from './components/Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Counter/>
        <Counter/>
    </div>
  )
}

export default App
