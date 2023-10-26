import 'bootstrap/dist/css/bootstrap.min.css'
import './Login_Style.css';
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import React, { useState } from 'react';
import { Register } from './RegisterForm';
import { Loadempdetails } from './Connect';

export let LoginPage=()=>
{
    const[cview,setCview]=useState(false)
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
        setUsername('');
        alert("Reset Login values")
    }
    
    return(
        <>
          {(cview)?
            <>
                {alert("new will call")}
                <Register/>
            </>
            :
            <>
            <div class="login_form_container">
            <div class="login_form">
            <h2>LOGIN</h2>
            {/* <!-- username --> */}
            <div class="input_group">
                
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
                <button  className="col-5 btn btn-outline-primary"
                 onClick={async()=>
                    {
                         // alert(user.username+":"+user.password);
                        // const temp=btoa(user);
                        // alert(temp) 
                        const t=await Loadempdetails(username);
                        // alert(t.);
                        Window.location.assign("/");
                    }}>Submit
                </button>
                
            </div>
            <div class="button_group" id="reset_button" >
                {/* <input type='reset'onClick={()=>
                {
                    resetvalues()
                }}/> */}
                <input type='reset' 
                onClick={()=>
                    {
                        setCview(true);
                    }}
                />

            </div>  
            <div class="fotter">
                <a>Forget Password ?</a> 
                <a>SignUp</a>
            </div>
        </div>
    </div>
    </>
          }
     </>

    );
}
