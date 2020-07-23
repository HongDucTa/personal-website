import React from 'react'

import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
                <NavDropdown title="Outils" data-cy="outils">
                    <NavDropdown.Item href='/outils/interets-composes' data-cy="interets-composes">
                        Simulateur d'intérêts composés
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}