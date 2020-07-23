import React from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid } from 'recharts'

import { simulateScenario } from './functions/simulation'

export default class CompoundInterestSimulator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialSum: 0,
            interestRate: 0,
            duration: 0,
            data: [{ year: 0, value: 0 }]
        }

        this.handleChangeInitialSum = this.handleChangeInitialSum.bind(this)
        this.handleChangeInterestRate = this.handleChangeInterestRate.bind(this)
        this.handleChangeDuration = this.handleChangeDuration.bind(this)
        this.handleChangeData = this.handleChangeData.bind(this)
    }

    handleChangeInitialSum(event) {
        this.setState({ initialSum: parseInt(event.target.value) })
    }

    handleChangeInterestRate(event) {
        this.setState({ interestRate: parseInt(event.target.value) })
    }

    handleChangeDuration(event) {
        this.setState({ duration: parseInt(event.target.value) })
    }

    handleChangeData(event) {
        this.setState({ data: simulateScenario(this.state.initialSum, this.state.interestRate, this.state.duration) })
        console.log(this.state.data)
    }

    render() {
        return (
            <Container align="center">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Somme placée initialement</Form.Label>
                            <Form.Control type="number" placeholder="Somme placée initialement" value={this.state.initialSum} onChange={this.handleChangeInitialSum} data-cy="initialSum"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Taux d'intérêt (en %)</Form.Label>
                            <Form.Control type="number" placeholder="Taux d'intérêt" value={this.state.interestRate} onChange={this.handleChangeInterestRate} data-cy="interestRate"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Durée</Form.Label>
                            <Form.Control type="number" placeholder="Durée" value={this.state.duration} onChange={this.handleChangeDuration} data-cy="duration"/>
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={this.handleChangeData} data-cy="submit">Simuler</Button>
                </Form>
                <br />
                <Card>
                    <Card.Title>Somme accumulée à l'échéance : <div data-cy="result">{this.state.data[this.state.data.length - 1].value.toFixed(2)}</div></Card.Title>
                </Card>


                <LineChart width={600} height={300} data={this.state.data}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <XAxis dataKey="year">
                        <Label value="Année" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis dataKey="value">
                        <Label value="Montant" offset={0} position="insideLeft" angle={-90} />
                    </YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                </LineChart>
            </Container>
        )
    }
}