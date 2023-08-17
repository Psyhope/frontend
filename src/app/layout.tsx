'use client'
import { AuthProvider } from '@/components/contexts/AuthContext'
import './globals.css'
import { Poppins } from 'next/font/google'
import { GraphQLProvider } from '@/components/contexts/GraphQLContext'
import RootStyleRegistry from '@/emotion'
import { Footer, Navbar } from '@elements'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootStyleRegistry>
          <AuthProvider>
            <GraphQLProvider>
              <div
                className={` min-h-screen text-black flex flex-col items-center justify-center bg-[#E9D7FE]`}
              >
                <div
                  className={`max-w-[1920px] w-full ${
                    pathname == '/login' ? 'bg-[#E9D7FE]' : 'bg-white'
                  }`}
                >
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </GraphQLProvider>
          </AuthProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
