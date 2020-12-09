import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { makeStyles } from '@material-ui/core'
import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid } from 'recharts'

import { simulateScenario } from './functions/simulation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white'
    }
})

export default function CompoundInterestSimulator() {
    const classes = useStyles()

    const [initialSum, setInitialSum] = useState(0)
    const [interestRate, setInterestRate] = useState(0)
    const [duration, setDuration] = useState(0)
    const [data, setData] = useState([{ year: 0, value: 0 }])

    const handleChangeInitialSum = (event) => {
        setInitialSum(parseInt(event.target.value))
    }

    const handleChangeInterestRate = (event) => {
        setInterestRate(parseInt(event.target.value))
    }

    const handleChangeDuration = (event) => {
        setDuration(parseInt(event.target.value))
    }

    const handleChangeData = () => {
        setData(simulateScenario(initialSum, interestRate, duration))
    }

    return (
        <div className={classes.root}>
            <Header />
            <Container align="center">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Somme placée initialement</Form.Label>
                            <Form.Control type="number" placeholder="Somme placée initialement" value={initialSum} onChange={handleChangeInitialSum} data-cy="initialSum" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Taux d'intérêt (en %)</Form.Label>
                            <Form.Control type="number" placeholder="Taux d'intérêt" value={interestRate} onChange={handleChangeInterestRate} data-cy="interestRate" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Durée</Form.Label>
                            <Form.Control type="number" placeholder="Durée" value={duration} onChange={handleChangeDuration} data-cy="duration" />
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={handleChangeData} data-cy="submit">Simuler</Button>
                </Form>
                <br />
                <Card>
                    <Card.Title>Somme accumulée à l'échéance : <div data-cy="result">{data[data.length - 1].value.toFixed(2)}</div></Card.Title>
                </Card>


                <LineChart width={600} height={300} data={data}>
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
            <Footer />
        </div>
    )
}