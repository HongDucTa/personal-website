import React from 'react'

import { Link } from 'react-router-dom'

import { Button, Divider, Grid, Menu, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navButton: {
        fontSize: 20,
        width: '100%'
    },
    gridNavButton: {
        '& :hover': {
            backgroundColor: 'grey',
            color: 'white'
        }
    },
    divider: {
        color: 'red'
    }
})

export default function NavButtons() {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Divider className={classes.divider} />
            <Grid container justify="center">
                <Grid item xs className={classes.gridNavButton}>
                    <Button className={classes.navButton} variant="light" href='/projets' data-cy="projets">Projets</Button>
                </Grid>
                <Grid item xs className={classes.gridNavButton}>
                    <Button className={classes.navButton} variant="light" href='/cv' data-cy="cv">CV</Button>
                </Grid>
                <Grid item xs className={classes.gridNavButton}>
                    <Button className={classes.navButton} variant="light" href='/formations' data-cy="formations">Formations</Button>
                </Grid>
                <Grid item xs className={classes.gridNavButton}>
                    <Button className={classes.navButton} variant="light" aria-controls="simple-menu" aria-haspopup="true" data-cy="outils" onClick={handleClick}>Outils</Button>
                </Grid>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to="/outils/interets-composes" data-cy="interets-composes">Simulateur d'intérêts composés</MenuItem>
                </Menu>
            </Grid>
            <Divider className={classes.divider} />
        </div>
    )
}