import Image from 'next/image'
import React from 'react'

type Props = {}

const CustomImage = (props: Props) => {
  return (
    <div>
      <h1>Custom Image</h1>
      {/* public/example.webp */}
      <Image src='/example.webp' alt='example image' width={300} height={165} />
    </div>
  )
}

export default CustomImage
