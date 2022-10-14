import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/Teacher'

import { List } from '../src/components/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: 'Allan',
      photo: 'https://github.com/allancdev.png',
      description: 'Aulas de desenvolvimento',
      price_hour: 100
    },
    {
      id: 2,
      name: 'Elton',
      photo: 'https://github.com/elton-fonseca.png',
      description: 'Aulas de Data',
      price_hour: 120
    },
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main'}}>
        <List data={teachers} />
      </Box>
    </>
  )
}

export default Home
