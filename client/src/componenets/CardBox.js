import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CardBox = ({ head, dis, icon }) => {
    return (
        <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={3}>
                {icon}
                <Box>
                    <Typography variant="h5" component="div">
                        {head}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {dis}
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default CardBox
