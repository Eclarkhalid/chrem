import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Poppins } from 'next/font/google'


const inter = Poppins({
  subsets: ['latin'],
  weight: '400'
});

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
        <body className={inter.className}>
          <main >
            <div className='main'>
              <div className="gradient" />
            </div>
            <div className="app whitespace-normal">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}