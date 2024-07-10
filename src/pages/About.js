import { Container } from '@mui/material'
import React from 'react'
import Griid from '../componenets/Griid'
import TeamGrid from '../componenets/TeamGrid'
import Features from '../componenets/Features'

const About = ({aboutImage}) => {
  return (

    <Container maxWidth="xl">
        <Griid aboutImage={aboutImage}/>
        <TeamGrid aboutImage={aboutImage}/>
        <Features />
    </Container>
  )
}

export default About
