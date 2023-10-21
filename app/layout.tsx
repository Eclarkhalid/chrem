import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Chrem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main >
            <div className='main'>
              <div className="gradient" />
            </div>
            <div className="app">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}