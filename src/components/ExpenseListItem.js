import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>
            <h3>{description}</h3>
        </NavLink>
        <p> <b>Amount:</b>
            {numeral(amount).format('$0,0.00')}
            <div />
            <b>Created: </b>
            {moment(createdAt).format('Do MMMM, YYYY')}
        </p>
    </div>
);



export default connect()(ExpenseListItem)