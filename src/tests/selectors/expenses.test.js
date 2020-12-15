import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import testData from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(testData, filters)
    expect(result).toEqual([testData[2], testData[1]])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(testData, filters)
    expect(result).toEqual([testData[2], testData[0]])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(testData, filters)
    expect(result).toEqual([testData[0], testData[1]])
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(testData, filters)
    expect(result).toEqual([testData[1], testData[2], testData[0]])
})

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(testData, filters)
    expect(result).toEqual([testData[2], testData[0], testData[1]])
})