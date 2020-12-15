import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>
            <h3>{description}</h3>
        </NavLink>
        <p> Amount: {amount}, Created Date: {createdAt}</p>
    </div>
);



export default connect()(ExpenseListItem)