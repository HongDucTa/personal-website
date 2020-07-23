import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import skills from './competences.json'

export default class Competences extends React.Component {
    render() {
        return (
            <Container>
                <CardGroup>
                    {skills.map((skill) => {
                        return (
                            <Card border="light" style={{ textAlign: 'center' }}>
                                <Card.Body>
                                    <Card.Title><b>{skill.title}</b></Card.Title>
                                    <Card.Text>
                                        {skill.items.map((item) => {
                                            return (item + " • ")
                                        })}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardGroup>
            </Container>
        )
    }
}