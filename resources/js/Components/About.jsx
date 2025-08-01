import React, {useState} from 'react';
import {aboutPageData} from "@/aboutItems.js";
import {Link} from "@inertiajs/react";

const About = () => {
	const [activeTab, setActiveTab] = useState('history')
	return (
		<section className="vs-about--section space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${aboutPageData.bg})`}}>
			<img src={aboutPageData.palm} alt="Palm" className="vs-about--ele1 wow animate__fadeInUp" data-wow-delay="0.35s"/>
			<div className="container">
				<div className="row align-items-center">
					
					<div className="col-lg-6 mb-30 wow animate__fadeInUp" data-wow-delay="0.25s">
						<div className="vs-about--image">
							<div className="vs-about--image__figure1 wow animate__fadeInUp" data-wow-delay="0.25s">
								<img src={aboutPageData.topLeft} alt="Top Left Image" width="198" height="214" loading="lazy"/>
							</div>
							<div className="vs-about--image__figure2 wow animate__fadeInUp" data-wow-delay="0.35s">
								<img src={aboutPageData.bottomRight} alt="Bottom Right Image" width="400" height="461" loading="lazy"/>
							</div>
							<div className="vs-about--image__ele1 parallax-element" data-move="80">
								<img src={aboutPageData.plane} alt="Plane"/>
							</div>
							<div className="vs-about--image__ele2 parallax-element" data-move="50">
								<img src={aboutPageData.balloons} alt="Balloons"/>
							</div>
							<div className="vs-about--image__ele3 wow animate__zoomIn" data-wow-delay="0.55s"/>
							<div className="vs-about--yoe">
								<span className="vs-about--yoe__number">
									{aboutPageData.yoe.number}
								</span>
								<span className="vs-about--yoe__text">
									{aboutPageData.yoe.text}
								</span>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 mb-30 wow animate__fadeInUp" data-wow-delay="0.45s">
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
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default About;
