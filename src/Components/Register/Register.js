import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import { useContext } from 'react';
import { UserContext } from '../../App';


const Register = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const history = useHistory();
    const { id } = useParams();
    const [eventId, setEventId] = useState();

    useEffect(() => {
        loadData()
    }, [id])

    const loadData = async () => {
        await fetch('https://calm-wildwood-74392.herokuapp.com/register/' + id)
            .then(res => res.json())
            .then(data => setEventId(data))
    }

    const { title, imgURL } = eventId ? eventId[0] : []

    const [input, setInput] = useState({
        date: '',
        description: ''
    })

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

    const handleSubmit = (e) => {
        const userAllInfo = { ...loggedInUser }
        userAllInfo.date = input.date;
        userAllInfo.description = input.description;
        userAllInfo.title = title;
        userAllInfo.taskImg = imgURL;

        setLoggedInUser(userAllInfo);

        fetch('https://calm-wildwood-74392.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userAllInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/socialWork')
                }
            })

        e.preventDefault();
    }



    return (
        <div style={{ backgroundColor: "#e0ece4" }}>
            <div className='pb-5'>
                <div className="text-center pt-4">
                    <Link to='/home'>
                        <img height="50px" width="200px" src={logo} alt="" />
                    </Link>
                </div>
                <div style={{ border: '1px solid gray', borderRadius: "10px", padding: "50px" }}
                    className="container bg-light text-center align-items-center w-50 mt-5">
                    <h2 className="pb-4 font-weight-bold">Register as a Volunteer</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control font-weight-bold" type="text" value={loggedInUser.name} placeholder="Full Name" />
                        <br />
                        <input className="form-control font-weight-bold" type="text" value={loggedInUser.email} placeholder="Username or Email" />
                        <br />
                        <input onBlur={handleBlur} required className="form-control" name="date" type="date" placeholder="Date" />
                        <br />
                        <textarea onBlur={handleBlur} className="form-control" type="text" placeholder="Description" name="description" ></textarea>
                        <br />
                        <input className="form-control font-weight-bold" value={title} type="text" placeholder="Organize books at the library" />
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