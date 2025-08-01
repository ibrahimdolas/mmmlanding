import React from 'react';

import AboutBG from "../../_src/img/aboutElements/bg.png"
import Palm from "../../_src/img/aboutElements/palm.png"
import TopLeft from "../../_src/img/aboutElements/image-top-left.jpg"
import BottomRight from "../../_src/img/aboutElements/image-bottom-right.jpg"
import Plane from "../../_src/img/aboutElements/plane.svg"
import Balloons from "../../_src/img/aboutElements/balloons.svg"

const About = () => {
	return (
		<section className="vs-about--section space space-extra-bottom z-index-common parallax-wrap overflow-hidden" style={{backgroundImage: `url(${AboutBG})`}}>
			<img src={Palm} alt="Palm" className="vs-about--ele1 wow animate__fadeInUp" data-wow-delay="0.35s"/>
			<div className="container">
				<div className="row align-items-center">
					
					<div className="col-lg-6 mb-30 wow animate__fadeInUp" data-wow-delay="0.25s">
						<div className="vs-about--image">
							<div className="vs-about--image__figure1 wow animate__fadeInUp" data-wow-delay="0.25s">
								<img src={TopLeft} alt="Top Left Image" width="198" height="214" loading="lazy"/>
							</div>
							<div className="vs-about--image__figure2 wow animate__fadeInUp" data-wow-delay="0.35s">
								<img src={BottomRight} alt="Bottom Right Image" width="400" height="461" loading="lazy"/>
							</div>
							<div className="vs-about--image__ele1 parallax-element" data-move="80">
								<img src={Plane} alt="Plane"/>
							</div>
							<div className="vs-about--image__ele2 parallax-element" data-move="50">
								<img src={Balloons} alt="Balloons"/>
							</div>
							<div className="vs-about--image__ele3 wow animate__zoomIn" data-wow-delay="0.55s"/>
							<div className="vs-about--yoe">
								<span className="vs-about--yoe__number">
									21+
								</span>
								<span className="vs-about--yoe__text">
									years of experience
								</span>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 mb-30 wow animate__fadeInUp" data-wow-delay="0.45s">
						<div className="vs-about--right">
							<div className="vs-title title-anime animation-style2">
								<div className="title-anime__wrap">
									<span className="vs-title__sub">School Facilities</span>
									<h2 className="vs-title__main">
										Learning <span>Opportunity</span> For Kids
									</h2>
								</div>
							</div>
							<div className="vs-about--story">
								<div className="vs-about--story__tab mb-30">
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item" role="presentation">
											<button className="nav-link active" id="history-tab" data-bs-toggle="tab" data-bs-target="#history-tab-pane" type="button" role="tab" aria-controls="history-tab-pane" aria-selected="true" tabIndex="-1">
												our history
											</button>
										</li>
										<li className="nav-item" role="presentation">
											<button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="false" tabIndex="-1">
												home
											</button>
										</li>
										<li className="nav-item"></li>
									</ul>
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
