import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Contact from "../component/Contact";
import { Context } from '../store/appContext'

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-3 container">
			<div className="container border border-light rounded-4 mt-2 p-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#DDD9F0", height: "100px" }}>
				<div className="d-flex align-items-center justify-content-between w-100 p-1 p-sm-2" style={{ backgroundColor: "#B8AEF1", borderRadius: "10px" }}>
					<div className="fs-1 text-center text-sm-start ">My Contacts</div>
					<Link to="/new-contact" className="ms-3">
						<button className="btn btn-primary text-nowrap me-2 ">Add Contact</button>
					</Link>
				</div>
			</div>
			<div className="my-5">
			{store.contactList.map((contact, index) => {
                    return (
                        <Contact key={index} name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} index={index} />
                    );
                })}
			</div>
		</div>
	);
}

export default Home;