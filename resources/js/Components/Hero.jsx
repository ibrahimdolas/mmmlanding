import React from 'react';

import Star from "../../_src/img/heroElements/star.svg"

import {Link} from "@inertiajs/react";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectFade} from "swiper/modules";
import {banners} from "@/HeroItems.js";


const Hero = () => {
	return (
		<section className="vs-hero overflow-hidden z-index-common parallax-wrap">
			<div className="vs-hero__ele1">
				<img src={Star} alt="Star"/>
			</div>
			<div className="swiper vs-hero__active--zoom">
				
				<Swiper
					className="swiper-wrapper"
					modules={[Navigation, Pagination, EffectFade]}
					spaceBetween={0}
					slidesPerView={1}
					speed={1500}
					effect="fade"
					fadeEffect={{
						crossFade: true
					}}
					loop={true}
					autoplay={{
						waitForTransition: false
					}}
					navigation={{
						nextEl: '.vs-swiper-button-next',
						prevEl: '.vs-swiper-button-prev'
					}}
					pagination={{
						el: '.vs-hero-pagination',
						clickable: true,
						renderBullet: function (index, className) {
							return `<span class="${className}"><i class="fas fa-star"></i></span>`
						}
					}}
				>
					{
						banners.map(banner => (
							<SwiperSlide
								className="swiper-slide"
								key={banner.id}
							>
								<div className="vs-hero__bg vs-hero__bg--zoom" style={{backgroundImage: `url(${banner.image})`}}/>
								<div className="container container--custom">
									<div className="vs-hero__content">
										<div className="vs-hero__shape">
											<div className="vs-hero__shape--bg vs-hero__anim" style={{backgroundImage: `url(${banner.shape})`}}/>
											<span className="vs-hero__title--sub vs-hero__anim">
												<img src={banner.star} alt="Star Icon"/>
												{banner.starTitle}
											</span>
											<h1 className="vs-hero__title--main vs-hero__main">
												{banner.title} <span>{banner.span}</span>
											</h1>
											<p className="vs-hero__desc vs-hero__anim">
												{banner.subtitle}
											</p>
											<Link to={banner.path} className="vs-btn vs-hero__btn vs-hero__anim">
												<span className="vs-btn__border"/>
												{banner.button}
											</Link>
											<img src={banner.character} alt="Hero Character 1" className="vs-hero__character vs-hero__anim"/>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))
					}
					
					<div className="vs-hero__direction">
						<div className="vs-swiper-button-next" style={{cursor: 'pointer'}}>
							<i className="fa-solid fa-arrow-right"/>
						</div>
						<div className="vs-swiper-button-prev" style={{cursor: 'pointer'}}>
							<i className="fa-solid fa-arrow-left"/>
						</div>
					</div>
					
					<div className="vs-balls vs-balls--screen" data-balls-bottom="-6px" data-balls-color="#f6f1e4"/>
				
				
				</Swiper>
			</div>
		</section>
	);
};

export default Hero;
