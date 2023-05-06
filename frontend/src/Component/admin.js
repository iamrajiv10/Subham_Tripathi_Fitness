import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './admin.css'
import { useState } from 'react';
import Navibar from './navbar';

function AdminLogin() {
    const navigate = useNavigate();


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    

    const adminlogin = async ()=> {
        let result = await fetch("http://localhost:4000/adminlogin", {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if(result.data) {
            localStorage.setItem('"user',JSON.stringify(result))
            alert("Login Successfull !");

            navigate("/runner")
        }else{
            alert("please enter correct data")
            
        }
        setEmail("");
        setPassword("");
    }
    



    return (
        <div>
            <div>
        <Navibar/>
        </div>
        <div className="signup_container">
            
                <div className="left">
                    
                    <h1>Admin Login</h1><br/>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email Id" /> <br/><br/>
                    <label>Password</label>
                    <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" /><br/><br/>
                    <Button variant='dark' onClick={()=>{adminlogin()} } >Login</Button>
            
            </div>
        </div>
        </div>
    )
}

export default AdminLogin;