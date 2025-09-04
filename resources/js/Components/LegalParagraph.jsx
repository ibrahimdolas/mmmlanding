import React from 'react';
import {usePage} from "@inertiajs/react";

const LegalParagraph = ({paragraph}) => {
	const {title, list, items} = paragraph
	const {locale} = usePage().props
	if (title) {
		return (
			<h6>{paragraph[locale] ?? paragraph.en}</h6>
		)
	} else if (list) {
		return (
			<ul className="vs-list pt-15 mb-35">
				{
					items.map((item, index) => (
						<li key={index} className="fw-normal text-start">{item[locale] ?? item.en}</li>
					))
				}
			</ul>
		)
	} else {
		return (
			<p className="vs-about__text vs-text text-start" dangerouslySetInnerHTML={{__html: paragraph[locale] ?? paragraph.en}}/>
		)
	}
};

export default LegalParagraph;
