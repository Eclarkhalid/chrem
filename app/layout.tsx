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
        <body className='bg-background'>
          <div className="max-container app">
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}