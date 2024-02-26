import css from "./transactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.transactionTableTh}>Type</th>
          <th className={css.transactionTableTh}>Amount</th>
          <th className={css.transactionTableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td className={css.transactionTableTd}>{transaction.type}</td>
            <td className={css.transactionTableTd}>{transaction.amount}</td>
            <td className={css.transactionTableTd}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
