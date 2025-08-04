import React from 'react';
import {programPageData} from "@/ProgramsItems.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

const Programs = () => {
	return (
		<section className="vs-pro--area position-relative parallax-wrap background-image" style={{backgroundImage: `url(${programPageData.bg})`}}>
			
			<div className="vs-pro--ele1 parallax-element" data-move="200">
				<img src={programPageData.ele1} alt="Programs Element 1"/>
			</div>
			<div className="vs-pro--ele2 parallax-element" data-move="100">
				<img src={programPageData.ele2} alt="Programs Element 2"/>
			</div>
			<div className="vs-pro--ele3 parallax-element" data-move="80">
				<img src={programPageData.ele3} alt="Programs Element 3"/>
			</div>
			
			<div className="vs-pro--ele2"/>
			<div className="vs-pro--ele3"/>
			
			<div className="container">
				
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-auto text-center text-lg-start">
						<div className="vs-title title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub text-white">{programPageData.topTitle}</span>
								<h2 className="vs-title__main text-white">{programPageData.title}</h2>
							</div>
							<p className="text-white fw-bold text-capitalize font-title vs-text-bolder mb-0">{programPageData.subtitle}</p>
						</div>
						<div className="vs-pro--slider__direction justify-content-center justify-content-lg-start mb-md-4">
							<div className="vs-pro--slider__next" style={{cursor: 'pointer'}}>
								<i className="fa-solid fa-arrow-left"/>
							</div>
							<div className="vs-pro--slider__prev" style={{cursor: 'pointer'}}>
								<i className="fa-solid fa-arrow-right"/>
							</div>
						</div>
					</div>
					<div className="col-lg-7 flex-grow-1">
						<div className="swiper vs-carousel">
							<Swiper
								className="swiper-wrapper p-4"
								modules={[Navigation, Autoplay]}
								loop={true}
								autoplay={{
									delay: 3000
								}}
								navigation={{
									nextEl: '.vs-pro--slider__next',
									prevEl: '.vs-pro--slider__prev'
								}}
								breakpoints={{
									320: {
										slidesPerView: 1,
										spaceBetween: 0
									},
									576: {
										slidesPerView: 2,
										spaceBetween: 5
									},
									768: {
										slidesPerView: 3,
										spaceBetween: 15
									},
									992: {
										slidesPerView: 3,
										spaceBetween: 24
									}
								}}
							>
								{
									programPageData.grades.map(grade => (
										<SwiperSlide
											key={grade.id}
											className="swiper-slide wow" data-animate="fadeInUp"
											data-wow-delay={grade.delay}
										>
											<div className="vs-pro">
												<span className={`vs-pro__grade ${grade.ribbon.color}`}>
													{grade.ribbon.top}
													<span>{grade.ribbon.bottom}</span>
												</span>
												<h2 className="vs-pro__title">{grade.title}</h2>
												<span className="vs-pro__age">{grade.subtitle}</span>
											</div>
										</SwiperSlide>
									))
								}
							</Swiper>
						</div>
					</div>
				</div>
				
			</div>
			
		</section>
	);
};

export default Programs;
