'use client'
import { AuthProvider } from '@/components/contexts/AuthContext'
import './globals.css'
import { Poppins } from 'next/font/google'
import { GraphQLProvider } from '@/components/contexts/GraphQLContext'
import RootStyleRegistry from '@/emotion'
import { Navbar } from '@elements'
import { usePathname } from 'next/navigation'
import { MantineProvider } from '@mantine/core'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Psyhope',
  description: '',
}

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
              <MantineProvider theme={{ colorScheme: 'light' }}>
                <div
                  className={`${
                    pathname == '/login' ? 'bg-[#E9D7FE]' : 'bg-white'
                  } min-h-screen text-black flex flex-col items-center justify-center`}
                >
                  <Navbar />
                  <div className="max-w-[1920px] w-full">{children}</div>
                </div>
              </MantineProvider>
            </GraphQLProvider>
          </AuthProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
