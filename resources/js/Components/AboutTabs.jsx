import React, {useState} from 'react';
import {aboutPageData} from "@/aboutItems.js";
import {Link} from "@inertiajs/react";

const AboutTabs = () => {
	const [activeTab, setActiveTab] = useState('history');
	return (
		<div className="vs-about--right">
			<div className="vs-title title-anime animation-style2">
				<div className="title-anime__wrap">
					<span className="vs-title__sub">{aboutPageData.topTitle}</span>
					<h2 className="vs-title__main">
						{aboutPageData.title.text1} <span>{aboutPageData.title.span}</span> {aboutPageData.title.text2}
					</h2>
				</div>
			</div>
			<div className="vs-about--story">
				<div className="vs-about--story__tab mb-30">
					<ul className="nav nav-tabs">
						{
							aboutPageData.tabs.map(tab => (
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
							{aboutPageData.tabs.find(tab => tab.id === activeTab).text}
						</p>
						{
							aboutPageData.tabs.find(tab => tab.id === activeTab).list &&
							<ul className="vs-list pt-15 mb-35">
								{
									aboutPageData.tabs.find(tab => tab.id === activeTab).list.map((item, index) => (
										<li key={index}>{item}</li>
									))
								}
							</ul>
						}
						<Link to={aboutPageData.tabs.find(tab => tab.id === activeTab).button.path} className="vs-btn">
							<span className="bs-btn__border"/>
							{aboutPageData.tabs.find(tab => tab.id === activeTab).button.text}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutTabs;
