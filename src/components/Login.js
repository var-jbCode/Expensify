import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const Login = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>A more sophisticated Piggy Bank 🐖</p>
            <button onClick={props.startLogin}>Login</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined, mapDispatchToProps)(Login);