'use client'

import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  const onClickBack = () => {
    router.push('/next-route')
  }

  return (
    <>
      <h1>About</h1>
      <p>This is an about page</p>
      <button onClick={onClickBack}>Back</button>
    </>
  )
}
