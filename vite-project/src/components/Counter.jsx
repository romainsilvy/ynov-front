import React from "react";
import { useState } from 'react'


export default function Counter(props) {
  const [count, setCount] = useState(0)

  return (
      <div className="card">
        <p>count is {props.count}</p>
        {/* <button onClick={() => setCount(count + 1)}>
          click me
        </button> */}
      </div>
  )
}

