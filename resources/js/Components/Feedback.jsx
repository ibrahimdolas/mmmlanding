import React from 'react';
import {feedbackPageData} from "@/feedbackItems.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";

const Feedback = () => {
	const stars = [1, 2, 3, 4, 5]
	return (
		<section className="bg-title z-index-common space overflow-hidden">
			
			{/*<img src={feedbackPageData.divider} alt="Section Divider" className="sec-ele1 position-absolute start-0 end-0 bottom-0 z-index-n2"/>*/}
			
			<div className="feedback-image background-image" style={{backgroundImage: `url(${feedbackPageData.feedbackImage})`}}/>
			<div className="feedback-image--right background-image" style={{backgroundImage: `url(${feedbackPageData.bg})`}}/>
			<img className="feedback--ele1 wow animate__fadeInRight" data-wow-delay="0.35s" src={feedbackPageData.cloud} alt="Cloud"/>
			
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-lg-7">
						<div className="feedback-wrapper">
							
							<div className="vs-title vs-title--style2 title-anime animation-style2 text-center text-lg-start">
								<div className="title-anime__wrap">
									<span className="vs-title__sub">{feedbackPageData.topTitle}</span>
									<h2 className="vs-title__main pe-xl-3">
										{feedbackPageData.title.text1} <span>{feedbackPageData.title.span}</span> {feedbackPageData.title.text2}
									</h2>
								</div>
							</div>
							
							<div className="swiper feedback-slider">
								<Swiper
									modules={[EffectFade, Autoplay, Pagination, Navigation]}
									className="swiper-wrapper"
									slidesPerView={1}
									speed={1500}
									spaceBetween={0}
									effect={'fade'}
									fadeEffect={{
										crossFade: true
									}}
									loop={true}
									autoplay={{
										delay: 6000
									}}
									pagination={{
										el: '.vs-feedback-pagination',
										clickable: true,
									}}
									navigation={{
										nextEl: '.vs-swiper-button-next',
										prevEl: '.vs-swiper-button-prev'
									}}
								>
									{
										feedbackPageData.customers.map(customer => (
											<SwiperSlide className="swiper-slide" key={customer.id}>
												
												<div className="feedback-block">
													<div className="feedback-block__image">
														<img src={customer.image} alt={customer.name} width="145" height="145"/>
														<div className="feedback-block__icon--quote">
															<img src={feedbackPageData.quote} alt="Quote"/>
														</div>
													</div>
													<div className="feedback-block__content">
														<h4 className="feedback-block__title">{customer.name}</h4>
														<span className="feedback-block__title--sub">{customer.title}</span>
														<div className="feedback-block__rating">
															{
																stars.map(star => (
																	<i className={`fa-${customer.stars >= star ? 'solid' : 'regular'} fa-star`} key={star}/>
																))
															}
														</div>
														<p className="feedback-block__desc">
															{customer.comment}
														</p>
													</div>
												</div>
												
											</SwiperSlide>
										))
									}
								</Swiper>
								<div className="vs-feedback-pagination"/>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		
			<div className="vs-balls vs-balls--screen" data-balls-top="-6px" data-balls-color="#FFEFE4"/>
			<div className="vs-balls vs-balls--screen" data-balls-bottom="-6px" data-balls-color="#F8F8F8"/>
		</section>
	);
};

export default Feedback;
