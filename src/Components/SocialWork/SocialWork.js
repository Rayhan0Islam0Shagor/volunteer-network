import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const SocialWork = () => {

    const [existingUser, setExistingUser] = useState([])
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    console.log(existingUser);

    useEffect(() => {
        fetch('http://localhost:5000/existingUser?userEmail=' + userInfo.email)
            .then(res => res.json())
            .then(data => setExistingUser(data))
    }, [])

    return (
        <div style={{ backgroundColor: "#ecf4f3", paddingBottom: "200px" }}>
            <Header />
            <div className="container mt-5">
                <div className="row container w-100">
                    {
                        existingUser.map(user =>

                            <div key={Math.random()} className="col-md-6">
                                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4 p-2">
                                            <img src={user.taskImg} className="card-img" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="font-weight-bold card-title">{user.title}</h4>
                                                <b className="card-text">{user.date}</b> <br />
                                                <div className="mt-5">
                                                    <button style={{ backgroundColor: '#dbdbdb' }} className="btn pl-4 pr-4">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SocialWork;