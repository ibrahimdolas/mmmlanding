import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {wpPageData} from "@/wpItems.js";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {usePage} from "@inertiajs/react";
import {lang} from "@/commonFunctions.js";

const WorkPackages = () => {
	
	const {
		bg, palm, topLeft, bottomRight, plane, balloons, lines,
		parallaxBg, pageTitle, packages
	} = wpPageData
	
	const expected = {
		en: 'Expected Results:',
		tr: 'Hedeflenen Sonuçlar:',
		it: 'Risultati attesi',
		ro: '',
	}
	
	const {locale} = usePage().props
	
	return (
		<Layout title="Work Packages">
			
			<ParallaxPageTitle
				image={parallaxBg}
				title={pageTitle[locale] ?? pageTitle.en}
			/>
			
			<section className="vs-about--section pt-30 space space-extra-bottom z-index-common overflow-hidden background-image" style={{backgroundImage: `url(${bg})`}}>
				
				<img src={palm} alt="Palm" className="vs-about--ele1"/>
				<img src={lines} alt="Lines" className="vs-about--ele1h3"/>
				
				<div className="container">
					<div className="row align-items-center pt-30 gx-50">
						
						{
							packages.map(pack => (
								<div className="col-12 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.25s" key={pack.id}>
									<div className="vs-title text-center title-anime animation-style2">
										<div className="title-anime__wrap">
											<h2 className="vs-title__main">{pack.title[locale] ?? pack.title.en}</h2>
										</div>
									</div>
									{
										pack.paragraphs.map((paragraph, index) => (
											<p className="vs-about__text vs-text text-start" key={index} dangerouslySetInnerHTML={{__html: paragraph[locale] ?? paragraph.en}}/>
										))
									}
									
									{
										pack.results.length &&
										<>
										<h4 className="vs-about--story__title">{expected[locale] ?? expected.en}</h4>
											<ul className="vs-list pt-15 mb-35">
													{
														pack.results.map((item, index) => (
															<li key={index} className="fw-normal text-start" dangerouslySetInnerHTML={{__html: item[locale] ?? item.en}}/>
														))
													}
												</ul>
										</>
									}
								</div>
							))
						}
						
					</div>
				</div>
				
			</section>
		
		</Layout>
	);
};

export default WorkPackages;
