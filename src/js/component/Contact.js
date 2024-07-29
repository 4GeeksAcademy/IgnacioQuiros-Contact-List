import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Contact = ({ name, address, phone, email, index }) => {
    const { actions } = useContext(Context);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDelete = () => {
        console.log("Deleting contact at index: ", selectedIndex);
        actions.deleteContact(selectedIndex);
    };

    return (
        <div >
            <div className="mt-5 p-1 pb-4 container border border-light rounded-4" style={{ backgroundColor: "#DDD9F0" }}>
                <div className="mt-3 p-1 d-flex align-items-center justify-content-between border border-light rounded-4 mx-3 row" style={{ backgroundColor: "#B8AEF1" }}>
                    <div className="justify-content-center pb-3 col-12 col-sm-2">
                        <img
                            className="rounded-circle border border-5"
                            src="https://www.biowars.com/wp-content/uploads/2023/03/how-to-draw-a-face-final.jpg.webp"
                            style={{ height: "125px", width: "125px", objectFit: "cover" }}
                            alt="Circular"
                        />
                    </div>
                    <div className="text-start ms-0 ms-sm-5 col-12 col-sm-6 fs-5">
                        <b> Name: </b>{name} <br />
                        <b> Address: </b>{address} <br />
                        <b> Phone: </b>{phone} <br />
                        <b> Email: </b>{email}
                    </div>
                    <div className="d-flex justify-content-center col-sm-2 col-12 my-3 my-sm-0 me-2">
                        <Link to={`/edit-contact/${index}`}>
                            <button className="btn btn-warning me-2">
                                <i className="fas fa-wrench"></i>
                            </button>
                        </Link>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteModal-${index}`} onClick={() => setSelectedIndex(index)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        <div className="modal fade" id={`deleteModal-${index}`} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Contact</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Are you sure about that?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Go back</button>
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>Yes, Delete it</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
