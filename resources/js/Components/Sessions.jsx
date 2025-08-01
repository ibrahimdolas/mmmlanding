import React from 'react';
import {sessionPageData} from "@/SessionItems.js";

const Sessions = () => {
	return (
		<section className="vs-session--area space space-extra-bottom bg-theme-color-1 z-index-common overflow-hidden">
			
			<div className="vs-session--bg-image" data-vs-gsap-parallax-speed="5" data-vs-gsap-parallax-zoom>
				<img src={sessionPageData.bg} alt="Sessions Background"/>
			</div>
			<div className="vs-session--ele1" data-vs-gsap-parallax-speed="2" data-vs-gsap-parallax-zoom>
				<img src={sessionPageData.ele1} alt="Sessions Element 1"/>
			</div>
			<div className="vs-session--ele2" data-vs-gsap-parallax-speed="5" data-vs-gsap-parallax-zoom>
				<img src={sessionPageData.ele2} alt="Sessions Element 2"/>
			</div>
			
			<div className="container">
				
				<div className="row justify-content-center">
					<div className="col-lg-7 wow animate__fadeInUp" data-wow-delay="0.15s">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub text-white">{sessionPageData.topTitle}</span>
								<h2 className="vs-title__main text-white px-xl-5">{sessionPageData.title}</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-10">
						<div className="row gx-30">
							{
								sessionPageData.sessions.map(session => (
									<div className="col-lg-6 wow animate__fadeInUp" data-wow-delay={session.delay} key={session.id}>
										<div className="vs-session">
											<img className="vs-session__bg" src={sessionPageData.shape} alt="Session Shape"/>
											<div className="vs-session__content">
												<h3 className="vs-session__title">{session.title}</h3>
												<span className="vs-session__time">{session.subtitle}</span>
											</div>
											<span className="vs-session__icon">
												<img src={session.icon} alt={`Session Icon ${session.id}`}/>
											</span>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
				
			</div>
			
			<div className="vs-balls vs-balls--screen" data-balls-top="-6px" data-balls-color="#ffffff"/>
			<div className="vs-balls vs-balls--screen" data-balls-bottom="-6px" data-balls-color="#ffffff"/>
		
		</section>
	);
};

export default Sessions;
