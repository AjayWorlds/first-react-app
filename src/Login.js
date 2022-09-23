import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
require('axios').default;

export default  function LoginForm(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

     const headers = {
        'Content-Type': 'application/json'
    };

    const onSubmit =(e) =>{
        e.preventDefault();
        axios.post('https://nxzsound10-66173-ruby.b66173.dev.eastus.az.svc.builder.cafe/bx_block_login/login',{ 
            "data": { 
              "type": "email_account",
                "attributes": {
                  "email": email,
                  "password": password
                } 
            }
        },
        {headers})
        .then(function (response) {
            // handle success
      
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        console.log(email,password);
    }
    return(
        <div className="container">
            <br></br>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" name="email" onChange={(e) =>{setEmail(e.target.value)}} type="email" placeholder="Email" />
            </div>
            <br></br>
            <div className="form-group ">
                <label>Password:</label>
                <input className="form-control" name="password" onChange={(e) =>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
            </div>
            <br></br>
            <div className="form-group">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    )
}