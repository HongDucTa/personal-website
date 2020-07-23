import React from 'react'

import Card from 'react-bootstrap/Card'

export default class Projet extends React.Component {

    render() {
        return (
            <Card align="center" className="h-100">
                <Card.Header>
                    {this.props.project.image ? <Card.Img style={{ height: 300 }} variant="top" src={require('../../images/' + this.props.project.image)}></Card.Img> : ""}
                </Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.project.title}</Card.Title>
                    <Card.Text>{this.props.project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {this.props.project.project_url ? <Card.Link href={this.props.project.project_url}>Site</Card.Link> : ""}
                    {this.props.project.github_url ? <Card.Link href={this.props.project.github_url}>Github</Card.Link> : ""}
                </Card.Footer>
            </Card>
        )
    }
}