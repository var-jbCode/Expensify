import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="content-container" >
        <div className="list-header header__ExpenseList">
            <div>
                <div className="show-for-deskop ">Expenses</div>
            </div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div>
                        <span className="list-item--message">No Expenses</span>
                    </div>
                ) : (
                        props.expenses.map((expense) => (
                            <ExpenseListItem
                                key={expense.id}
                                id={expense.id}
                                description={expense.description}
                                amount={expense.amount}
                                createdAt={expense.createdAt}
                            />
                        ))
                    )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

