import React, {useEffect} from 'react';
import gsap from "gsap";

import Logo from "../../_src/img/logo.svg"

const Loader = () => {
	
	useEffect(() => {
		setTimeout(() => {
			removeLoader()
		}, 2500)
	}, []);
	
	const removeLoader = () => {
		const el = document.getElementById('preloader')
		if (el) {
			gsap.to(el, {
				y: '-100%',
				duration: 1.2,
				ease: 'power3.inOut',
				onComplete: () => {
					el.remove()
				}
			})
		}
	}
	
	return (
		<div className="preloader" id="preloader">
			<div className="preloader-inner">
				<img src={Logo} alt="Math Magic in Motion" height="75"/>
				<span className="loader"/>
			</div>
		</div>
	);
};

export default Loader;
