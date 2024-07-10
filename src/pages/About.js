import { Container } from '@mui/material'
import React from 'react'
import Griid from '../componenets/Griid'
import TeamGrid from '../componenets/TeamGrid'

const About = ({aboutImage}) => {
  return (

    <Container maxWidth="xl">
        <Griid aboutImage={aboutImage}/>
        <TeamGrid aboutImage={aboutImage}/>
    </Container>
  )
}

export default About
