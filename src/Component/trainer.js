import './trainer.css'
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Navibar from './navbar';


function Runner(){

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/getuser").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])
    console.warn(data)

    return(
        <div>
            <div>
            <Navibar/>
            </div>
        <div className="userdata">
            <h1>I am the owner of this website</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Height</td>
                    <td>Weight</td>
                    <td>Goal</td>
                    <td>Currentstats</td>
                </tr>
                </thead>
                {
                    data.map((item)=>
                    <tbody>
                        <tr>
                        <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Gender}</td>
                    <td>{item.Height}</td>
                    <td>{item.Weight}</td>
                    <td>{item.Goal}</td>
                    <td>{item.Currentstats}</td>
                        </tr>
                    </tbody>
                    )
                }
            </Table>
        </div>
        </div>
    )
}

export default Runner;