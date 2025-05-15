export default function AuthenticationLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className='grow'>{children}</main>
    </>
  )
}
