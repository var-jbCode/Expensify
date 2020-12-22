import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'

// load a locale
numeral.register('locale', 'GB', {
    delimiters: {
        thousands: ' ',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '£'
    }
});

numeral.locale('GB')

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