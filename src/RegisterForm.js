import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import { join } from "./Connect"
export const Register=()=>
{
    const[process,setProcess]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExperience":"",
        "empSalary":0
    })
    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }


    const regis=async()=>{
        alert("Welcome to zoho Tech Corp"+JSON.stringify(process))
        const temp=await join(process);
        alert(temp.data);
    }
    const reset=()=>
    {
        alert("rejected......")
    }
    return(
        <>
        <div className="container-fluid mt-2 bg-secondary">
            <h1 className="text-info text-uppercase text-center font-monospace">Employee registration form</h1>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 bg-info">
                <div className="form group">
                        <label>EmployeeId</label>   
                        <input type="text"
                        name="empId"
                        onChange={track}
                        value={process.empId}
                        placeholder="Employee Id"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeName</label>   
                        <input type="text"
                        name="empName"
                        onChange={track}
                        value={process.empName}
                        placeholder="EmployeeName"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeUsername</label>   
                        <input type="text"
                        name="empUsername"
                        onChange={track}
                        value={process.empUsername}
                        placeholder="Employee Username"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeePassword</label>   
                        <input type="text"
                        name="empPassword"
                        onChange={track}
                        value={process.empPassword}
                        placeholder="EmployeePassword"
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                                <label>Employeee Designation</label>
                                <select name="empDesignation"
                                onChange={track}
                                value={process.empDesignation}
                                 className="form-select me-5">
                                    <option>Select Designation</option>
                                    <option>Java Full Stack Developer</option>
                                    <option>Python Full Stack Developer</option>
                                    <option>C &C# Developer</option>
                                    <option>AndroidDeveloper</option>
                                    <option>Other</option>
                                </select>
                            </div>
                    <div className="form group">
                        <label>EmployeeExperience</label>   
                        <input type="text"
                        name="empExperience"
                        onChange={track}
                        value={process.empExperience}
                        placeholder="EmployeeExperience"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeeSalary</label>   
                        <input type="text"
                        name="empSalary"
                        value={process.empSalary}
                        onChange={track}
                        placeholder="EmployeeSalary"
                        className="form-control"
                        />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={regis} >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
            </div>
        </>

    );
}