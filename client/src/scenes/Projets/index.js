import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

import projects from './projets.json'
import Projet from './components/Projet.js'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white'
    }
})

export default function Projets() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Grid container spacing={2}>
                {
                    projects.map((project) => {
                        return (
                            <Grid item xs="6">
                                <Projet project={project} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Footer />
        </div>
    )
}