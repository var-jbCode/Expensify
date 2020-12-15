import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'


const Dashboard = () => (
    <div>
        <p>This is from I'm a rolling the beans Home </p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Dashboard