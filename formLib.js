import React, { Component } from 'react';


class FormLib extends Component {
   
    render() {
        return (
            <div className="login">
                <h3>Login</h3>
                <form >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email "
                    
                    // required
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password "
                        // required
                        // maxLength="8"
                      

                    />


                    <button className="btn" onClick={this.onClickfun} >Submit</button>
                </form>
            </div>
        );
    }
}
export default FormLib;