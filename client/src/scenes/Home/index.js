import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Competences from './components/Competences'

export default class Home extends React.Component {
    render() {
        return (
            <Container style={{textAlign: 'center'}}>
                <Row>
                    <Col>
                        <h2>Mes compétences</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Competences />
                    </Col>
                </Row>
            </Container>
        )
    }
}