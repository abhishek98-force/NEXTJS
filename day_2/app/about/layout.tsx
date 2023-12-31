import type { Metadata } from 'next'
import stylesNew from "./style.module.css"

export const metadata: Metadata = {
    title: 'About page',
    description: 'Generated by create next app',
  }
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    
    return (
      <>
      <main className={stylesNew.main}>
        <nav><h1>This is a sub nav bar</h1></nav>
        {children}
      </main>
      </>
  )
}
