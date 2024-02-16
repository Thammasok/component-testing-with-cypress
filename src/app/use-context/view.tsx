import { useState } from 'react'
import { Context } from './context'
import Counter from './counter'

const View = () => {
  const [count, setCount] = useState(0)

  const value = {
    count: count,
    increment: () => {
      setCount((count) => count + 1)
    },
    decrement: () => {
      setCount((count) => count - 1)
    }
  }

  return (
    <Context.Provider value={value}>
      <h1>Use Contaxt</h1>
      <p>This is an Use Contaxt page</p>
      <Counter />
    </Context.Provider>
  )
}

export default View
