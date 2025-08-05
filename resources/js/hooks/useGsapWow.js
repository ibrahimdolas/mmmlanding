import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapWow() {
	useEffect(() => {
		const elements = document.querySelectorAll(".wow");
		
		elements.forEach((el) => {
			const delay = el.dataset.wowDelay || "0s";
			const animationType = el.dataset.animate || "fadeInUp";
			
			let fromVars = {
				opacity: 0,
				visibility: "hidden",
			};
			
			let toVars = {
				opacity: 1,
				visibility: "visible",
				delay: parseFloat(delay),
				duration: 1.2,
				ease: "power1.out",
			};
			
			switch (animationType) {
				case "fadeInUp":
					fromVars.y = 50;
					toVars.y = 0;
					break;
				case "fadeInDown":
					fromVars.y = -50;
					toVars.y = 0;
					break;
				case "fadeInLeft":
					fromVars.x = -50;
					toVars.x = 0;
					break;
				case "fadeInRight":
					fromVars.x = 50;
					toVars.x = 0;
					break;
				case "zoomIn":
					fromVars.scale = 0.5;
					toVars.scale = 1;
					break;
				case "flipInX":
					fromVars.rotateX = -90;
					toVars.rotateX = 0;
					break;
				case "flipInY":
					fromVars.rotateY = -90;
					toVars.rotateY = 0;
					break;
				default:
					fromVars.y = 50;
					toVars.y = 0;
					break;
			}
			
			// Başlangıç değerlerini uygula
			gsap.set(el, fromVars);
			
			// ScrollTrigger animasyonu tanımla
			gsap.to(el, {
				...toVars,
				scrollTrigger: {
					trigger: el,
					start: "top 99%",
					end: "bottom 1%",
					toggleActions: "play none play none",
				},
			});
		});
	}, []);
}
