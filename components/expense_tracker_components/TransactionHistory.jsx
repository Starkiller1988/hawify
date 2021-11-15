import React from "react";

function TransactionHistory({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h2 id="subtitle">Transaktions Liste</h2>
      <ul className="transactions">
        {transactions.map((data) => (
          <li key={data.id}>
            <div>{data.name}</div>
            <div>
              <span>€{data.amount}</span>
              <button onClick={() => onDeleteTransaction(data.id)}>
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
