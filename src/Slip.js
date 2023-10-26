import { useEffect, useState } from "react";
import { loadSlips } from "./Connect";

export const ViewSlips=()=>
{
    const[allslips,setAllslips]=useState([])

    const Loadingmyrecords=async()=>
    {
        const t=await loadSlips();
        setAllslips(t.data);
    }   

    useEffect(()=>
    {
        Loadingmyrecords();
    },[])

    return(
        <>
        <div className="container">
            <a href="/newslip" className="btn btn-outline-success">
                <i class="bi bi-newspaper"></i> New Payslip
            </a>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-nowrap p-3 shadow rounded-5" cellSpacing="4px" cellPadding="4px">
                            <thead>
                                <tr>
                                    <th>Payslip id</th>
                                    <th>Payslip date</th>
                                    <th>BasicPay</th>
                                    <th>Allowance</th>
                                    <th>TDS</th>
                                    <th>Take Home</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allslips.map((v)=>(
                                    <tr>
                                        <td>{v.payslipId}</td>
                                        <td>{v.payslipDate}</td>
                                        <td>{v.payslipBasicsalary}</td>
                                        <td>{v.payslipAllowance}</td>
                                        <td>{v.payslipTds}</td>
                                        <td>{v.payslipTakehome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}