import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {newsPageData} from "@/newsItems.js";
import {usePage} from "@inertiajs/react";

import NewsCard from "@/Pages/NewsCard.jsx";
import RecentPosts from "@/Pages/RecentPosts.jsx";

const News = () => {
	const {locale} = usePage().props
	
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
					<div className="row">
						<div className="col-lg-8">
							
							{
								newsPageData.news.sort((a, b) => b.date.localeCompare(a.date)).map(post => (
									<NewsCard {...post} key={post.id} page={true}/>
								))
							}
							
						</div>
						<div className="col-lg-4 d-none d-lg-block">
							<div className="sidebar-area">
								<RecentPosts/>
							</div>
						</div>
					</div>
				</div>
				
			</section>
		
		</Layout>
	);
};

export default News;
