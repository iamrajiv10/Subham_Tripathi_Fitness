import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap'
import { useState } from "react"
import './signup.css'
import Navibar from "./navbar";


function Signup() {
    const navigate = useNavigate()

    const [fullName,setFullName]=useState("");
    const [gender,setGender]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);

    function Direct(){
        navigate('/Login');
    }

    async function saveUser(){
        if(!fullName || !gender || !email || !password){
            setError(true);
            return false;
        }
        console.warn({fullName,gender,email,password});
        let data={fullName,gender,email,password}
        await fetch("http://localhost:4000/register", {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.warn("result",result);
            localStorage.setItem("user",JSON.stringify(result))
            alert("User Registared Successfully !😘");

            navigate("/Login")

            
        })
        setFullName("");
        setGender("");
        setEmail("");
        setPassword("");
    }



    return (
        <div>
            <div>
                <Navibar/>
            </div>
        <div className="signup_container">
            <div className="signup_form_container">
                <div className="left">
                    

                    <h1>Welcome to " S<span>T</span>F "</h1><br/>
                    <label>FullName</label>
                    <input type="text" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} name="fullName"  required/>
                    {error && !fullName && (
          <span className="invalid-input">Enter Your Name</span>
        )}
                    <label>gender</label>
                    <input type="text" value={gender}  onChange={(e)=>{setGender(e.target.value)}} name="gender" />
                    <label>email</label>
                    <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
                    <label>password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password"/><br/>

                    <Button variant="dark" onClick={()=>{saveUser(); Direct();}} >Submit</Button>

                    
                </div>
                <div className="right">
                    <h1>If you have already registered </h1>
                    <Button variant="dark" onClick={() => navigate('/Login')}>Please Login</Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Signup;