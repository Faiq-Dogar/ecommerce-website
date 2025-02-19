import { Grid } from '@mui/material'
import React from 'react'

const GridItem = ({ItemElement}) => {
  return (
    <Grid item xs={6} md={2}>
        {ItemElement}
    </Grid>

  )
}

export default GridItem
