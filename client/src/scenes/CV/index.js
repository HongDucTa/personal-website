import React from 'react'

import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

import { Grid, makeStyles } from '@material-ui/core'

import file from './images/cv.pdf'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white'
    }
})

export default function CV() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Grid container>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <ResponsiveEmbed>
                        <embed src={file} data-cy='file' />
                    </ResponsiveEmbed>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <Footer />
        </div>
    )
}