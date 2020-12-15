import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const stateBefore = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(stateBefore, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'some text'
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text })
    expect(state.text).toBe(text)
})

test('should set start date filter', () => {
    const date = moment(0)
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date })
    expect(state.startDate).toEqual(date)
})

test('should set end date filter', () => {
    const date = moment(0)
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date })
    expect(state.endDate).toEqual(date)
})