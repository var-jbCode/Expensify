import expensesReducer from '../../reducers/expenses'
import testData from '../fixtures/expenses'


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = { type: 'REMOVE_EXPENSE', id: 1 }
    const state = expensesReducer(testData, action)
    expect(state).toEqual([testData[1], testData[2]])
})

test('should not remove expense by ID if ID is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 999999
    }
    const state = expensesReducer(testData, action)
    expect(state).toEqual(testData)
})

test('should add an expense', () => {
    const expense = { id: 4, description: '4th expense', note: '', startDate: null, endDate: null }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(testData, action)
    expect(state).toEqual([...testData, expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: {
            description: 'this is an update'
        }
    }
    const state = expensesReducer(testData, action)
    expect(state).toEqual([{ id: 1, description: 'this is an update', note: '', amount: 195, createdAt: 0 }, testData[1], testData[2]])


})

test('should not edit an expense if ID is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            description: 'this is an update'
        }
    }
    const state = expensesReducer(testData, action)
    expect(state).toEqual(testData)
})


