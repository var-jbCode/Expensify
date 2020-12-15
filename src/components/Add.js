import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

export class Add extends React.Component {
    onSubmit = (expense) => {
        props.onSubmit(expense)
        props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(Add)

