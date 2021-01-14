import { addExpense, editExpense, removeExpense, RemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('should setup edit expense action object', () => {
    const action = editExpense('123bca', { note: 'this is a new note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123bca',
        updates: {
            note: 'this is a new note'
        }

    })
})

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})




