import React from 'react';
import {lang} from "@/commonFunctions.js";

const GuideSet = ({delay, title, text, icon, right = false}) => {
	return (
		<div className={`vs-featureh3 wow flex-row-reverse text-start ${!right ? 'flex-lg-row text-lg-end' : ''}`} data-animate="fadeInUp" data-wow-delay={delay}>
			<div className="vs-featureh3__content">
				<h3 className="vs-featureh3__heading">{lang(title)}</h3>
				<p className="vs-featureh3__text">{lang(text)}</p>
			</div>
			<div className="vs-featureh3__icon">
				<img src={icon} alt={lang(title)}/>
			</div>
		</div>
	);
};

export default GuideSet;
