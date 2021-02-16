import React, { useState } from 'react';
import { connect } from 'react-redux'
import { startLoginGoogle, startLoginEmail } from '../actions/auth'

export const Login = (props) => {

    return (
        <div className="box-layout" >
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>A more sophisticated Piggy Bank 🐖</p>
                <button className="button" onClick={props.startLoginGoogle}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle())
})



export default connect(undefined, mapDispatchToProps)(Login);