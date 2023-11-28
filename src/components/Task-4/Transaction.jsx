import React from 'react';
import styles from './Transaction.module.css';
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
    return <table className={styles.table}>
        <thead className={styles.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transaction.map(({ id, type, amount, currency }) =>
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )}
        </tbody>
    </table>
};

Transaction.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}

export default Transaction