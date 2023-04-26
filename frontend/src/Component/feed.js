import { Button } from 'react-bootstrap';
import './feed.css'
import { useState } from 'react';
import Navibar from './navbar';

function Feed() {

    const [Name, setName] = useState("");
    const [Feedback, setFeedback] = useState("");

    function savefeed() {
        console.warn({ Name, Feedback});
        let data = { Name, Feedback}
        fetch("http://localhost:4000/feeddata", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result);
        })
        setName("");
        setFeedback("");
    }

    return (
        <div>
            <div className='navibar'>
                <Navibar />
            </div>
            <div className='allfeed'><br /><br />
                <div className="feeds">
                    <h1><b><i>Your Feedback Means Alot To Us.</i></b></h1><br />
                    <div className="inp">
                        <label>Your Name</label><br />
                        <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }} name='Name' placeholder="full name" /> <br /><br />

                        <label>Feedback</label><br />
                        <textarea name="feedback" value={Feedback} onChange={(e) => { setFeedback(e.target.value) }} placeholder="give your feedback"></textarea> <br/><br/>

                    </div>
                </div><br />
                <Button variant='dark' onClick={savefeed}>Submit</Button>
            </div>
        </div>
    )
}

export default Feed;