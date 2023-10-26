import axios from 'axios'

const mylink="http://localhost:8081/ZohoTech"


// async,await

export const Loadempdetails=async(obj)=>
{
    try{
        const txt=obj.empUsername+":"+obj.empPassword
        const token=btoa(txt)
        const t = await axios.get(`${mylink}/${obj.empUsername}`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("employee",obj.empUsername)
            sessionStorage.setItem("user",token)
            return t
        }
    }
    catch(err){
        alert("invalid")
    }
}


export const join=async(object)=>
{
    const temp=await axios.post(`${mylink}/create`,object)

    alert(JSON.stringify(temp.data)+" has been added successfully ");

    return temp;
}

export const loadSlips=async()=>
{
    const temp=await axios.get(`${mylink}/fetch/${sessionStorage.getItem('employee')}`,
    {
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return temp;
}

export const logout=async()=>
{
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('employee');
    window.location.assign("/")
    return;
}

export const addSlip=async(slip)=>
{
    alert(" before to add back end"+JSON.stringify(slip));
    const t=await axios.post(`${mylink}/createpayslip/${sessionStorage.getItem('employee')}`,slip,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t;
}


export const onQuit=async()=>
{
    const t=await axios.delete(`${mylink}/deleteone/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    sessionStorage.removeItem("employee");
    sessionStorage.removeItem("user")
    return t;
}

export const onUpdate=async(obj)=>
{
    const t=await axios.put(`${mylink}/update`,obj,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t;
}


export const getDetails=async()=>
{
    const t=await axios.get(`${mylink}/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t;
}
