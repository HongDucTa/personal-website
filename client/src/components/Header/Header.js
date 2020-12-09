import React from 'react'

import NavButtons from './components/NavButtons.js'
import Image from 'react-bootstrap/Image'

import banner from './assets/banner.png'

import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {

        textAlign: 'center'
    },
    banner: {
        marginTop: '5px',
        marginBottom: '5px'
    }
})

export default function Header() {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.banner}>
                <a href='/'>
                    <Image src={banner} fluid style={{ maxHeight: '113px' }} />
                </a>
            </Grid>
            <Grid item xs={12}>
                <NavButtons />
            </Grid>
        </Grid>
    )
}