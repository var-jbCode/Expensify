import { createStore } from 'redux'


const incCount = ({ incBy = 1 } = {}) => (
    {
        type: 'INC',
        incBy
    })

const decCount = ({ decBy = 1 } = {}) => (
    {
        type: 'DEC',
        decBy
    }
)

const setCount = ({ count }) => (
    {
        type: 'SET',
        count
    }
)

const resetCount = () => (
    {
        type: 'RESET'
    }
)

// Reducers
// 1. reducers are pure fxns (only interact with stuff in its own scope)
// 2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INC':
            const incBy = typeof action.incBy === 'number' ? action.incBy : 1
            return {
                count: state.count + incBy
            };
        case 'DEC':
            const decBy = typeof action.decBy === 'number' ? action.decBy : 1
            return {
                count: state.count - decBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer)

const unsub = store.subscribe(() => {
    console.log(store.getState())
})

// increment

store.dispatch(incCount())

store.dispatch(incCount({ incBy: 2000 }))

store.dispatch(decCount({ decBy: 1000000 }))

store.dispatch(setCount({ count: 589 }))

store.dispatch(resetCount())



