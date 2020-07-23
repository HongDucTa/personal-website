import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

import file from './images/cv.pdf'

export default class CV extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col align="center">
                        <ResponsiveEmbed>
                            <embed src={file} data-cy='file'/>
                        </ResponsiveEmbed>
                    </Col>
                </Row>
            </Container>
        )
    }
}