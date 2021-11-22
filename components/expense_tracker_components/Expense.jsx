import React from "react";

function ExpenseT({ income, expense }) {

  const balance = Number( income - expense );
  console.log(balance)


  return (
    <div>
      <h2 id="balance">Deine Bilanz</h2>
      <div className={`balance-val ${balance < 0 ? 'red' : 'green'}`} >€{income - expense}</div>
      <div className="row row-expense">
        <div className="col col-income">
          <span>
            <h3>Einkommen</h3>
            <div className="income-text">€{income}</div>
          </span>
        </div>
        <div className="col col-expense">
          <h3>Ausgaben</h3>
          <div className="expense-text">€{expense}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseT;
