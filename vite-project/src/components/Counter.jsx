import React from "react";
import { useState } from 'react'


export default function Counter() {
  const [count, setCount] = useState(0)

  return (
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => setCount(count + 1)}>
          click me
        </button>
      </div>
  )
}

