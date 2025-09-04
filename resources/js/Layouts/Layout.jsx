import React, {useEffect} from 'react';
import Loader from "@/Components/Loader.jsx";
import MobileMenu from "@/Components/MobileMenu.jsx";
import Header from "@/Components/Header.jsx";
import {Head, router, usePage} from "@inertiajs/react";
import Footer from "@/Components/Footer.jsx";
import BackToTop from "@/Components/BackToTop.jsx";

import useGsapWow from "@/hooks/useGsapWow.js";
import useParallax from "@/hooks/useParallax.js";
import useTitleAnimation from "@/hooks/useTitleAnimation.js";



const titleTranslation = {
	About: {
		en: 'About The Project',
		tr: 'Proje Hakkında'
	},
	Partners: {
		tr: 'Ortaklar'
	},
	"Work Packages": {
		tr: 'İş Paketleri'
	},
	News: {
		tr: 'Haberler'
	},
	Results: {
		tr: 'Sonuçlar'
	},
	Documents: {
		tr: 'Belgeler'
	},
	Contact: {
		en: 'Contact Us',
		tr: 'Bize Ulaşın'
	},
	Privacy: {
		en: 'Privacy Policy',
		tr: 'Gizlilik Politikası'
	},
	Terms: {
		en: 'Terms and Conditions',
		tr: 'Kullanım Koşulları'
	}
}




const Layout = ({title, children}) => {
	
	useGsapWow()
	useParallax()
	// useTitleAnimation()
	
	const {locale} = usePage().props
	
	return (
		<>
			
			<Head title={titleTranslation[title][locale] ?? titleTranslation[title].en ?? title}/>
			
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
