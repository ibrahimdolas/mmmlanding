import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";

import {aboutPageData} from "@/aboutItems.js";
import AboutTabs from "@/Components/AboutTabs.jsx";
import {usePage} from "@inertiajs/react";

const About = () => {
	const {
		parallaxBg, pageTitle, crumbs, palm, lines, bg, collage, description,
		summary, direct, indirect
	} = aboutPageData
	
	const {locale} = usePage().props
	
	return (
		<Layout title="About">
			
			<ParallaxPageTitle
				image={parallaxBg}
				title={pageTitle[locale] ?? pageTitle.en}
			/>
			
			<section className="vs-about--section pt-30 space space-extra-bottom z-index-common overflow-hidden background-image" style={{backgroundImage: `url(${bg})`}}>
				
				<img src={palm} alt="Palm" className="vs-about--ele1"/>
				<img src={lines} alt="Lines" className="vs-about--ele1h3"/>
				
				<div className="container">
					
					
					{/*<div className="row">*/}
					{/*	*/}
					{/*	{*/}
					{/*		cards.map(card => (*/}
					{/*			<div className="col-lg-4 wow" data-animate="fadeInUp" data-wow-delay={card.delay} key={card.id}>*/}
					{/*				<div className={`vs-feature bg-color${card.color} mb-30`}>*/}
					{/*					<div className="vs-feature__top">*/}
					{/*						<svg width="51" height="25" viewBox="0 0 51 25" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
					{/*							<path fillRule="evenodd" clipRule="evenodd" d="M1.22334 5.96216C-2.80791 4.16304 4.56635 -0.155225 6.66735 0.0125662C9.56929 0.24275 11.4149 2.05692 10.614 6.14164C10.1961 8.27957 12.3436 11.0964 13.9067 13.1524C16.2476 16.2384 19.165 18.8641 21.6955 21.8096C23.4947 23.9047 27.5419 23.8813 29.465 21.7121C32.5719 18.2125 35.8918 14.8964 38.8788 11.2991L38.8865 11.303C39.6488 10.2066 39.8693 8.81775 39.4902 7.53425C38.4145 5.09589 39.3044 3.93324 41.4905 2.96964C45.53 1.19454 48.7956 1.59245 49.7436 4.22198C50.7263 6.94908 49.1322 8.40037 46.7024 9.2665C40.0821 11.623 33.5052 22.32 34.6341 23.2657C35.464 23.9609 38.0209 24.2114 38.1012 24.2513C29.5541 24.2114 19.5821 24.2253 13.9857 24.2513C13.9145 24.2516 17.1281 23.5893 18.265 23.4549C21.4636 23.0766 8.86433 9.37229 1.22334 5.96216Z" fill={card.fill} />*/}
					{/*						</svg>*/}
					{/*					</div>*/}
					{/*					<div className="vs-feature__icon">*/}
					{/*						<img src={card.icon} alt={`About Icon ${card.id}`}/>*/}
					{/*					</div>*/}
					{/*					<div className="vs-feature__content">*/}
					{/*						<h3 className="vs-feature__title">{card.title}</h3>*/}
					{/*						<p className="vs-feature__text">{card.description}</p>*/}
					{/*					</div>*/}
					{/*				</div>*/}
					{/*			</div>*/}
					{/*		))*/}
					{/*	}*/}
					{/*	*/}
					{/*</div>*/}
					
					
					<div className="row align-items-center pt-30 gx-50">
						<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
							<div className="vs-about--image style2">
								<img src={collage} alt="About The Project"/>
							</div>
						</div>
						<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
							<AboutTabs/>
						</div>
						
						<div className="col-12 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{description.title[locale] ?? description.title.en}</h2>
								</div>
							</div>
							{
								description.paragraphs.map((paragraph, index) => (
									<p className="vs-about__text vs-text text-start" key={index} dangerouslySetInnerHTML={{__html: paragraph[locale] ?? paragraph.en}}/>
								))
							}
							<ul className="vs-list pt-15 mb-35">
								{
									description.list.map((item, index) => (
										<li key={index} className="fw-normal text-start">
											<strong>{item.title[locale] ?? item.title.en}:</strong> <span dangerouslySetInnerHTML={{__html: item.cont[locale] ?? item.cont.en}}/>
										</li>
									))
								}
							</ul>
							{
								description.footerParagraphs.map((paragraph, index) => (
									<p className="vs-about__text vs-text text-start" key={index} dangerouslySetInnerHTML={{__html: paragraph[locale] ?? paragraph.en}}/>
								))
							}
						</div>
						
						<div className="col-12 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{summary.title[locale] ?? summary.title.en}</h2>
								</div>
							</div>
							{
								summary.paragraphs.map((paragraph, index) => (
									<p className="vs-about__text vs-text text-start" key={index} dangerouslySetInnerHTML={{__html: paragraph[locale] ?? paragraph.en}}/>
								))
							}
						</div>
						
						
						<div className="col-12 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{direct.title[locale] ?? direct.title.en}</h2>
								</div>
							</div>
							<ul className="vs-list pt-15 mb-35">
								{
									direct.list.map((item, index) => (
										<li key={index} className="fw-normal text-start">
											<strong>{item.title[locale] ?? item.title.en}:</strong> <span dangerouslySetInnerHTML={{__html: item.cont[locale] ?? item.cont.en}}/>
										</li>
									))
								}
							</ul>
						</div>
						
						<div className="col-12 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{indirect.title[locale] ?? indirect.title.en}</h2>
								</div>
							</div>
							<ul className="vs-list pt-15 mb-35">
								{
									indirect.list.map((item, index) => (
										<li key={index} className="fw-normal text-start">
											<strong>{item.title[locale] ?? item.title.en}:</strong> <span dangerouslySetInnerHTML={{__html: item.cont[locale] ?? item.cont.en}}/>
										</li>
									))
								}
							</ul>
						</div>
						
					</div>
					
					
				</div>
			
			</section>
			
		</Layout>
	);
};

export default About;
