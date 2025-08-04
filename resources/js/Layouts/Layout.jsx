import React, {useEffect} from 'react';
import Loader from "@/Components/Loader.jsx";
import MobileMenu from "@/Components/MobileMenu.jsx";
import Offcanvas from "@/Components/Offcanvas.jsx";
import Header from "@/Components/Header.jsx";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer.jsx";
import BackToTop from "@/Components/BackToTop.jsx";

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
			
			<Footer/>
			
			<BackToTop/>
			
		</>
	);
};

export default Layout;
