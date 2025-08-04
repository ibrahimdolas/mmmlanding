import {useEffect} from "react";
import gsap from "gsap";

export default function useHoverEffect() {
	useEffect(() => {
		const wrappers = document.querySelectorAll('.vs-image-effect')
		
		wrappers.forEach(wrapper => {
			const image = wrapper.querySelector('.vs-image-effect__image');
			const overlay = wrapper.querySelector('.vs-image-effect__overlay');
			
			const onEnter = () => {
				gsap.to(image, {
					scale: 1.1,
					rotateX: 8,
					rotateY: -5,
					duration: 0.6,
					ease: "power3.inOut"
				});
				
				gsap.to(overlay, {
					opacity: 0.8,
					scale: 1.1,
					xPercent: 0,
					yPercent: 0,
					filter: "blur(3px)",
					duration: 0.6,
					ease: "power2.out"
				});
			};
			
			const onLeave = () => {
				gsap.to(image, {
					scale: 1,
					rotateX: 0,
					rotateY: 0,
					duration: 0.7,
					ease: "power3.inOut",
				});
				
				gsap.to(overlay, {
					opacity: 0,
					scale: 1,
					xPercent: 0,
					yPercent: 0,
					filter: "blur(3px)",
					duration: 0.6,
					ease: "power3.inOut"
				});
			};
			
			wrapper.addEventListener('mouseenter', onEnter);
			wrapper.addEventListener('mouseleave', onLeave);
			
			// Temizlik
			return () => {
				wrapper.removeEventListener('mouseenter', onEnter);
				wrapper.removeEventListener('mouseleave', onLeave);
			};
		});
	}, []);
}