export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="relative z-0 flex items-center w-full min-h-screen overflow-hidden">
        {children}
      </main>
    </>
  )
}
