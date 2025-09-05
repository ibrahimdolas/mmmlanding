import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import {newsPageData} from "@/newsItems.js";
import moment from "moment-timezone";
import 'moment/dist/locale/tr'
import 'moment/dist/locale/it'
import 'moment/dist/locale/ro'

const recent = {
	en: 'Recent News',
	tr: 'Son Haberler',
	it: 'Notizie Recenti',
	ro: 'Știri Recente'
}

const RecentPosts = () => {
	const {locale} = usePage().props
	return (
		<div className="widget">
			<h2 className="wp-block-heading">
				{recent[locale] ?? recent.en}
			</h2>
			<div className="recent-post-wrap">
				{
					newsPageData.news.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5).map(post => (
						<div className="recent-post" key={post.slug}>
							<div className="media-img">
								<Link href={`/news/${post.slug}`}>
									<img src={`/storage/news/${post.slug}/${post.coverPhoto}`} alt={post.title[locale] ?? post.title.en}/>
								</Link>
							</div>
							<div className="media-body">
								<div className="recent-post-meta">
									<a>
										<i className="far fa-calendar-alt"/>
										{moment(post.date).locale(locale).format('Do MMMM YYYY')}
										<img src={`/storage/flags/${post.partner.country}.svg`} className="rounded-circle ms-2" style={{height: '20px', width: '20px'}}/>
									</a>
								</div>
								<h4 className="post-title">
									<Link href={`/news/${post.slug}`}>{post.title[locale] ?? post.title.en}</Link>
								</h4>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default RecentPosts;
