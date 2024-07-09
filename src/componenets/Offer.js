import { Container } from '@mui/material'
import React from 'react'

const Offer = ({saleImage}) => {
  return (
    <Container maxWidth="xl">
                <img src={saleImage} className={'offer-img'} alt='offer pic'/>
    </Container>
  )
}

export default Offer
