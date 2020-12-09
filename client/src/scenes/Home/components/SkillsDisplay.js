import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'
import { BeenhereOutlined, BuildOutlined, WebAssetOutlined, SettingsOutlined, StorageOutlined } from '@material-ui/icons'
import Skill from './Skill'

const useStyles = makeStyles({
    icon: {
        fontSize: '100px'
    }
})

export default function SkillsDisplay() {
    const classes = useStyles()

    const frontIcon = () => <WebAssetOutlined className={classes.icon} />
    const backIcon = () => <SettingsOutlined className={classes.icon} />
    const serverIcon = () => <StorageOutlined className={classes.icon} />
    const testingIcon = () => <BeenhereOutlined className={classes.icon} />
    const deploymentIcon = () => <BuildOutlined className={classes.icon} />

    return (
        <Grid container>
            <Grid item xs={6}>
                <Skill icon={frontIcon()} title='Front' items={["HTML", "CSS", "JavaScript", "React", "Material UI", "Bootstrap"]} />
            </Grid>
            <Grid item xs={6}>
                <Skill icon={backIcon()} title='Back' items={["Node", "Express", "Python", "Java", "C#"]} />
            </Grid>
            <Grid item xs={6}>
                <Skill icon={serverIcon()} title='Serveur' items={["MySQL", "PostGreSQL", "MongoDB"]} />
            </Grid>
            <Grid item xs={6}>
                <Skill icon={testingIcon()} title='Testing' items={["Cucumber", "Cypress"]} />
            </Grid>
            <Grid item xs={6}>
                <Skill icon={deploymentIcon()} title='Déploiement' items={["Netlify", "AWS", "Docker"]} />
            </Grid>
        </Grid>
    )
}