import 'bootstrap/dist/css/bootstrap.min.css'
import './Login_Style.css';
import React, { useState } from 'react';

export let LoginPage=()=>
{
    const[username,setUsername]=useState({
        "loginUsername":"",
        "loginPassword":""
    })
    const loginvalues=(temp)=>{
        const{name,value}=temp.target

        setUsername((getting)=>
        {
            return{
                ...getting,
                [name]:value
            }
        })
    
    }

    const submitvalues=()=>
    {
        alert("Login page Values "+JSON.stringify(username))
    }

    const resetvalues=()=>
    {
        alert("Reset Login values")
    }
    
    return(
        <>
        <div class="login_form_container">
            <div class="login_form">
            <h2>LOGIN</h2>
            {/* <!-- username --> */}
            <div class="input_group">
                {/* <!-- <img src="../imgs/us2.png" alt="fa">  --> */}
                
                <input 
                name="loginUsername"
                type="text"
                placeholder="username"
                class="input_text"
                autocomplete="off"
                value={username.loginUsername}
                onChange={loginvalues}
                />
            </div>
            {/* <!-- password --> */}
            <div class="input_group">
                {/* <!-- <img src="../imgs/pas.png" alt="fa"> --> */}
                <input 
                name="loginPassword"
                type="password"
                placeholder="password"
                class="input_text"
                autocomplete="off"
                value={username.loginPassword}
                onChange={loginvalues}
                />
            </div>
            {/* <!-- submit --> */}
            <div class="button_group" id="login_button">
                <a onClick={submitvalues}>Submit</a>
            </div>
            <div class="button_group" id="reset_button">
                <a onClick={resetvalues}>Reset</a>
            </div>

            <div class="fotter">
                <a>Forget Password ?</a>
                <a>SignUp</a>
            </div>
        </div>
    </div>
     </>

    );
}
