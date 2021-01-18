import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from '../src/store/configureStore'
import { startSetExpenses } from './actions/expenses'
import getVisExp from './selectors/expenses'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'


const store = configureStore()

const state = store.getState()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"))
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))




firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in')
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        renderApp()
        history.push('/')
    }
})


