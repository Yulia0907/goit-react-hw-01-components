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
    {items.map(item => (
    <tr key={item.id}>
      <td className={css.transactionItem}>{item.type}</td>
      <td className={css.transactionItem}>{item.amount}</td>
      <td className={css.transactionItem}>{item.currency}</td>
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