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
    <NavLink className="list-item" to={`/edit/${id}`} activeClassName="is-active" exact={true}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>
    </NavLink>
)



export default connect()(ExpenseListItem)