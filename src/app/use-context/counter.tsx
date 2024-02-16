import { useContext } from 'react'
import { Context } from './context'

const Counter = () => {
  const { count, increment, decrement } = useContext(Context)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button id='incrementButton' onClick={decrement}>
        -
      </button>
      <button id='decrementButton' onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Counter
