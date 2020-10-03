import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Body = () => {
    const [event, setEvent] = useState([]);

    const handleAddEvent = () => {
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    return (
        <div>
            <div className="container" >
                <div className="container text-center pb-5 pt-4">
                    <h1>I GROW BY HELPING PEOPLE IN NEED.</h1> <br />
                    <div style={{ marginLeft: "120px" }} className="d-flex container">
                        <input className="form-control w-75" type="text" />
                        <button onClick={handleAddEvent} className="btn btn-success">SEARCH</button>
                    </div>
                </div>
                <div className="row">
                    {
                        event.map(task =>
                            <div key={Math.random()} className="col-md-3 text-center">
                                <Link style={{ textDecoration: "none" }} to={`/register/${task.id}`}>
                                    <div className="card p-3 m-1" style={{ width: '18rem', height: "430px", width: "288px" }}>
                                        <img height="300px" width="250px" src={task.imgURL} className="card-img-top" alt="..." />
                                        <div className="card-body bg-primary text-light rounded">
                                            <h4 className="card-text">{task.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Body;