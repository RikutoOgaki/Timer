import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { TimerComponent } from '../components/TImerComponent'

export default function Timer() {
  return (
    <>
      <Head>
        <title>カウントアップタイマー</title>
      </Head>
      <Box>
        <TimerComponent />
      </Box>
    </>
  )
}