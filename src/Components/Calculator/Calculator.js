import React, { useState } from 'react'
import { evaluate } from 'mathjs'

import { Grid, Typography } from '@material-ui/core';
import { ButtonRows } from './ButtonRows'

import { useStyles } from './Style/CalculatorStyles'

const Calculator = (props) => {

    const classes = useStyles()
    let [expression, setExpression] = useState('')
    const [result, setResult] = useState(undefined)
    const [error, setError] = useState(undefined)
    
    const evaluateExpression = () => {
        try {
           setExpression(evaluate(expression))
           setResult(evaluate(expression))
        } catch (error) {
            setError('Invalid Expression')
            setExpression('')
        }
    }

    const appendToExpression = (value) => {
        if (error)
            setError(undefined)

        if (result && ![ '+', '-', '*', '/', '(', ')' ].includes(value) ) {
            setExpression(value)
        }
            
        else
            setExpression(expression+=value)
        
        setResult(undefined)
    
    }

    const buttonRowsData = [
        {label: '(', theme: 'dark', onClick: (e) => {appendToExpression('(')}},
        {label: 'CE', theme: 'dark',onClick: (e) => { setExpression('') }},
        {label: ')', theme: 'dark',onClick: (e) => {appendToExpression(')')}},
        {label: 'C', theme: 'dark',onClick: (e) => { setExpression(''); setError(undefined) }},
        {label: '1', onClick: (e) => { appendToExpression('1') }},
        {label: '2', onClick: (e) => { appendToExpression('2') }},
        {label: '3', onClick: (e) => { appendToExpression('3') }},
        {label: '+', theme: 'dark',onClick: (e) => { appendToExpression('+') }},
        {label: '4', onClick: (e) => { appendToExpression('4') }},
        {label: '5', onClick: (e) => { appendToExpression('5') }},
        {label: '6', onClick: (e) => { appendToExpression('6') }},
        {label: '-', theme: 'dark',onClick: (e) => { appendToExpression('-') }},
        {label: '7', onClick: (e) => { appendToExpression('7') }},
        {label: '8', onClick: (e) => { appendToExpression('8') }},
        {label: '9', onClick: (e) => { appendToExpression('9') }},
        {label: '*', theme: 'dark',onClick: (e) => { appendToExpression('*') }},
        {label: '.', onClick: (e) => { appendToExpression('.') }},
        {label: '0', onClick: (e) => { appendToExpression('0') }},
        {label: '=', onClick: (e) => { evaluateExpression() }},
        {label: '/', theme: 'dark', onClick: (e) => { appendToExpression('/') }},
    ]
    
    return (
        <Grid container className={classes.layout} spacing={0}>
            <Grid item xs={12} title='screen' className={classes.screen}>
                <Typography title='screenText' className={classes.screenText} >
                    { error ? error : expression === '' ? 0 : expression}
                </Typography>
            </Grid>
            <ButtonRows rows={buttonRowsData} />
        </Grid>
    )
}

export { Calculator }