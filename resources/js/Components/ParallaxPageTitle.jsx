import React from 'react';
import {Link} from "@inertiajs/react";

const ParallaxPageTitle = ({image, title, overlay = false}) => {
	return (
		<div className={`breadcrumb-wrapper z-index-common overflow-hidden`}>
			
			<div className="breadcrumb-wrapper__bg wow relative" data-animate="fadeInUp" data-wow-delay="0.15s" data-vs-gsap-parallax-speed="2" data-vs-gsap-parallax-zoom>
				<img src={image} alt={title}/>
				{overlay && (
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0"
						style={{ background: 'rgba(0,0,0,0.6)' }}
					/>
				)}
			</div>
			
			<div className="container">
				<div className="breadcrumb-wrapper__content wow" data-animate="fadeInUp" data-wow-delay="0.45s">
					<h1 className="breadcrumb-wrapper__title">{title}</h1>
				</div>
			</div>
			
		</div>
	);
};

export default ParallaxPageTitle;
