import _useCounter, { UseCounterReturnType } from './useCounter'

type CounterProps = {
  useCounter: () => UseCounterReturnType
}

const Counter = ({ useCounter = _useCounter }: CounterProps) => {
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
