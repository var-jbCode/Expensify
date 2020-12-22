import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
import expensesTotal from '../selectors/expenses-total'
import visibleExpenses from '../selectors/expenses'


const Dashboard = () => (
    <div>
        <p>This is from I'm a rolling the beans Home </p>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard