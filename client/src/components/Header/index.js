import React from 'react'

import NavButtons from './components/NavButtons'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Header extends React.Component {
    render() {
        return (
            <Card.Header style={{textAlign: 'center'}}>
                <Container fluid>
                    <Row>
                        <Col>
                            <a href='/'>
                                <h1>Hông Duc TA - Développeur web</h1>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NavButtons />
                        </Col>
                    </Row>
                </Container>
            </Card.Header>
        )
    }
}