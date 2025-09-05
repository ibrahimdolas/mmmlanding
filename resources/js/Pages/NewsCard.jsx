import React from 'react';
import BlogDivider from "../../_src/img/elements/vs-blog-ele1.svg";
import {Link, usePage} from "@inertiajs/react";
import moment from "moment-timezone";
import 'moment/dist/locale/tr'
import 'moment/dist/locale/it'
import 'moment/dist/locale/ro'


const readMore = {
	en: 'Read More',
	tr: 'Devamını Oku',
	it: 'Per Saperne di Più',
	ro: 'Citeşte Mai Mult'
}

const NewsCard = ({slug, coverPhoto, title, partner, content, date, page = false}) => {
	const {locale} = usePage().props
	return (
		<div className={`vs-blog ${page ? '' : 'vs-blog--single'}`}>
			
			{page && <img src={BlogDivider} alt="Blog Divider" className="vs-blog__ele1"/>}
			
			<div className="vs-blog__img--figure">
				<Link href={`/news/${slug}`} className="vs-blog__img--link">
					<img
						src={`/storage/news/${slug}/${coverPhoto}`}
						alt={title[locale] ?? title.en}
						className="vs-blog__img"
					/>
				</Link>
			</div>
			<div className="vs-blog__content">
				<div className="vs-blog__meta">
					<span className="vs-blog__meta--link">
						<img src={`/storage/flags/${partner.country}.svg`} style={{height: '25px', width: '25px'}} className="rounded-circle" alt={partner.name}/>
						{partner.name}
					</span>
					<span className="vs-blog__meta--link">
						<i className="fa-regular fa-calendar-days"/>
						{moment(date).locale(locale).format('Do MMMM YYYY')}
					</span>
				</div>
				<Link href={`/news/${slug}`} className="vs-blog__heading--link">
					<h3 className="vs-blog__heading">{title[locale] ?? title.en}</h3>
				</Link>
				{
					content.paragraphs.map((para, index) => {
						if (!page || index === 0) {
							return <p className="vs-blog__desc" key={index}>
								{para[locale] ?? para.en}
							</p>
						}
					})
				}
				
				{
					page &&
					<Link href={`/news/${slug}`} className="vs-blog__link">
						{readMore[locale] ?? readMore.en}<i className="fa-solid fa-arrow-right"/>
					</Link>
				}
			</div>
			
		</div>
	);
};

export default NewsCard;
