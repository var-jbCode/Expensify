import React from 'react';
import { shallow } from 'enzyme'
import { Add } from '../../components/Add'
import expenses from '../fixtures/expenses'

test('should render add expense page correctly', () => {
    const onSubmit = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(<Add onSubmit={onSubmit} history={history} />)
    expect(wrapper).toMatchSnapshot()
})

// test('should handle onSubmit', () => {
//     const onSubmit = jest.fn()
//     const history = { push: jest.fn() }
//     const wrapper = shallow(<Add onSubmit={onSubmit} history={history} />)
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
//     expect(history.push).toHaveBeenLastCalledWith('/')
//     expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
// })