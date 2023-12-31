import { useEffect, useState } from "react"
import { getDetails, onUpdate } from "./Connect"

export const Profile=()=>
{
    const[process,setProcess]=useState({
        "empId":0,
        "empName":"",
        "username":"",
        "password":"",
        "empDesignation":"",
        "empExperience":"",
        "empSalary":0.0
    })
    const loading=async()=>
    {
        const t=await getDetails()
        setProcess(t.data);
    }

    useEffect(()=>
    {
        loading()
    },[])



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

    const Update=async()=>
    {
        const t=await onUpdate(process);
        alert(t.data);
        window.location.assign("/");
    }


    return(
        <>
        <div className="container-fluid mt-2 bg-secondary">
            <h1 className="text-info text-uppercase text-center font-monospace">Employee Update</h1>
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
                        name="username"
                        onChange={track}
                        value={process.username}
                        placeholder="Employee Username"
                        className="form-control"
                        />
                    </div>
                    <div className="form group">
                        <label>EmployeePassword</label>   
                        <input type="text"
                        name="password"
                        onChange={track}
                        value={process.password}
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
                        placeholder="Employee Experience"
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
                        <button className="btn btn-outline-success col-3 ms-3"  onClick={Update}>Update</button>
                        <button className="btn btn-outline-danger col-3 me-3"  type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    );
}