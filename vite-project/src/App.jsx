import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Counter.jsx'
import Counter from './components/Counter.jsx'

function App() {
  const [globalCount, setGlobalCount] = useState(0)

  return (
    <div className="App">
        <Counter count={globalCount}/>
        <Counter count={globalCount}/>
        <button onClick={() => setGlobalCount(globalCount + 1)}>
          click me
        </button>
    </div>
  )
}

export default App
