import React from 'react';

import BG from "../../../../_src/img/aboutElements/bg.png"
import Palm from "../../../../_src/img/aboutElements/palm.png"
import Plane from "../../../../_src/img/aboutElements/plane.svg"
import Balloons from "../../../../_src/img/aboutElements/balloons.svg"
import Image1 from "../../../../_src/img/aboutElements/image-top-left.jpg"
import Image2 from "../../../../_src/img/aboutElements/image-bottom-right.jpg"
import {partnerPageData} from "@/partnerItems.js";
import {lang} from "@/commonFunctions.js";
import AboutRight from "@/Components/Home/About/AboutRight.jsx";

const AboutBase = () => {
	return (
		<section className="vs-about--section space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${BG})`}}>
		
			<img src={Palm} alt="Palm" className="vs-about--ele1 wow" data-animate="fadeInUp" data-wow-delay="0.35s"/>
			
			<div className="container">
				
				<div className="row align-items-center">
					
					<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
						<div className="vs-about--image">
							<div className="vs-about--image__figure1 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
								<img src={Image1} alt="Top Left Image" width="198" height="214" loading="lazy"/>
							</div>
							<div className="vs-about--image__figure2 wow" data-animate="fadeInUp" data-wow-delay="0.35s">
								<img src={Image2} alt="Bottom Right Image" width="400" height="461" loading="lazy"/>
							</div>
							<div className="vs-about--image__ele1 parallax-element" data-move="80">
								<img src={Plane} alt="Plane"/>
							</div>
							<div className="vs-about--image__ele2 parallax-element" data-move="50">
								<img src={Balloons} alt="Balloons"/>
							</div>
							<div className="vs-about--image__ele3 wow" data-animate="zoomIn" data-wow-delay="0.55s"/>
							<div className="vs-about--yoe">
								<span className="vs-about--yoe__number">
									{partnerPageData.partners.length}
								</span>
								<span className="vs-about--yoe__text">
									{lang("Universities Came Together")}
								</span>
							</div>
						</div>
					</div>
					
					<div className="col-lg-6 mb-30 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
						<AboutRight/>
					</div>
					
				</div>
				
				<div className="vs-balls" data-balls-bottom="-6px" data-balls-color="#25283e"/>
				
			</div>
			
		</section>
	);
};

export default AboutBase;
