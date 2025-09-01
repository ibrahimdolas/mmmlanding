import React, {useState} from 'react';
import {aboutPageData} from "@/aboutItems.js";
import {Link, usePage} from "@inertiajs/react";

const AboutTabs = () => {
	const [activeTab, setActiveTab] = useState('history');
	
	const {locale} = usePage().props
	
	return (
		<div className="vs-about--right">
			<div className="vs-title title-anime animation-style2">
				<div className="title-anime__wrap">
					<span className="vs-title__sub">{aboutPageData.topTitle}</span>
					<h2 className="vs-title__main" dangerouslySetInnerHTML={{__html: aboutPageData.title[locale]}}/>
				</div>
			</div>
			<div className="vs-about--story">
				<div className="tab-content">
					<div className="tab-pane fade show active" tabIndex="-1">
						{
							aboutPageData.paragraphs.map((paragraph, index) => (
								<p className="vs-about__text vs-text" key={index} dangerouslySetInnerHTML={{__html: paragraph[locale ?? 'en']}}/>
							))
						}
						{/*{*/}
						{/*	aboutPageData.tabs.find(tab => tab.id === activeTab).list &&*/}
						{/*	<ul className="vs-list pt-15 mb-35">*/}
						{/*		{*/}
						{/*			aboutPageData.tabs.find(tab => tab.id === activeTab).list.map((item, index) => (*/}
						{/*				<li key={index}>{item}</li>*/}
						{/*			))*/}
						{/*		}*/}
						{/*	</ul>*/}
						{/*}*/}
						{/*<Link to={aboutPageData.tabs.find(tab => tab.id === activeTab).button.path} className="vs-btn">*/}
						{/*	<span className="bs-btn__border"/>*/}
						{/*	{aboutPageData.tabs.find(tab => tab.id === activeTab).button.text}*/}
						{/*</Link>*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutTabs;
