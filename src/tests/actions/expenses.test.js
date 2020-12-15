import { addExpense, editExpense, removeExpense, RemoveExpense } from '../../actions/expenses';

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
    const expenseData = {
        description: 'rent',
        amount: 1234,
        createdAt: 1000,
        note: 'this is a rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})



test('should setup add expense action object with no Data', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})