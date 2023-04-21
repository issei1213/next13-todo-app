'use client'

import { ReactNode } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

// NOTE: https://chakra-ui.com/getting-started/nextjs-guide#app-directory-setup
export function Providers({ children }: { children: ReactNode }) {
  console.log('providers')
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  )
}
