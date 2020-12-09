import React from 'react'

import { makeStyles } from '@material-ui/core'
import Formation from './components/Formation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        textAlign: 'center'
    }
})

export default function Formations() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <Formation title='Séjour Erasmus, Tallinn University of Technology (TalTech), Estonie' date='Septembre 2019 - Janvier 2020' />
            <Formation title="Diplôme d'ingénieur, École Supérieure d'Ingénieurs Léonard de Vinci (ESILV), La Défense" date='Septembre 2017 - 2020' />
            <Formation title='Classe préparatoire aux grandes écoles scientifique option MP, Lycée Camille Pissarro, Pontoise' date='Septembre 2015 - Juillet 2017' />
            <Formation title='Baccalauréat scientifique option Informatique, Lycée Jules Ferry, Conflans-Sainte-Honorine' date='Septembre 2012 - Juillet 2015' />
            <Footer />
        </div>
    )
}