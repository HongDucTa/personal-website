import React from 'react'
import Card from 'react-bootstrap/Card'

export default class Formations extends React.Component {
    render() {
        return (
            <div align="center">
                <Card>
                    <Card.Body>
                        <Card.Title>Séjour Erasmus, Tallinn University of Technology (TalTech), Estonie</Card.Title>
                        <Card.Body>Septembre 2019 - Janvier 2020</Card.Body>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Diplôme d'ingénieur, École Supérieure d'Ingénieurs Léonard de Vinci (ESILV), La Défense</Card.Title>
                        <Card.Body>Septembre 2017 - Septembre 2020</Card.Body>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Classe préparatoire aux grandes écoles scientifique option MP, Lycée Camille Pissarro, Pontoise</Card.Title>
                        <Card.Body>Septembre 2015 - Juillet 2017</Card.Body>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Baccalauréat scientifique option Informatique, Lycée Jules Ferry, Conflans-Sainte-Honorine</Card.Title>
                        <Card.Body>Septembre 2012 - Juillet 2015</Card.Body>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}