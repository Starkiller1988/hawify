import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Electrolize;
  width: 335px;
  color: white;
`;

const BalanceBox = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  height: 50px;
  padding-left: 4px;
  background-color: white;
  color: black;
`;

const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: 2px 40px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
`;

const AddTransactionContainer = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 20px;
  & input {
    outline: none;
    padding: 15px;
    border-radius: 4px;
    margin: auto;
    border: 1px solid #e6e8e9;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  & input {
    width: unset;
    margin: 0 20px;
  }
`;

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    props.toggleAddTxn();
  };

  return (
    <AddTransactionContainer>
      <input
        placeholder="Wert"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Kategorie"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Ausgaben</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Einnahmen</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>
        Transaktion einfügen
      </AddTransaction>
    </AddTransactionContainer>
  );
};

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  text-align: center;
  gap: 5px;
  width: 120px;
  background-color: white;
  color: black;
  font-size: 17px;
  & span {
    font-weight: bold;
    font-size: 25px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
  }
`;

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Bilanz: €{props.income - props.expense}
        <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Abbrechen" : "EINFÜGEN"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          toggleAddTxn={toggleAddTxn}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Ausgaben<span>€{props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Einnahmen<span>€{props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
