/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // synthetic event. 
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location})
        });

        const json = await response.json()
        // console.log(json) ; 

        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        navigate("/login");
    };

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={credentials.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name='email'
                            value={credentials.email}
                            onChange={onChange}
                        />
                        <div id="emailHelp" className="form-text">
                            We will never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name='password'
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputAddress1"
                            name='location'
                            value={credentials.location}
                            onChange={onChange}
                        />
                    </div>

                    <button type="submit" className="m-3 btn btn-success">
                        Submit
                    </button>

                    <Link to="/login" className="m-3 btn btn-danger">
                        Already a User
                    </Link>
                </form>
            </div>
        </>
    );
}

export default Signup;
