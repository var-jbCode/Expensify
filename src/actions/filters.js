
// set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//sort by amount 
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//set start date
export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
})
//set end date
export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
})