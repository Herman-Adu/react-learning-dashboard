import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

export default function SiteLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className='grow'>{children}</main>
      <Footer />
    </>
  )
}
