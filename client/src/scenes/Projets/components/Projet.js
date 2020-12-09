import React from 'react'

import { Card, CardContent, CardHeader, CardMedia, Typography, makeStyles } from '@material-ui/core'
import { GitHub, Web } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        alignContent: 'center'
    },
    media: {
        maxHeight: 300
    },
    actions: {
        alignSelf: 'center',
        paddingBottom: '5px'
    },
    icon: {
        fontSize: '40px'
    }
})

export default function Projet(props) {
    const classes = useStyles()

    const GitHubIcon = (url) => <a href={url} ><GitHub className={classes.icon} href="https://github.com/HongDucTa/castle"/></a>
    const WebsiteIcon = (url) => <a href={url}><Web className={classes.icon}/></a>

    return (
        <Card align="center" className="h-100">
            <CardHeader title={props.project.title} />
            <CardMedia>
                <img src={require('./images/' + props.project.image)} className={classes.media} alt="Illustration projet"/>
            </CardMedia>
            <CardContent>
                <Typography variant='subtitle1'>{props.project.description}</Typography>
            </CardContent>
            <div className={classes.actions}>
                {props.project.project_url ? WebsiteIcon(props.project.project_url) : ""}
                {props.project.github_url ? GitHubIcon(props.project.github_url) : ""}
            </div>
        </Card>
    )
}