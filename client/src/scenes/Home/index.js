import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><Header /></Col>
                </Row>
                <Row>
                    <Col>
                        Home page
                    </Col>
                    <Col>
                        Test
                    </Col>
                </Row>
                <Row>
                    <Col><Footer /></Col>
                </Row>
            </Container>
        )
    }
}