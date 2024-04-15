import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './assets/components/CountdownTimer'
import InputBox from './assets/components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <InputBox />
        <button>Submit</button>
        <CountdownTimer />
      </div>
      <h1>Final</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
