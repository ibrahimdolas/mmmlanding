import React, {useState} from 'react';
import {lang} from "@/commonFunctions.js";
import {Link} from "@inertiajs/react";

const tabs = [
	{
		id: 1,
		title: 'Title 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eu tincidunt efficitur, elit sapien tincidunt elit, quis efficitur ante est a est.',
		list: [
			'List item 1',
			'List item 2'
		],
		path: '/',
		button: 'Watch Cartoons'
	},
	{
		id: 2,
		title: 'Title 2',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eu tincidunt efficitur, elit sapien tincidunt elit, quis efficitur ante est a est.',
		list: [
			'List item 3',
			'List item 4'
		],
		path: '/',
		button: 'Explore'
	},
	{
		id: 3,
		title: 'Title 3',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eu tincidunt efficitur, elit sapien tincidunt elit, quis efficitur ante est a est.',
		list: [
			'List item 5',
			'List item 6'
		],
		path: '/',
		button: 'Contact Us'
	},
]

const AboutRight = () => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<div className="vs-about--right">
			<div className="vs-title title-anime animation-style2">
				<div className="title-anime__wrap">
					<span className="vs-title__sub">{lang("We Are Here")}</span>
					<h2 className="vs-title__main" dangerouslySetInnerHTML={{__html: lang("To Guide Your <span>Kids</span>")}}/>
				</div>
			</div>
			<div className="vs-about--story">
				<div className="vs-about--story__tab mb-30">
					<ul className="nav nav-tabs">
						{
							tabs.map(tab => (
								<div className="nav-item" key={tab.id}>
									<button className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)} tabIndex="-1">
										{tab.title}
									</button>
								</div>
							))
						}
					</ul>
				</div>
				<div className="tab-content">
					<div className="tab-pane fade show active" tabIndex="-1">
						<p className="vs-about__text vs-text">
							{tabs.find(t => t.id === activeTab).text}
						</p>
						{
							tabs.find(t => t.id === activeTab).list &&
							<ul className="vs-list pt-15 mb-35">
								{
									tabs.find(t => t.id === activeTab).list.map((item, index) => (
										<li key={index}>{item}</li>
									))
								}
							</ul>
						}
						<Link to={tabs.find(t => t.id === activeTab).path} className="vs-btn">
							<span className="vs-btn__border"/>
							{tabs.find(t => t.id === activeTab).button}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutRight;
