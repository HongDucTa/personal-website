import React from 'react'

import { Card, CardContent, Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Formation(props) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid xs={12}>
                    <Typography variant='h5'>{props.title}</Typography>
                </Grid>
                <br/>
                <Grid xs={12}>
                    <Typography variant='body1'>{props.date}</Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}