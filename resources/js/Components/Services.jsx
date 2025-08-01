import React, {useEffect} from 'react';

import ServiceBG from "../../_src/img/serviceElements/bg.png"
import ServiceEle1 from "../../_src/img/serviceElements/hands-left.svg"
import ServiceEle2 from "../../_src/img/serviceElements/hands-right.svg"

import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "@inertiajs/react";
import {Autoplay, Navigation} from "swiper/modules";
import {services} from "@/ServiceItems.js";

const Services = () => {
	
	return (
		<section className="vs-service--area animation-active z-index-common space overflow-hidden" style={{backgroundImage: `url(${ServiceBG})`}}>
			
			<img src={ServiceEle1} alt="Service Ele 1" className="vs-service--ele1 wow animate__fadeInLeft" data-wow-delay="0.25s"/>
			<img src={ServiceEle2} alt="Service Ele 2" className="vs-service--ele2 wow animate__fadeInRight" data-wow-delay="0.45s"/>
			
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub">Choose Us</span>
								<h2 className="vs-title__main">
									Education <span>For Kids</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
				
				<div className="z-index-common">
					<div
						className="row justify-content-center swiper vs-carousel vs-carousel--service z-index-common pl-0"
					>
						<Swiper
							modules={[Navigation, Autoplay]}
							className="swiper-wrapper"
							loop={true}
							autoplay={{
								delay: 6000
							}}
							navigation={{
								nextEl: '.nav-next-2',
								prevEl: '.nav-prev-1'
							}}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10
								},
								576: {
									slidesPerView: 1,
									spaceBetween: 15
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 20
								},
								992: {
									slidesPerView: 3,
									spaceBetween: 24
								}
							}}
							spaceBetween={24}
						>
							
							{
								services.map(service => (
									<SwiperSlide className="col-lg-4 col-md-6 swiper-slide" key={service.id}>
										<div className="vs-service wow animate__fadeInUp" data-wow-delay={service.delay}>
											<div className="vs-service__figure">
												<Link to={service.path} className="vs-service__image--link">
													<img src={service.image} alt={service.title} className="vs-service__image"/>
												</Link>
											</div>
											<div className="vs-service__content">
												<div className="vs-service__header">
													<span className="vs-service__icon">
														<img src={service.icon} alt={service.iconAlt}/>
													</span>
												</div>
												<Link to={service.path} className="vs-service__heading--link">
													<h3 className="vs-service__heading">{service.title}</h3>
												</Link>
												<Link to={service.path} className="vs-service__link">
													<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M1.39045 17.9495L17.6245 3.81022L11.9467 3.41092C11.6162 3.39253 11.307 3.24133 11.0897 2.99157C10.3795 2.16137 11.0268 0.887081 12.116 0.97149L20.7679 1.567C21.4447 1.61318 21.9555 2.20013 21.9077 2.87686L21.3019 11.5281C21.2154 13.1944 18.7024 13.0128 18.8562 11.3514L19.2524 5.64459L3.0003 19.7995C2.48691 20.2625 1.69228 20.2096 1.24372 19.6835C0.800172 19.1667 0.86807 18.3864 1.39045 17.9495Z" fill="currentColor" />
													</svg>
												</Link>
											</div>
										</div>
									</SwiperSlide>
								))
							}
							
						</Swiper>
					</div>
					
					<div className="nav-prev-1" style={{cursor: "pointer"}}>
						<svg width="57" height="20" viewBox="0 0 57 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
							<mask id="mask0_318_7638" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="20">
								<rect width="57" height="20" transform="matrix(-1 0 0 1 57 0)" fill="url(#pattern0_318_7638)" />
							</mask>
							<g mask="url(#mask0_318_7638)">
								<rect width="84" height="42" transform="matrix(-1 0 0 1 70 -14)" fill="currentColor" />
							</g>
							<defs>
								<pattern id="pattern0_318_7638" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlinkHref="#image0_318_7638" transform="scale(0.0175439 0.05)" />
								</pattern>
								<image id="image0_318_7638" width="57" height="20" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
							</defs>
						</svg>
					</div>
					<div className="nav-next-2" style={{cursor: "pointer"}}>
						<svg width="57" height="20" viewBox="0 0 57 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
							<mask id="mask0_318_7635" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="20">
								<rect width="57" height="20" fill="url(#pattern0_318_7635)" />
							</mask>
							<g mask="url(#mask0_318_7635)">
								<rect x="-13" y="-14" width="84" height="42" fill="currentColor" />
							</g>
							<defs>
								<pattern id="pattern0_318_7635" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlinkHref="#image0_318_7635" transform="scale(0.0175439 0.05)" />
								</pattern>
								<image id="image0_318_7635" width="57" height="20" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
							</defs>
						</svg>
					</div>
				</div>
				
			</div>
			
		</section>
	);
};

export default Services;
