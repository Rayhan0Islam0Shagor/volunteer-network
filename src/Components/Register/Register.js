import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../logos/Group 1329.png'
import { useContext } from 'react';
import { UserContext } from '../../App';
import tasks from '../FakeData/FakeData'


const Register = () => {

    const { id } = useParams();
    const library = tasks.find(task => task.id === Number(id));

    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const [input, setInput] = useState({
        date: '',
        description: ''
    })

    const handleSubmit = (e) => {
        console.log('form submitted');
        const userAllInfo = { ...loggedInUser }
        userAllInfo.date = input.date;
        userAllInfo.description = input.description;
        userAllInfo.category = library.title;

        setLoggedInUser(userAllInfo);
        e.preventDefault();
    }

    const handleBlur = (e) => {
        const inputValue = { ...input }
        if (e.target.name === 'description') {
            inputValue.description = e.target.value
        }
        if (e.target.name === 'date') {
            inputValue.date = e.target.value
        }
        setInput(inputValue);
    }

    console.log(loggedInUser);
    return (
        <div>
            <div className='pb-5'>
                <div className="text-center pt-4">
                    <Link to='/home'>
                        <img className="ml-4" height="50px" width="200px" src={logo} alt="" />
                    </Link>
                </div>
                <div style={{ height: "500px", border: '1px solid gray', borderRadius: "10px", padding: "50px" }}
                    className="container text-center align-items-center w-50 mt-5"
                >
                    <form onSubmit={handleSubmit}>
                        <input className="form-control font-weight-bold" type="text" value={loggedInUser.name} placeholder="Full Name" />
                        <br />
                        <input className="form-control font-weight-bold" type="text" value={loggedInUser.email} placeholder="Username or Email" />
                        <br />
                        <input onBlur={handleBlur} required className="form-control" name="date" type="date" placeholder="Date" />
                        <br />
                        <textarea onBlur={handleBlur} className="form-control" type="text" placeholder="Description" name="description" ></textarea>
                        <br />
                        <input className="form-control font-weight-bold" type="text" value={library.title} placeholder="Organize books at the library" />
                        <br />
                        <br />
                        <input type="submit" name="submit" value="Registration" className="btn btn-primary w-100" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;