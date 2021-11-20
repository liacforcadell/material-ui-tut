import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: "flex"
    }
})

export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div className = {classes.root} >
            {/* app bar */}
            {/* side drawer */}
            <Drawer
                className = {classes.drawer}
                variant = "permanent"
                anchor = "left"
                classes = {{ paper: classes.drawerPaper}}          // allows override css build in material ui
            
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>

            <div className={classes.page}>
                {children}                
            </div>
        </div>
    )
}
