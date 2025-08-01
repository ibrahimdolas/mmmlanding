import React from 'react';

import Star from "../../_src/img/hero/h1-ele-1-1.svg"
import Banner11 from "../../_src/img/hero/banner-1-1.jpg"
import Banner12 from "../../_src/img/hero/banner-1-2.jpg"
import HeroShape1 from "../../_src/img/hero/hero-shape-1.svg"
import StarIcon from "../../_src/img/icons/hero-star-icon.svg"
import HeroCharacter1 from "../../_src/img/hero/hero-character-1.png"
import {Link} from "@inertiajs/react";
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import {Navigation, Pagination, EffectFade} from "swiper/modules";

const Slider = () => {
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
					<SwiperSlide className="swiper-slide">
						<div className="vs-hero__bg vs-hero__bg--zoom" style={{backgroundImage: `url(${Banner11})`}}/>
						<div className="container container--custom">
							<div className="vs-hero__content">
								<div className="vs-hero__shape">
									<div className="vs-hero__shape--bg vs-hero__anim" style={{backgroundImage: `url(${HeroShape1})`}}/>
									<span className="vs-hero__title--sub vs-hero__anim">
										<img src={StarIcon} alt="Star Icon"/>
										fun happens!
									</span>
									<h1 className="vs-hero__title--main vs-hero__main">
										The kids Center <span>Education</span>
									</h1>
									<p className="vs-hero__desc vs-hero__anim">
										work and play come together?
									</p>
									<Link to="/contact" className="vs-btn vs-hero__btn vs-hero__anim">
										<span className="vs-btn__border"/>
										Know more
									</Link>
									<img src={HeroCharacter1} alt="Hero Character 1" className="vs-hero__character vs-hero__anim"/>
								</div>
							</div>
						</div>
					</SwiperSlide>
					
					<SwiperSlide className="swiper-slide">
						<div className="vs-hero__bg vs-hero__bg--zoom" style={{backgroundImage: `url(${Banner12})`}}/>
						<div className="container container--custom">
							<div className="vs-hero__content">
								<div className="vs-hero__shape">
									<div className="vs-hero__shape--bg vs-hero__anim" style={{backgroundImage: `url(${HeroShape1})`}}/>
									<span className="vs-hero__title--sub vs-hero__anim">
										<img src={StarIcon} alt="Star Icon"/>
										fun happens!
									</span>
									<h1 className="vs-hero__title--main vs-hero__anim">
										The kids Center <span>Education</span>
									</h1>
									<p className="vs-hero__desc vs-hero__anim">
										work and play come together?
									</p>
									<Link to="/contact" className="vs-btn vs-hero__btn vs-hero__anim">
										<span className="vs-btn__border"/>
										know more
									</Link>
									<img src={HeroCharacter1} alt="Hero Character 1" className="vs-hero__character vs-hero__anim"/>
								</div>
							</div>
						</div>
					</SwiperSlide>
					
					<div className="vs-hero__direction">
						<div className="vs-swiper-button-next">
							<i className="fa-solid fa-arrow-right"/>
						</div>
						<div className="vs-swiper-button-prev">
							<i className="fa-solid fa-arrow-left"/>
						</div>
					</div>
					
					<div className="vs-balls vs-balls--screen" data-balls-bottom="-6px" data-balls-color="#f6f1e4"/>
				
				
				</Swiper>
			</div>
		</section>
	);
};

export default Slider;
