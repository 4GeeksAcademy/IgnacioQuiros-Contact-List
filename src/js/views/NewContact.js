import { useState, useContext } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const NewContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.fullName || !contact.email || !contact.phone || !contact.address) {
            alert('Please fill out all fields.');
            return;
        }
        actions.addContact(contact.fullName, contact.phone, contact.email, contact.address);
        navigate('/');
    };

    return (
        <div>
            <div className="my-5">
                <div className="mt-5 p-1 pb-4 container border border-light rounded-4" style={{ backgroundColor: "#DDD9F0" }}>
                    <h1 className='text-center mt-2'>
                        Add New Contact
                    </h1>
                    <div className="mt-3 p-1 d-flex align-items-center justify-content-between border border-light rounded-4 mx-3 row" style={{ backgroundColor: "#B8AEF1" }}>
                        <div className="col-12 col-sm-10 mx-auto">
                            <form className="w-100" onSubmit={handleSubmit}>
                                <div className="my-3 w-100 fs-5">
                                    <label htmlFor="fullName" className="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                        id="fullName" 
                                        placeholder='Your Full Name' 
                                        value={contact.fullName}
                                    />
                                </div>
                                <div className="mb-3 w-100 fs-5">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                        id="email" 
                                        placeholder='Your @ Email ' 
                                        value={contact.email}
                                    />
                                </div>
                                <div className="mb-3 w-100 fs-5">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                        id="phone" 
                                        placeholder='Your Phone Number' 
                                        value={contact.phone}
                                    />
                                </div>
                                <div className="mb-5 w-100 fs-5">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input 
                                        type="text" 
                                        name="address" 
                                        onChange={handleChange} 
                                        className="form-control" 
                                        id="address" 
                                        placeholder='Your Home Address' 
                                        value={contact.address}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary col-12 mt-4 mb-2">Add Contact</button>
                            </form>
                        </div>
                    </div>
                    <div className='mt-4 text-end'>
                        <Link to="/">
                            <a>Or get back to Contacts</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewContact;
