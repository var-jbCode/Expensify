import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from '../src/store/configureStore'
import { addExpense } from './actions/expenses'
import getVisExp from './selectors/expenses'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const state = store.getState()




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

)

ReactDOM.render(jsx, document.getElementById("app"))
