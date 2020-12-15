import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//Expenses Reducer 

const expensesReducerDefaultstate = []

const expensesReducer = (state = expensesReducerDefaultstate, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
        default:
            return state;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else { return expense }
            })
    }
}

// Filters Reducer

const filersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;

    }
}


// Action Generators

// add expense 
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// edit expense
const editExpense = ({ id }, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//sort by amount 
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//set start date
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})
//set end date
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})



// Get Visible Expenses
const getVisExp = (exp, { text, sortBy, startDate, endDate }) => {
    return exp.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Create Store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }),
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisExp(state.expenses, state.filters)
    console.log(visibleExpenses)
})

// dispatches
const expenseOne = store.dispatch(addExpense({
    description: 'rent',
    amount: 100,
    createdAt: -143000
}))

const expenseTwo = store.dispatch(addExpense({
    description: 'coffee',
    amount: -300,
    createdAt: 1000
}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense({ id: expenseTwo.expense.id }, { amount: 500 }))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))
