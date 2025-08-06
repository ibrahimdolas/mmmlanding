import React, {useEffect} from 'react';
import Loader from "@/Components/Loader.jsx";
import MobileMenu from "@/Components/MobileMenu.jsx";
import Header from "@/Components/Header.jsx";
import {Head, router} from "@inertiajs/react";
import Footer from "@/Components/Footer.jsx";
import BackToTop from "@/Components/BackToTop.jsx";

import useGsapWow from "@/hooks/useGsapWow.js";
import useParallax from "@/hooks/useParallax.js";
import useTitleAnimation from "@/hooks/useTitleAnimation.js";



const Layout = ({title, children}) => {
	
	useGsapWow()
	useParallax()
	// useTitleAnimation()
	
	return (
		<>
			
			<Head title={title}/>
			
			{/*<Loader/>*/}
			<MobileMenu/>
			{/*<Offcanvas/>*/}
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
