import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import projects from './projets.json'
import Projet from './components/Projet'

export default class Projets extends React.Component {

    render() {
        console.log(process.cwd())
        return (
            <Container>
                <Row lg="2">
                    {
                        projects.map((project) => {
                            return (
                                <Col lg="6">
                                    <Projet project={project} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}