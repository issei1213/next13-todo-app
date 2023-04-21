import { ReactNode } from 'react'
import { Providers } from './providers'

export const metadata = {
  title: 'Todo App',
  description: 'TODOアプリの一覧',
}

// NOTE: https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
