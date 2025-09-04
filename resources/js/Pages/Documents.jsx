import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";

import ParallaxBG from "../../_src/img/bg/breadcrumb-bg-6.jpg"
import Ele1 from "../../_src/img/elements/events-page-ele1.png"
import Ele2 from "../../_src/img/elements/events-page-ele2.png"
import {usePage} from "@inertiajs/react";

const notFound = {
	tr: 'Belge bulunamadı!',
	en: 'No documents found!',
	it: 'Nessun documento trovato!',
	ro: 'Nu s-au găsit documente!'
}

const title = {
	tr: 'Belgeler',
	en: 'Documents',
	it: 'Documenti',
	ro: 'Documente'
}

const Documents = () => {
	
	const {locale} = usePage().props
	
	return (
		<Layout title="Documents">
		
			<ParallaxPageTitle
				title={title[locale] ?? title.en}
				image={ParallaxBG}
			/>
			
			
			<section className="vs-event--page bg-color6 space space-extra-bottom z-index-common overflow-hidden">
			
				<div className="vs-event--ele1">
					<img src={Ele1} alt="Event Element 1"/>
				</div>
				<div className="vs-event--ele2">
					<img src={Ele2} alt="Event Element 2"/>
				</div>
				
				<div className="container">
					<div className="row align-items-center mb-30 wow">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<h2 className="vs-title__main">{notFound[locale] ?? notFound.en}</h2>
							</div>
						</div>
					</div>
				</div>
				
			</section>
			
		</Layout>
	);
};

export default Documents;
