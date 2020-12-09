import React from 'react'
import github from './imgs/github.png'

import { Grid, makeStyles } from '@material-ui/core/'

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white'
    }
})

export default function Footer() {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <a href="https://github.com/HongDucTa" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Lien github" />
                </a>
            </Grid>
            <Grid item xs={12}>
                <address>Hông Duc TA</address>
            </Grid>
            <Grid item xs={12}>
                <address>{new Date().getFullYear()}</address>
            </Grid>
        </Grid>
    )
}