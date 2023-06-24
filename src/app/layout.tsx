import { AuthProvider } from '@/components/contexts/AuthContext'
import './globals.css'
import { Poppins } from 'next/font/google'
import { GraphQLProvider } from '@/components/contexts/GraphQLContext'
import RootStyleRegistry from '@/emotion'
import { Navbar } from '@elements'

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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootStyleRegistry>
          <AuthProvider>
            <GraphQLProvider>
              <div className="flex flex-col items-center justify-center min-h-screen text-black bg-white">
                <Navbar />
                <div className="max-w-[1920px] w-full">{children}</div>
              </div>
            </GraphQLProvider>
          </AuthProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
