import React from 'react'
import github from './imgs/github.png'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Footer extends React.Component {
    render() {
        return (
            <Card.Footer style={{ textAlign: 'center' }}>
                <Container>
                    <Row>
                        <Col>
                            <a href="https://github.com/HongDucTa" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt=""/>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <address>Hông Duc TA</address>
                        </Col>
                    </Row>
                </Container>
            </Card.Footer>
        )
    }
}