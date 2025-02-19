import { Container } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import NewArrivalGrid from './NewArrivalGrid'

const NewArrival = () => {
  return (
    <Container maxWidth="xl">
        <Heading name={"New Arrival"} />
        <NewArrivalGrid />
    </Container>
  )
}

export default NewArrival
