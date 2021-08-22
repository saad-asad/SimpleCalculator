import React from 'react'
import { Grid, Button } from '@material-ui/core';

import { useStyles } from './Style/CalculatorStyles'

const ButtonRows = (props) => {
    const classes = useStyles()
    const { rows } = props
    
    return (
        rows.map( (row, index) =>  (
            <Grid item xs={3} key={index}>
                <Button
                    variant='outlined'
                    className={`${classes.button} ${row?.theme === 'dark' && classes.darkButton}`}
                    fullWidth
                    title={row.label}
                    onClick={row.onClick}
                >
                    {row.label}
                </Button>
            </Grid>
        ))
    )
}

export { ButtonRows }