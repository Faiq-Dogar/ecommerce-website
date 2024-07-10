import { Container } from '@mui/material'
import React from 'react'
import Griid from '../componenets/Griid'
import TeamGrid from '../componenets/TeamGrid'
import Features from '../componenets/Features'
import BreadCrum from '../componenets/BreadCrum'

const About = ({aboutImage}) => {
  return (

    <Container maxWidth="xl">
        <BreadCrum previous={"Home"} now={"About"} />
        <Griid aboutImage={aboutImage}/>
        <TeamGrid aboutImage={aboutImage}/>
        <Features/>
    </Container>
  )
}

export default About
