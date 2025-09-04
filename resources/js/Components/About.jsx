import React, {useState} from 'react';
import {aboutPageData} from "@/aboutItems.js";
import {Link} from "@inertiajs/react";
import AboutTabs from "@/Components/AboutTabs.jsx";

const About = () => {
	return (
		<section className="vs-about--section space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${aboutPageData.bg})`}}>
			<img src={aboutPageData.palm} alt="Palm" className="vs-about--ele1 wow" data-animate="fadeInUp" data-wow-delay="0.35s"/>
			<div className="container">
				<div className="row align-items-center">
					
					<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
						<div className="vs-about--image">
							<div className="vs-about--image__figure1 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
								<img src={aboutPageData.topLeft} alt="Top Left Image" width="198" height="214" loading="lazy"/>
							</div>
							<div className="vs-about--image__figure2 wow" data-animate="fadeInUp" data-wow-delay="0.35s">
								<img src={aboutPageData.bottomRight} alt="Bottom Right Image" width="400" height="461" loading="lazy"/>
							</div>
							<div className="vs-about--image__ele1 parallax-element" data-move="80">
								<img src={aboutPageData.plane} alt="Plane"/>
							</div>
							<div className="vs-about--image__ele2 parallax-element" data-move="50">
								<img src={aboutPageData.balloons} alt="Balloons"/>
							</div>
							<div className="vs-about--image__ele3 wow" data-animate="zoomIn" data-wow-delay="0.55s"/>
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
					
					<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
						<AboutTabs/>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default About;
