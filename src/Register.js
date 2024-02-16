import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import Header from './Header'
function Register(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add');
        }
    },[])
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    async function signUp(){
        let item={name,email,password};
        let results=await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        results=await results.json();
        console.log("result",results);
        localStorage.setItem("user-info",JSON.stringify(results));
        navigate('/add');
    }
    return(
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                
                <h1>User SignUp</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="User Name"/><br/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="User Email"/><br/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/><br/>
                <button onClick={signUp} className="btn btn-primary">Sing Up</button>
            </div>
        </>
    )
}
export default Register