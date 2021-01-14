import { Children } from 'react'
import uuid from 'uuid'
import database from '../firebase/firebase'
//Regular
// Component calls action generators
// Action generator retunrs object 
// component dispatches object 
// redux store changes

// async Redux Actions
// Component calls action generators
// Action generator returns function
// component dispatches function 
// function runs


// add expense 
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

// remove expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = {
            description,
            note,
            amount,
            createdAt
        }
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }
}

// SET_EXPENSES 
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach(child => {
                expenses.push({
                    id: child.key,
                    ...child.val()
                })
            });
            dispatch(setExpenses(expenses))
        })
    }
}