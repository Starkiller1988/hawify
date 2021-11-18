import React from "react";

function TransactionHistory({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h2 id="subtitle">Transaktions Liste</h2>
      <ul className="transactions">
        {transactions.map((data) => (
          <li key={data.id}>
            <div className="history_value">{data.name}</div>
            <div>
              <span className="value_history">€ {data.amount} .-</span>
              <button className="delete-butn"onClick={() => onDeleteTransaction(data.id)}>
                Löschen
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
