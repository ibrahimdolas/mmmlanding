import React from 'react';
import {lang} from "@/commonFunctions.js";
import GuideSet from "@/Components/Home/Guide/GuideSet.jsx";


import BG from "../../../../_src/img/guideElements/bg.png"
import Icon1 from "../../../../_src/img/guideElements/icon1.svg"
import Icon2 from "../../../../_src/img/guideElements/icon2.svg"
import Icon3 from "../../../../_src/img/guideElements/icon3.svg"
import Icon4 from "../../../../_src/img/guideElements/icon4.svg"
import Image from "../../../../_src/img/guideElements/image.png"


const GuideBase = () => {
	return (
		<section className="vs-featureh3--area space space-extra-bottom overflow-hidden background-image" style={{backgroundImage: `url(${BG})`}}>
			
			<div className="container">
				
				<div className="row">
					<div className="col-lg-7 mx-auto">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub">
									{lang("It's Simple!")}
								</span>
								<h2 className="vs-title__main">
									And It's Fun!
								</h2>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className="row align-items-center">
					
					<div className="col-lg-4 order-2 order-lg-0">
						<GuideSet
							delay="0.25s"
							title="Watch Cartoons"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi."
							icon={Icon1}
						/>
						<GuideSet
							delay="0.35s"
							title="Learn Math With Fun"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi."
							icon={Icon2}
						/>
					</div>
					<div className="col-lg-4 order-0 order-lg-1">
						<div className="vs-featureh3__image wow" data-animate="fadeInUp" data-wow-delay="0.45s">
							<img src={Image} alt="Guide Image"/>
						</div>
					</div>
					<div className="col-lg-4 order-3">
						<GuideSet
							delay="0.55s"
							title="Embark on an Adventure"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi."
							icon={Icon3}
							right={true}
						/>
						<GuideSet
							delay="0.65s"
							title="Have Fun"
							text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi."
							icon={Icon4}
							right={true}
						/>
					</div>
					
				</div>
				
			</div>
		
		</section>
	);
};

export default GuideBase;
