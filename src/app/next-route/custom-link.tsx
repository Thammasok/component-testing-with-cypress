import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  link: string
  children: React.ReactNode
}

const CustomLink = ({ children, link }: Props) => {
  const router = useRouter()

  const onClick = () => {
    router.push(link)
  }

  return <button onClick={onClick}>{children}</button>
}

export default CustomLink
