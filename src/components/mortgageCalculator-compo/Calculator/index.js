"use client"
import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [zipCode, setZipCode] = useState("500062");
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const monthlyPayment = (homePrice * (1 - downPayment / 100) * interestRate) / loanTerm;

  return (
    <div className="mortgage-calculator">
      <h2>Mortgage Calculator</h2>
      <div className="input-group">
        <label>Home Price:</label>
        <input type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
      </div>
      <div className="input-group">
        <label>ZIP Code:</label>
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Down Payment (%):</label>
        <input type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Length of Loan (Years):</label>
        <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
      </div>
      <div className="result">
        <h3>Monthly Payment: ${monthlyPayment.toFixed(2)}</h3>
      </div>
      <button className="pre-approve-button">Get pre-approved</button>
    </div>
  );
};

export default Calculator;
