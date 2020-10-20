import React from 'react'
import { CountProvider } from '../../shared/context/Count'
import { Counter } from '../../components/counter'
import { Mirror } from '../../components/mirror'

const Home = () => {
  return (
    <CountProvider>
      <Counter />
      <Mirror />
    </CountProvider>
  )
}

export { Home }
