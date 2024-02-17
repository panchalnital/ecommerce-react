import React,{useState,useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import Header from './Header'
function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");
    async function SaveData(){

        const formData=new FormData();
        formData.append("file",file);
        formData.append("name",name);
        formData.append("description",description);
        formData.append("price",price);

        let results=await fetch("http://127.0.0.1:8000/api/add",{
            method:'POST',
            body:formData
        });
        alert("Data has been saved");
        // results=await results.json();
        // console.log("result",results);
        // localStorage.setItem("user-info",JSON.stringify(results));
        // navigate('/add');
        
    }
    return(
        <>
        <Header />
            <div>
                <div className="col-sm-6 offset-sm-3">
                    <h1>Add Product</h1>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Product Name"/><br/>
                    <input type="file"  onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="Product File Upload Email"/><br/>
                    <input type="text"  onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Producst Descrition"/><br/>
                    <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Producst Price"/><br/>
                    <button onClick={SaveData} className="btn btn-primary">Save Product</button>
                </div>
            </div>

        </>
    )
}
export default AddProduct