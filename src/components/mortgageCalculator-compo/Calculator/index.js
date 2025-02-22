"use client"
import "./index.css";

const Calculator = () => {

  return (
    <div className="calculator-bg-con">
      <div className="cal-con">
      <h2 className="cal-h">Mortgage Calculator</h2>
      <p>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
      
      <div className="cal-row-1">
        <div className="row-con">
          <p className="la">Home Price</p>
          <h5 className="home-price">$300,000</h5>
        </div>
        <div className="row-con">
          <p className="lable">Monthly Payment</p>
          <h5 className="monthly-p">$2,146/mo</h5>
        </div>
        <div className="row-con">
          <button className="get-approve-btn">Get pre-approved</button>
        </div>
      </div>
     
      <div className="percentage-con">
        <div className="fill-con"></div>
      </div>

      <div className="cal-row-3">

        <div className="cal-left-con">
          <div className="cal-box">
            <p>Zip code</p>
            <h6>500062</h6>
          </div>
          <div className="cal-box">
            <p>Down payment</p>
            <h6>$ 60,000</h6>
          </div>
        </div>

        <div className="cal-right-con">
          <div className="cal-box">
            <p>Interest Rate</p>
            <h6>6.500</h6>
          </div>
          <div className="cal-box">
            <p>Length of loan</p>
            <h6>30 years</h6>
          </div>
        </div>

        </div>
        </div>
    </div>
  );
};

export default Calculator;
