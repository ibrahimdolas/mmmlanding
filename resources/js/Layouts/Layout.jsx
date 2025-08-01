import React from 'react';
import Loader from "@/Components/Loader.jsx";
import MobileMenu from "@/Components/MobileMenu.jsx";
import Offcanvas from "@/Components/Offcanvas.jsx";
import Header from "@/Components/Header.jsx";
import {Head} from "@inertiajs/react";

const Layout = ({title, children}) => {
	return (
		<>
			
			<Head title={title}/>
			
			{/*<Loader/>*/}
			<MobileMenu/>
			<Offcanvas/>
			<Header/>
			
			<main className="vs-main">
				{children}
			</main>
			
			
		</>
	);
};

export default Layout;
