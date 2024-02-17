import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import Header from './Header'
function Login(){
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add');
        }
    },[])

    

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    async function signIn(){
        let item={email,password};
        let results=await fetch("http://127.0.0.1:8000/api/login",{
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
             
            <h1>Login Page</h1>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="User Email"/><br/>
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/><br/>
            <button onClick={signIn} className="btn btn-primary">Sing In</button>
           
        </div>
        </>
    )
}
export default Login