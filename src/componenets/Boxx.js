import React from 'react'
import { Box } from '@mui/material';
import Subheading from './Subheading';
import SubHeadingDescription from './SubHeadingDescription';
import Avatrz from './Avatrz';

const Boxx = ({ icon, headtext, text }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Avatrz icon={icon} />
            <Subheading text={headtext} />
            <SubHeadingDescription text={text} />
        </Box>
    )
}

export default Boxx
