import { useCallback, useState } from 'react'
import useCounter from './useCounter'

const Counter = () => {
  // const [count, setCount] = useState(0)
  // const increment = useCallback(() => setCount((x) => x + 1), [])
  // const decrement = useCallback(() => setCount((x) => x - 1), [])

  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button id='incrementButton' onClick={increment}>
        -
      </button>
      <button id='decrementButton' onClick={decrement}>
        +
      </button>
    </div>
  )
}

export default Counter
