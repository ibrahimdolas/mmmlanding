import React from 'react';
import {Link} from "@inertiajs/react";

const ParallaxPageTitle = ({image, title, crumbs}) => {
	return (
		<div className="breadcrumb-wrapper z-index-common overflow-hidden">
			
			<div className="breadcrumb-wrapper__bg wow" data-animate="fadeInUp" data-wow-delay="0.15s" data-vs-gsap-parallax-speed="2" data-vs-gsap-parallax-zoom>
				<img src={image} alt={title}/>
			</div>
			
			<div className="container">
				<div className="breadcrumb-wrapper__content wow" data-animate="fadeInUp" data-wow-delay="0.45s">
					<h1 className="breadcrumb-wrapper__title">{title}</h1>
					{/*{*/}
					{/*	crumbs.length &&*/}
					{/*	<div className="breadcrumb-wrapper__menu--wrap">*/}
					{/*		<ul className="breadcrumb-wrapper__menu">*/}
					{/*			{*/}
					{/*				crumbs.map((crumb, index) => (*/}
					{/*					<li key={index} className="breadcrumb-wrapper__menu--item">*/}
					{/*						{*/}
					{/*							index < crumbs.length - 1 ?*/}
					{/*								<Link to={crumb.path}>{crumb.title}</Link> :*/}
					{/*								crumb.title*/}
					{/*						}*/}
					{/*					</li>*/}
					{/*				))*/}
					{/*			}*/}
					{/*		</ul>*/}
					{/*	</div>*/}
					{/*}*/}
				</div>
			</div>
			
		</div>
	);
};

export default ParallaxPageTitle;
