import React from 'react';
import {newsPageData} from "@/newsItems.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "@inertiajs/react";
import moment from "moment-timezone";
import {Autoplay, Navigation} from "swiper/modules";

const News = () => {
	return (
		<section className="space space-extra-bottom z-index-common overflow-hidden background-image" style={{backgroundImage: `url(${newsPageData.bg})`}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub">
									{newsPageData.topTitle}
								</span>
								<h2 className="vs-title__main">
									{newsPageData.title}
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row vs-carousel swiper">
					<Swiper
						className="swiper-wrapper"
						modules={[Navigation, Autoplay]}
						loop={true}
						autoplay={{
							delay: 5000
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
								slidesPerView: 3,
								spaceBetween: 20
							},
						}}
					>
						{
							newsPageData.news.map(news => (
								<SwiperSlide
									className="col-lg-4 swiper-slide wow animate__fadeInUp"
									data-wow-delay={news.delay}
									key={news.id}
								>
									<div className="vs-blog vs-blog--style2">
										<div className="vs-blog__inner">
											<div className="vs-blog__img">
												<Link to={news.button.path}>
													<img src={news.image} alt={news.title} loading="lazy"/>
												</Link>
											</div>
											<div className="vs-blog__content">
												<div className="vs-blog__meta">
													<Link to={news.button.path} className="vs-blog__meta--link">
														<i className="fa-regular fa-calendar-days"/>
														{moment(news.date).format('Do MMM YYYY')}
													</Link>
												</div>
												<Link to={news.button.path} className="vs-blog__heading--link">
													<h3 className="vs-blog__heading">{news.title}</h3>
												</Link>
												<p className="vs-blog__desc">
													{news.description}
												</p>
												<div className="vs-blog__bottom">
													<Link to={news.button.path} className="vs-blog__link">
														{news.button.text} <i className="fa-solid fa-arrow-right"/>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))
						}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default News;
