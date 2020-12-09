import React from 'react';

import Header from '../../components/Header/Header'
import SkillsDisplay from './components/SkillsDisplay'

import { Grid, makeStyles } from '@material-ui/core'
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        textAlign: 'center'
    }
})

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Grid>
                <SkillsDisplay />
            </Grid>
            <Footer />
        </div>
    )
}