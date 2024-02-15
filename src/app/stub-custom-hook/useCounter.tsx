import { useCallback, useState } from 'react'

export type UseCounterReturnType = {
  count: number
  increment: () => void
  decrement: () => void
}

const useCounter = (): UseCounterReturnType => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount((x) => x + 1), [])
  const decrement = useCallback(() => setCount((x) => x - 1), [])

  return {
    count,
    increment,
    decrement
  }
}

export default useCounter
