import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {resultsPageData} from "@/resultItems.js";
import SingleResult from "@/Components/SingleResult.jsx";
import {usePage} from "@inertiajs/react";

const Results = () => {
	const {locale} = usePage().props
	
	const notFound = {
		tr: 'Sonuç bulunamadı!',
		en: 'No results found!'
	}
	
	return (
		<Layout title="Results">
			
			<ParallaxPageTitle
				title={resultsPageData.parallaxTitle[locale] ?? resultsPageData.parallaxTitle.en}
				image={resultsPageData.bg}
			/>
			
			<section className="vs-room--area space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${resultsPageData.sectionBG})`}}>
				<img src={resultsPageData.element1} className="vs-room__ele1 parallax-element" alt="Result Element 1" data-move="100"/>
				<img src={resultsPageData.element2} className="vs-room__ele2 parallax-element" alt="Result Element 2" data-move="60"/>
				
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

export default Results;
