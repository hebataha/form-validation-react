import React, { Component } from 'react';
// import img from "../download.png";


class FormRegist extends Component {
    state = {
        firstName: "",
        lastName: "",
      password: "",
        conformPass: "",
        paMatch: "",
        paErorr: "",
        paImpty: "",
        minLength: "",
        gender:"",
        dateNum:"",
        dateMas:"",
        first:"",
        last:"",
        image:"",
        noImg:""
        // male:false,
        // female:false

    }
    handelChangefirst=(e)=>{
this.setState({
    firstName:e.target.value
})
    }

    dateValue = (e) =>{
        this.setState({
            dateNum: e.target.value
        })
    }
    
    // passFun = () => {
    //     this.setState({
    //         firstName: "heba"
    //     })
    // }
  
    changeImg = (e) =>{
this.setState({
    image:e.target.value
})
    }


    handelChangePass=(e) =>{
        this.setState({
            password: e.target.value
            
            
           
        })
    }
    handelChangeConPass = (e) => {
        this.setState({
            conformPass: e.target.value,

            

        })

    }

 radioChange = (e) =>{
this.setState({
    gender: e.target.value
})
 }
handelChangeLast = (e) =>{
    this.setState({
        lastName: e.target.value
    })

 }



    btnClick = (e) => {
        e.preventDefault();

        if(this.state.dateNum === ""){
            this.setState({
                dateMas:"plese put date"
            })
        } else{
            this.setState({
                dateMas:""
            }) 
        }



if(this.state.firstName === ""){
this.setState({
    first:"plase put your first name"
})
}else{
    this.setState({
        first:""
    })  
}

if(this.state.image ===""){
this.setState({
    noImg:"plese select img"
})
}else{
    this.setState({
        noImg:""
    })  
}

if(this.state.lastName === ""){
    this.setState({
        last:"plase put your last name"
    })
    }else{
        this.setState({
            last:""
        })    
    }
    
        if(this.state.gender === ""){
            this.setState({
                falCheck: "plz choose radio"
            })
        }else{
            this.setState({
                falCheck: ""
            })
        }

        // if (this.state.password === this.state.conformPass) {
        //     this.setState({
        //         paMatch: " pass  match ",
        //         paErorr:""
        //     })
        // }else{
        //     this.setState({
        //         paErorr: "please pass Not match  ",
        //         paMatch: ""
        //     })
        // }
  
        if (this.state.password === "" || this.state.conformPass === "" ) {
           
            if (this.state.password === this.state.conformPass) {
                this.setState({
                paMatch: " pass  match ",
                    paErorr: "",
                    paImpty: ""

            })
            } else {
            this.setState({
                paErorr: "please pass Not match",
                paMatch: "",
                paImpty: ""

            })
   
    }
        }
   
        if (this.state.password.length < 8 ) {
            this.setState({
                minLength: "plz enter more than word"
            })
        //   alert("shsjjsh")
        } else {
            this.setState({
                minLength: ""
            })
        }
       if (this.state.password === this.state.conformPass) {
           this.setState({
                paMatch: "please pass  match ",
                    paErorr: "",
                    paImpty: ""

            })
            } else {
            this.setState({
                paErorr: "please pass Not match",
                paMatch: "",
                paImpty: ""

            })

    }

        if (this.state.password === "" || this.state.conformPass === "") { 


            this.setState({
                paMatch: " ",
                paErorr: "",
                paImpty: "please full the password"
            })}

        }

        
    

    render() {
        console.log(this.state.image)

        return (
            <div className="regist">
                <h3>Regist</h3>
                <form >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="first name "
                    
                        // value={this.state.firstName}
                        onChange={this.handelChangefirst}

                    />

<p style={{color:"red"}}>{this.state.first}</p>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="last name "
                        onChange={this.handelChangeLast}

                    />

<p style={{color:"red"}}>{this.state.last}</p>

                    <input
                        type="password"
                        className="form-control"
                        placeholder="password "
                        onChange={this.handelChangeConPass}
                      
            

                    />
                    <p>conpass</p>
                    <p>{this.state.conformPass}</p>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="conform password "
                        onChange={this.handelChangePass}

                    />
                    <p>password</p>
                    <p>{this.state.password}</p>
                    <p style={{color:"green"}}>{this.state.paMatch}</p>
                    <p style={{ color: "red" }}>{this.state.paErorr}</p>
                    <p style={{color:"red"}}>{this.state.paImpty}</p>
                    <p style={{ color: "red" }}>{this.state.minLength}</p>
                   
                 {/* <select>gender
                                <option>male</option>
                        <option>female</option>

                    </select> */}

<div className="radio">
    <p>Gender</p>
    <input name="male" type="radio"  value="male" onChange={this.radioChange}/>

    <label>male</label>
    <br/>
    <input name="male" type="radio" value="famale" onChange={this.radioChange}/>

    <label>female</label>
    <p style={{color:"red"}}>{this.state.falCheck}</p>
    </div>

                    <input
                        type="date"
                        className="form-control"
                        onChange={this.dateValue}


                    />

                <p style={{color:"red"}}>{this.state.dateMas}</p>

                    <input type="file"  onChange={this.changeImg}/>
                    <p style={{ color: "red" }}>{this.state.noImg}</p>

                    <br/> 
                    <button onClick={this.btnClick}>Submit</button>
                </form>
            </div>
        );
    }
}
export default FormRegist;