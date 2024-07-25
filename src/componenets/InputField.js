import { TextField } from '@mui/material'
import React from 'react'

const InputField = ({placeholder}) => {
  return (
    <TextField id="filled-basic" label={placeholder} variant="filled" fullWidth/>
  )
}

export default InputField
