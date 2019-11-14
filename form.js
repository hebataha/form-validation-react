import React, { Component } from 'react';


class Form extends Component {
     state={
       email: '',
       password: '',
       errorMassage: '',
       errorMail: '',

       
  }
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });

 

  }
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  

  }

  onClickfun = (e) => {
    const value = e.target.value;
    if (this.state.email === "") {

      this.setState({
        errorMassage: 'please enter email '
      })
    }
    else {
      this.setState({
        errorMassage: ''
      })
    }

    if (this.state.password === "") {

      this.setState({
        errorMail: 'please enter password '
      })
    }
    else {
      this.setState({
        errorMail: ''
      })
    }
    if (this.state.password.length < 8 !== null) {

      alert("you should enter password more then 8 character " )
     }
   
  }
   doSomething = (e) => {
    //  alert('it works!');
       e.preventDefault(); 
        }
  render() {
    console.log(this.state.password.length )
        return (
          <div className="login">
            <h3>Login</h3>
            <form onSubmit={this.doSomething}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email "
                // value={this.state.errorMassage}
                onChange={this.handleChangeEmail}
                // required
              />
              <p style={{color:"red"}}>{this.state.errorMassage} </p>
              <input
                type="password"
                className="form-control"
                placeholder="password "
                // required
                // maxLength="8"
                onChange={this.handleChangePassword}
          
              />

              <p style={{ color: "red" }}>{this.state.errorMail} </p>

              {/* <p>mail is{this.state.email}</p>
              <p>mail is{this.state.password}</p> */}
              <button className="btn" onClick={this.onClickfun} >Submit</button>
            </form>
          </div>
        );
    }
}
export default Form;