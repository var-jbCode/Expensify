import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate set text filter action object on default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate set text filter action object', () => {
    const action = setTextFilter('hello')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    })
})

test('should generate sort by filter with date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate sort by filter with amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})