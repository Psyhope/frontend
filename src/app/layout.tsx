import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import { Poppins } from 'next/font/google'
import { GraphQLProvider } from '@/context/GraphQLContext'
import RootStyleRegistry from '@/emotion'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] })

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
              {children}
            </GraphQLProvider>
          </AuthProvider>
        </RootStyleRegistry>
      </body>
    </html>
  )
}
