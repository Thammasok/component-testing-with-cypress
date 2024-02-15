import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example: Next route -> Home'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
