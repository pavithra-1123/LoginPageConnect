import { useState } from "react"
import { Register } from "./RegisterForm";
// import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Loadempdetails } from "./Connect";
import './Login_Style1.css';

export const Login=()=>{

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
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 col-md-8 col-sm-12 p-5 shadow-lg form_group ">
                            <div className="page">
                            <h2>LOGIN</h2>
                            <div className="page">
                                <label>Username </label>
                                <input 
                                type="text" 
                                onChange={onPerform} 
                                value={user.empUsername} 
                                name="empUsername" 
                                placeholder="Username please"
                                className="form-control" />
                            </div>
                            <div className="page">
                                <label>Password <KeySharpIcon></KeySharpIcon></label>
                                <input 
                                type="password" 
                                onChange={onPerform} 
                                value={user.empPassword} 
                                name="empPassword" 
                                placeholder="Password please" 
                                className="form-control" />
                            </div>
                            <div className="row justify-content-around mt-3 ">
                                <button className="col-3 btn btn-outline-primary "
                                onClick={async()=>
                                {
                                     // alert(user.username+":"+user.password);
                                    // const temp=btoa(user);
                                    // alert(temp) 
                                    const t=await Loadempdetails(user);
                                    // alert(t.);
                                    window.location.assign("/");
                                }}>
                                    <i class="bi bi-box-arrow-in-right"></i>Login
                                </button>
                                <button className="col-3 btn btn-outline-dark " type="reset">
                                    <i class="bi bi-x-circle-fill"></i>Cancel
                                </button>
                            </div><br/><br/>
                            <button className="col-3 btn btn-outline-light ">
                            <a 
                            onClick={()=>
                            {
                                setCview(true);
                            }}>New Employee</a> 
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </>
    )
}