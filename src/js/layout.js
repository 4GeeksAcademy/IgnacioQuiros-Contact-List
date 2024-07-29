import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/Home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import EditContact from "./views/EditContact";
import NewContact from "./views/NewContact";
import injectContext from "./store/appContext";

import  Navbar  from "./component/Navbar";
import  Footer  from "./component/Footer";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/new-contact" element={<NewContact />} />
						<Route path="/edit-contact/:index" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);