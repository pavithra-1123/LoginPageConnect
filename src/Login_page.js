import 'bootstrap/dist/css/bootstrap.min.css'
// import './Login_Style.css';
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import React, { useState } from 'react';
import { Register } from './RegisterForm';
import { Loadempdetails } from './Connect';


export let LoginPage=()=>
{
    const[cview,setCview]=useState(false)

    const[user,setUser]=useState({
        "empUsername":"",
        "empPassword":""
    })

    const onPerform=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
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
            <label>Username </label>
                                <input 
                                type="text" 
                                onChange={onPerform} 
                                value={user.empUsername} 
                                name="empUsername" 
                                placeholder="Username please"
                                className="form-control" />
            </div>
            {/* <!-- password --> */}
            {/* <div class="input_group">
                
                <label>Password <KeySharpIcon></KeySharpIcon></label>
                     <input 
                        type="password" 
                        onChange={onPerform} 
                        value={user.empPassword} 
                         name="empPassword" 
                        placeholder="Password please" 
                        className="form-control" />
            </div> */}
            {/* <!-- submit --> */}
            <div class="button_group" id="login_button">
                
                 onClick={async()=>
                    {
                         // alert(user.username+":"+user.password);
                        // const temp=btoa(user);
                        // alert(temp) 
                        const t=await Loadempdetails(user);
                        // alert(t.);
                        Window.location.assign("/");
                    }} Login
                
                
            </div>
            <div class="button_group" id="reset_button" >
                {/* <input type='reset'onClick={()=>
                {
                    resetvalues()
                }}/> */}
                <label>reset</label>
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
                <a 
                            onClick={()=>
                            {
                                setCview(true);
                            }}>New Employee</a>
            </div>
        </div>
    </div>
    </>
          }
     </>

    );
}
