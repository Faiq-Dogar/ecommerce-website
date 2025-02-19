import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const SimpleList = ({ content }) => {
    return (
        <div>
            <List>
                {content.map((item) => (
                    <ListItem disablePadding>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default SimpleList
