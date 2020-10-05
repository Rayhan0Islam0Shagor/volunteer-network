import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Body.css'

const Body = () => {
    const [event, setEvent] = useState([]);

    // onClick={handleAddEvent}
    // const handleAddEvent = () => {
    //     fetch('https://calm-wildwood-74392.herokuapp.com/addEvent', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(tasks)
    //     })
    // }

    useEffect(() => {
        fetch('https://calm-wildwood-74392.herokuapp.com/events')
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
                        <button className="btn btn-success">SEARCH</button>
                    </div>
                </div>
                <div className="row">
                    {
                        event.map(task =>
                            <div key={Math.random()} className="col-md-3 text-center">
                                <Link style={{ textDecoration: "none" }} to={`/register/${task.id}`}>
                                    <div className="card p-2" style={{ width: '100%', height: "380px", marginTop: "20px" }}>
                                        <div style={{ overflow: "hidden" }}>
                                            <img className="card-img-top" src={task.imgURL} alt="..." />
                                        </div>
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