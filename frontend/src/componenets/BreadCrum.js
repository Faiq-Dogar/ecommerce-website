import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreadCrum = ({ previous, now }) => {
    return (
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb" sx={{mt:"5%"}}>
                <Link underline="hover" color="inherit" to="/">
                    {previous}
                </Link>
                <Typography color="text.primary">
                    {now}
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

export default BreadCrum
