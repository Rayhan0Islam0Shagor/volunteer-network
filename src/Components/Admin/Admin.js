import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import logo from '../../logos/Group 1329.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserFriends, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import './Admin.css'


const Admin = () => {
    const [userAllData, setUserAllData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allVolunteerData')
            .then(res => res.json())
            .then(data => setUserAllData(data))
    }, [userAllData])

    const deleteUser = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="d-flex mt-4">
                <Link to='/home'>
                    <img className="ml-5 mr-5" width="200px" src={logo} alt="" />
                </Link>
                <h2>Volunteer Register List</h2>
            </div>

            <div className=" mt-3">
                <div className="row">
                    <div className="col-md-3 pl-5 pr-5 pt-4">
                        <p>
                            <span>
                                <NavLink activeClassName="active" className="custom-link font-weight-bold" to='/admin'>
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

                    <div style={{ border: "3px solid #ecf4f3", borderRadius: "10px" }} className="col-md-8 w-100 pt-4 pb-5">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th colspan="5">Name</th>
                                    <th colspan="2">Email Id</th>
                                    <th colspan="1">Registration Date</th>
                                    <th colspan="2">Volunteer List</th>
                                    <th colspan="1">Action</th>
                                </tr>
                            </thead>
                            {
                                userAllData.map(user =>
                                    <tbody>
                                        <tr>
                                            <th colspan="5">{user.name}</th>
                                            <td colspan="2">{user.email}</td>
                                            <td colspan="1">{user.date}</td>
                                            <td colspan="2">{user.title}</td>
                                            <td colspan="1">
                                                <button onClick={() => deleteUser(user._id)}
                                                    className="btn btn-danger">
                                                    <FontAwesomeIcon className="text-center text-light" icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Admin;