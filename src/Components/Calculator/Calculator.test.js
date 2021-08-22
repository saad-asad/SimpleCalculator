import { render, fireEvent } from '@testing-library/react'

import { Calculator } from './Calculator'

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'C', 'CE', 'screen']

it('verifyCalculatorRender', () => {
    const { queryByTitle } = render(<Calculator />)
    labels.forEach( label => {
        const labelValue = queryByTitle(label)
        expect(labelValue).toBeTruthy()
    })
});

describe('expressionTest', () => {
    it('correctionTest', () => {
        const { queryByTitle } = render(<Calculator />)
        const screen = queryByTitle('screenText')
        const btn3 = queryByTitle('3')
        const btn2 = queryByTitle('2')
        fireEvent.click(btn3)
        fireEvent.click(btn2)
        expect(screen.innerHTML).toBe('32')
    });

    it('evaluationTest', () => {
        const { queryByTitle } = render(<Calculator />)
        const epxressionArray = ['(', '3', '+', '2', '*', '7', ')', '/', '2', '=']
        const screen = queryByTitle('screenText')
        epxressionArray.forEach( label => {
            const btn = queryByTitle(label)
            fireEvent.click(btn)
        })
        expect(screen.innerHTML).toBe('8.5')
    });
    
    it('invalidEquationTest', () => {
        const { queryByTitle } = render(<Calculator />)
        const epxressionArray = ['(', '3', '+', '2', '*', '(', '/', '2', '=']
        const screen = queryByTitle('screenText')
        epxressionArray.forEach( label => {
            const btn = queryByTitle(label)
            fireEvent.click(btn)
        })
        expect(screen.innerHTML).toBe('Invalid Expression')
    });
});
