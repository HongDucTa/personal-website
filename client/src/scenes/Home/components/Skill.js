import React from 'react'

import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
})

export default function Skill(props) {
    const classes = useStyles()

    return (
        <Card variant='outlined' className={classes.root}>
            <CardContent>
                {props.icon}
                <Typography variant='h4'>{props.title}</Typography>
                <Typography variant='subtitle1'>{props.items.join(' • ')}</Typography>
            </CardContent>
        </Card>
    )
}