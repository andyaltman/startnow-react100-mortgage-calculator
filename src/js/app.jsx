import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
    

  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);    
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      period: 0,
      monthlyInterestPayments: null
    };
  }

  calculate(state) {
    var rate = $("#rate").val()/100;
    console.log(rate);
    var balance = $("#balance").val();
    console.log(balance);
    var term = $("#term").val();
    console.log(term);
    var period = $("#period").val();
    console.log(period);

    var n = 12*term;
    var r = rate/12;
    var numerator = (Math.pow(1+r,n))*r;
    var denominator = (Math.pow(1+r,n))-1;
    var m = Math.round(balance * (numerator/denominator) * 100)/100;
    console.log(m);

    this.setState({
      rate: rate,
      balance: balance,
      term: term,
      period: period,
      monthlyInterestPayments: m
    });
  }

  
  
  render() {
    return (
      <div className='container'>
        <div className ="page-header"><h1>Mortgage Calculator</h1></div>
        <div className="form-group row">
          <label className="col-2 col-form-label">Loan Balance</label>
          <input type="number" name="balance" id="balance"/>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label">Interest Rate (%)</label>
          <input type="number" name="rate" id="rate"/>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label" >Loan Term (years)</label>
          <select name="term" id="term">
            <option>15</option>
            <option>30</option>
          </select>
        </div>

        <div className="form-group row">
          <label className="col-2 col-form-label" >Loan Period (monthly/bi-monthly)</label>
          <select name="period" id="period">
            <option>1</option>
            <option>2</option>
              </select>
        </div>

        <button type="button" name="submit" className="btn btn-primary" id = "submit"
             onClick = {this.calculate} >Submit</button> 
        <div id="output">{this.state.monthlyInterestPayments}</div>
      </div>
    );
  }
}
