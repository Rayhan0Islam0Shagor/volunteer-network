import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure();

const AddEvent = () => {

    const [inputValue, setInputValue] = useState({
        title: '',
        description: '',
        date: '',
        id: ''
    })

    const InputBlur = (e) => {
        const updatedEvent = { ...inputValue }
        if (e.target.name == 'title') {
            updatedEvent.title = e.target.value
        }
        else if (e.target.name == 'description') {
            updatedEvent.description = e.target.value
        }
        else if (e.target.name == 'date') {
            updatedEvent.date = e.target.value
        }
        updatedEvent.id = Math.round(Math.random() * 1000 + 1);

        setInputValue(updatedEvent);
    }

    const newAddSubmit = (e) => {
        fetch('https://calm-wildwood-74392.herokuapp.com/addNewEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Event Added successfully')
                }
            })

        e.preventDefault();
    }


    return (
        <div>
            <div>
                <div className="d-flex mt-4">
                    <Link to='/home'>
                        <img className="ml-5 mr-5" width="200px" src={logo} alt="" />
                    </Link>
                    <h2>Volunteer Register List</h2>
                </div>

                <div className="mt-3">
                    <div className="row">
                        <div className="col-md-3 pl-5 pr-5 pt-4">
                            <p>
                                <span>
                                    <NavLink activeClassName="active" className="custom-link" to='/admin'>
                                        <FontAwesomeIcon className='mr-2' icon={faUserFriends} />
                                        Volunteer register list
                                    </NavLink>
                                </span>
                            </p>
                            <br />
                            <p>
                                <span>
                                    <NavLink activeClassName="active" className="custom-link font-weight-bold" to='/addEvent'>
                                        <FontAwesomeIcon className='mr-3' icon={faPlus} />
                                    Add event
                                    </NavLink>
                                </span>
                            </p>
                        </div>

                        <form action=""
                            onSubmit={newAddSubmit}
                            className="col-md-9 w-100"
                            style={{ border: "3px solid #d9ecf2", borderRadius: "10px" }}>
                            <div className="row">
                                <div className="col-md-6 w-100 p-5">
                                    <div>
                                        <label className="font-weight-bold" htmlFor="">Event Title</label> <br />
                                        <input onBlur={InputBlur} name="title" placeholder="Enter title" required className="form-control" type="text" />
                                    </div>
                                    <div>
                                        <label className="font-weight-bold" htmlFor="">Description</label> <br />
                                        <textarea onBlur={InputBlur} name="description" style={{ height: "110px" }} placeholder="Description...." className="form-control" type="text"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 w-100 p-5">
                                    <div>
                                        <label className="font-weight-bold" htmlFor="">Date</label> <br />
                                        <input onBlur={InputBlur} name="date" required className="form-control" type="date" />
                                    </div>
                                    <div>
                                        <label className="font-weight-bold text-primary" htmlFor="">Banner</label> <br />
                                        <input className="btn" type="file" />
                                    </div>
                                    <input value="Submit" className="btn-primary btn mt-3" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;