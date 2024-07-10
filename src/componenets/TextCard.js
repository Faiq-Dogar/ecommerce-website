import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const TextCard = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ display: "flex", alignItems: "center", my: "20px" }}>
                    <CallOutlinedIcon className='contact-icon' /> Call To Us
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary="We are available 24/7, 7 days a week." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="+92 310 766 5484" />
                    </ListItem>
                </List>
                <hr/>
                <Typography variant="h5" component="div" sx={{ display: "flex", alignItems: "center", my: "20px" }}>
                    <EmailOutlinedIcon className='contact-icon' /> Write To Us
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText primary="Fill out our form and we will contact you within 24 hours." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email: customer@gmail.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email: support@gmail.com" />
                    </ListItem>
                    <Divider />
                </List>
            </CardContent>
        </Card>
    )
}

export default TextCard
