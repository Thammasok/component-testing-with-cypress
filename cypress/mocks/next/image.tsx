// cypress/mocks/next/image.tsx
import type { ImageProps } from 'next/image'

/**
 * Converts the next/image static image URL to a regular path.
 *
 * Example:
 *
 * /_next/static/media/404.ea2b1f50.png -> /assets/images/404.png
 */
const convertURL = (url: string) => {
  const newURL = url
    .replace(/\/_next\/static\/media\//, '/public/') // Use actual images location
    .replace(/(?<=\.)(.+)(?=png|jp?eg|tiff?|png|webp|bmp|gif|svg)/, '')
  console.log('newURL', newURL)
  return newURL
}

const Image = (props: ImageProps) => {
  // Regular path to image resource
  if (typeof props.src === 'string') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        style={props.style}
      />
    )
  }

  let src: string
  // StaticImageData - an import of image resource
  if ('src' in props.src) {
    src = props.src.src
  } else {
    // StaticRequire
    src = props.src.default.src
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={convertURL(src)} alt={props.alt} style={props.style} />
}

export default Image
