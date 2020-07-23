import React from 'react'

import Nav from 'react-bootstrap/Nav'

export default class NavButtons extends React.Component {
    render() {
        return (
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href='/projets' data-cy="projets">Projets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/cv' data-cy="cv">CV</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/formations' data-cy="formations">Formations</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}