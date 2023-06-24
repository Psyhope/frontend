export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="relative z-0 flex items-center w-full h-[calc(100vh-84px)] overflow-hidden">
        {children}
      </main>
    </>
  )
}
