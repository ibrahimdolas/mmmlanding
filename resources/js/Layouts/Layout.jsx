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
import {CookieConsent} from "react-cookie-consent";



const titleTranslation = {
	About: {
		en: 'About The Project',
		tr: 'Proje Hakkında',
		it: 'Informazioni sul progetto',
		ro: 'Despre Proiectul'
	},
	Partners: {
		tr: 'Ortaklar',
		it: 'Partner',
		ro: 'Parteneri',
		en: 'Partners'
	},
	"Work Packages": {
		tr: 'İş Paketleri',
		en: 'Work Packages',
		it: 'Pakchetti di lavoro',
		ro: 'Pachete de lucru'
	},
	News: {
		tr: 'Haberler',
		en: 'News',
		it: 'Notizie',
		ro: 'Ştiri'
	},
	Results: {
		tr: 'Sonuçlar',
		en: 'Results',
		it: 'Risultati',
		ro: 'Rezultate'
	},
	Documents: {
		tr: 'Belgeler',
		en: 'Documents',
		it: 'Documenti',
		ro: 'Documente'
	},
	Contact: {
		en: 'Contact Us',
		tr: 'Bize Ulaşın',
		it: 'Contattaci',
		ro: 'Contact'
	},
	Privacy: {
		en: 'Privacy Policy',
		tr: 'Gizlilik Politikası',
		it: 'Politica Sulla Riservatezza',
		ro: 'Politica de Confidențialitate'
	},
	Terms: {
		en: 'Terms & Conditions',
		tr: 'Kullanım Şartları',
		it: 'Termini e Condizioni',
		ro: 'Termeni și condiții'
	}
}


const cookieTexts = {
	button: {
		en: 'Understood!',
		tr: 'Anladım!',
		it: 'Capito!',
		ro: 'Am capit!'
	},
	text: {
		en: 'We use tools such as cookies to collect data about our website and services and how visitors interact with our website and services.',
		tr: 'Sitemizde temel hizmetler ve işlevleri sağlamak ve ziyaretçilerin sitemiz ve hizmetlerimizle nasıl etkileşimde bulunduğuna dair verileri toplamak için tanımlama dosyaları gibi araçlar (Örneğin; çerezler gibi) kullanmaktayız.',
		it: 'Utilizziamo strumenti come i cookie per raccogliere dati sul nostro sito web e sui nostri servizi e su come i visitatori interagiscono con essi.',
		ro: 'Folosim instrumente precum cookie-urile pentru a colecta date despre site-ul și serviciile noastre și despre modul în care vizitatorii interacționează cu site-ul și serviciile noastre.',
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
			
			
			<CookieConsent
				buttonText={cookieTexts.button[locale] ?? cookieTexts.button.en}
				cookieName="mmm_cookie_consent_cookie"
				debug={false}
				style={{
					background: "rgb(91, 90, 123)",
					color: "#fff",
					fontSize: "14px",
					fontFamily: "sofia-pro, sans-serif",
					fontWeight: "500",
					textAlign: "center",
					padding: "5px 50px",
					position: "fixed",
					bottom: "0",
					left: "0",
					right: "0",
				}}
			>
				{cookieTexts.text[locale] ?? cookieTexts.text.en}
			</CookieConsent>
			
			
		</>
	);
};

export default Layout;
