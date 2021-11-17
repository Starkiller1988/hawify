import React, { useState } from "react";
import { uniqueId } from "../expense_tracker_components/utils";

function TransactionForm({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      type: type,
    };

    onNewTransaction(data);

    setNameValue("");
    setAmountValue("");
  };

  return (
    <div>
      <h2 id="subheadertra">Neue Transaktion einfügen</h2>
      <form className="transaction-form">
        <label id="name">
          Kategorie
          <div>
            <input
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
        </label>
        <label id="name">
          Wert
          <div>
            <input
              type="number"
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            />
          </div>
        </label>
        <div id="div_btnexpense">
          <button
            className="income-btn"
            onClick={(e) => addTransaction("income", e)}
          >
            Einkommen einfügen
          </button>
          <button
            className="expense-btn"
            onClick={(e) => addTransaction("expense", e)}
          >
            Ausgabe einfügen
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
