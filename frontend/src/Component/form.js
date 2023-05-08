import './form.css'
import { Button } from 'react-bootstrap'

import Footer from "./footer";
import { useState } from 'react';
import Navibar from './navbar';

function Details() {

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Height, setHeight] = useState("");
    const [Gender, setGender] = useState("");
    const [Weight, setWeight] = useState("");
    const [Goal, setGoal] = useState("");
    const [Currentstats, setCurrentstats] = useState("");

    function Saveform() {
        console.warn({ Name, Age, Height, Gender, Weight,Goal, Currentstats });
        let data = { Name, Age, Height, Gender, Weight, Goal, Currentstats }
        fetch("http://localhost:4000/userData", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result);
            alert("Form submited successfully")
        }).catch((err)=>{
            alert(err.message)
        })
        setName("");
        setAge("");
        setHeight("");
        setGender("");
        setWeight("");
        setGoal("");
        setCurrentstats("");
    }

    return (
        <div>
            <div className='navibar'>
                <Navibar />
            </div>
            <div className="formbase">
                

                <div className="formContainer">
                    <form>
                        <label>
                            Name:<br />
                            <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} name='Name' />
                        </label>
                        <div className="eklineme">
                            <label>
                                Age:<br />
                                <input type="number" value={Age} onChange={(e) => { setAge(e.target.value) }} name='Age' />
                            </label>
                            <label>
                                Gender:
                                <select required value={Gender} onChange={(e) => { setGender(e.target.value) }} name='Gender'>
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>
                        </div>
                        <div className="eklineme">
                            <label>
                                Height:<br />
                                <input type="number" value={Height} onChange={(e) => { setHeight(e.target.value) }} name='Height' />
                                cm
                            </label>
                            <label>
                                Weight:<br />
                                <input type="number" value={Weight} onChange={(e) => { setWeight(e.target.value) }} name='Weight' />
                                kg
                            </label>
                        </div><br />
                        <div className="eklineme">
                            <label>
                                <h6>Select Goal as per your requirement</h6>
                                Goal:
                                <select required value={Goal} onChange={(e) => { setGoal(e.target.value) }} name='Goal'>
                                    <option value="">Select</option>
                                    <option value="Loose Wight">Loose Weight</option>
                                    <option value="Gain Weight">Gain Weight</option>
                                </select>
                            </label>
                            <label>
                                Currentstats:
                                <select required value={Currentstats} onChange={(e) => { setCurrentstats(e.target.value) }} name='Currentstats'>
                                    <option value="">Select</option>
                                    <option value="Student">Student</option>
                                    <option value="9to5 job">9to5 job</option>
                                    <option value="Home Maker">Home Maker</option>
                                    <option value="Retired">Retired</option>
                                </select>
                            </label>
                        </div><br />
                        <label>
                            <h6>Plese Provide 1 front and 2 side picture of yours</h6>
                            Front:
                            <input type="file" />
                            Left Side:
                            <input type="file" />
                            Right Side:
                            <input type="file" />
                        </label><br />
                        <Button variant="dark" onClick={Saveform} >submit</Button>
                    </form>
                </div>



            </div>
            <Footer />
        </div>

    )
}

export default Details;