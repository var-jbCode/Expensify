import React from 'react';
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render Expense List with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expens list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

