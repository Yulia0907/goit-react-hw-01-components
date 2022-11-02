import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => (
    <tr key={id}>
      <td className={css.transactionItem}>{type}</td>
      <td className={css.transactionItem}>{amount}</td>
      <td className={css.transactionItem}>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>
);

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };