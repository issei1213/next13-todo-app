'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Text } from '@chakra-ui/react'
import { Button, Stack } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Stack spacing={4} direction="row" align="center">
      <Button colorScheme="teal" size="xs">
        Button
      </Button>
      <Button colorScheme="teal" size="sm">
        Button
      </Button>
      <Button colorScheme="teal" size="md">
        Button
      </Button>
      <Button colorScheme="teal" size="lg">
        Button
      </Button>
    </Stack>
  )
}
