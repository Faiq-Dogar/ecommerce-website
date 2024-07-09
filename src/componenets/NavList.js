import React from 'react'
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'


const NavList = ({ content }) => {
    return (
        <nav aria-label="secondary mailbox folders">
            <List>
                {content.map((item) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </nav>
    )
}

export default NavList
