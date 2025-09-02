import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {newsPageData} from "@/newsItems.js";
import {usePage} from "@inertiajs/react";
import news from "@/Pages/News.jsx";

const News = () => {
	const {locale} = usePage().props
	
	const notFound = {
		tr: 'Haber bulunamadı!',
		en: 'No news found!',
		it: 'Nessuna notiz trovata!',
		ro: 'Nu s-au găsit știri!'
	}
	
	return (
		<Layout title="News">
			
			<ParallaxPageTitle
				title={newsPageData.parallaxTitle[locale] ?? newsPageData.parallaxTitle.en}
				image={newsPageData.bg}
			/>
			
			<section className="vs-room--area space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${newsPageData.sectionBG})`}}>
				<img src={newsPageData.element1} className="vs-room__ele1 parallax-element" alt="News Element 1" data-move="100"/>
				<img src={newsPageData.element2} className="vs-room__ele2 parallax-element" alt="News Element 2" data-move="60"/>
				
				
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

export default News;
