import { useCallback, useState } from 'react'
// import useCounter from './useCounter'
import { increment } from './sum'

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementA = () => {
    // const result = increment(count)
    // setCount(result)
    setCount(count + 1)

    // increment(count, setCount)
  }

  // const incrementB = () => {
  //   const sum = count + 1
  //   if (sum <= 100) {
  //     setCount(sum)
  //   }
  // }

  const decrement = () => setCount((x) => x - 1)

  // const { count, increment, decrement } = useCounter()

  return (
    <div>
      <h1>Counts: {count}</h1>
      <button id='decrementButton' onClick={decrement}>
        -
      </button>
      <button id='incrementButton' onClick={incrementA}>
        + A
      </button>
      {/* <button id='incrementButton' onClick={incrementB}>
        + B
      </button> */}
    </div>
  )
}

export default Counter
