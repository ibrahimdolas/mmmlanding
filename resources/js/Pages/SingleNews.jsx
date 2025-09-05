import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {newsPageData} from "@/newsItems.js";
import {usePage} from "@inertiajs/react";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import NewsCard from "@/Pages/NewsCard.jsx";
import RecentPosts from "@/Pages/RecentPosts.jsx";



const photos = {
	en: 'Photos',
	tr: 'Fotoğraflar',
	it: 'Foto',
	ro: 'Fotografii'
}

const SingleNews = ({slug}) => {
	
	const post = newsPageData.news.find(n => n.slug === slug)
	console.log(post)
	if (!post) return
	
	const {locale} = usePage().props
	
	return (
		<Layout title={post.title[locale] ?? post.title.en}>
		
			<ParallaxPageTitle
				title={post.title[locale] ?? post.title.en}
				image={`/storage/news/${post.slug}/${post.parallaxBg}`}
				overlay={true}
			/>
			
			<section className="vs-section space space-extra-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<NewsCard {...post} page={false}/>
						</div>
						<div className="col-lg-4 d-none d-lg-block">
							<div className="sidebar-area">
								<RecentPosts/>
							</div>
						</div>
						
						
						{
							post.content.photos && Array.isArray(post.content.photos) && post.content.photos.length > 0 &&
							<div className="vs-blog vs-blog--single">
								<div className="vs-blog__content">
									<div className="col-12">
										<h4>{photos[locale] ?? photos.en}</h4>
										
										<div className="row">
											{
												post.content.photos.map(photo => (
													<div className="col-lg-6" key={photo}>
														<figure>
															<img src={`/storage/news/${slug}/${photo}`} alt={photo}/>
														</figure>
													</div>
												))
											}
										</div>
									</div>
								</div>
							</div>
						}
						
						
					</div>
				</div>
			</section>
		
		</Layout>
	);
};

export default SingleNews;
