import React, {useEffect} from 'react';

import Star from "../../../../_src/img/heroElements/star.svg"
import Shape from "../../../../_src/img/heroElements/shape.svg"
import Character from "../../../../_src/img/heroElements/character.png"
import BG from "../../../../_src/img/heroElements/banner1.jpg"
import StarIcon from "../../../../_src/img/heroElements/star-icon.svg"
import {lang} from "@/commonFunctions.js";
import {Link} from "@inertiajs/react";

const HeroBase = () => {
	
	const applyAnimations = () => {
		const el = document.querySelector('.vs-hero__active--zoom .swiper-slide')
		el.classList.remove('manimated')
		el.style.animationDelay = ''
		
		const animElements = el.querySelectorAll('.vs-hero__anim')
		animElements.forEach((el, index) => {
			const delay = 1.1 + index * 0.2
			el.style.animationDelay = `${delay}s`
			
			void el.offsetWidth
			
			el.classList.add('manimated')
		})
	}
	
	useEffect(() => {
		setTimeout(() => {
			applyAnimations()
		}, 100)
	}, []);
	
	return (
		<section className="vs-hero overflow-hidden z-index-common parallax-wrap">
			<div className="vs-hero__ele1">
				<img src={Star} alt="Star"/>
			</div>
			<div className="swiper vs-hero__active--zoom">
				<div className="swiper-wrapper">
					<div className="swiper-slide swiper-slide-active">
						<div className="vs-hero__bg vs-hero__bg--zoom background-image" style={{backgroundImage: `url(${BG})`}}/>
						<div className="container container--custom">
							<div className="vs-hero__content">
								<div className="vs-hero__shape">
									<div className="vs-hero__shape--bg vs-hero__anim" style={{backgroundImage: `url(${Shape})`}}/>
									<span className="vs-hero__title--sub vs-hero__anim">
										<img src={StarIcon} alt="Star Icon"/>
										{lang("It's Fun!")}
									</span>
									<h1 className="vs-hero__title--main vs-hero__anim">
										Math <span>Magic</span> In Motion
									</h1>
									<p className="vs-hero__desc vs-hero__anim">
										{lang("Learn math while have fun!")}
									</p>
									<Link href="/results" className="vs-btn vs-hero__btn vs-hero__anim">
										<span className="vs-btn__border"/>
										{lang("Watch Now")}
									</Link>
									<img src={Character} alt="Hero Character 1" className="vs-hero__character vs-hero__anim"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="vs-balls vs-balls-screen" data-balls-bottom="-6px" data-balls-color="#f6f1e4"/>
		</section>
	);
};

export default HeroBase;
