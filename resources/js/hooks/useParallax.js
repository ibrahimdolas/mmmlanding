import {useEffect} from "react";
import gsap from "gsap";
import {Power2} from "gsap/gsap-core";

const applyParallaxEffect = (event, container, target, intensity) => {
	const rect = container.getBoundingClientRect()
	const relX = event.clientX - rect.left
	const relY = event.clientY - rect.top
	
	const moveX = ((relX - rect.width / 2) / rect.width) * intensity
	const moveY = ((relY - rect.height / 2) / rect.height) * intensity
	
	gsap.to(target, {
		duration: 0.3,
		x: moveX,
		y: moveY,
		ease: Power2.easeOut
	})
}


const parallaxEffect = () => {
	document.querySelectorAll('.parallax-wrap').forEach(wrap => {
		wrap.addEventListener('mousemove', (e) => {
			const elements = wrap.querySelectorAll('.parallax-element')
			elements.forEach(el => {
					const move = parseFloat(el.dataset.move) || 20
					applyParallaxEffect(e, wrap, el, move)
				}
			)
		})
		
		wrap.addEventListener('mouseleave', () => {
			const elements = wrap.querySelectorAll('.parallax-element')
			elements.forEach(el => {
				gsap.to(el, {
					duration: 0.3,
					x: 0,
					y: 0,
					ease: Power2.easeOut
				})
			})
		})
	})
}

const parallaxZoom = () => {
	gsap.utils.toArray('[data-vs-gsap-parallax-speed]').forEach(container => {
		const img = container.querySelector('img')
		const speed = parseFloat(container.getAttribute('data-vs-gsap-parallax-speed')) || 1
		const zoomEnabled = container.hasAttribute('data-vs-gsap-parallax-zoom')
		
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false
			}
		})
		
		const fromVars = {
			yPercent: -10 * speed,
			ease: 'none'
		}
		
		const toVars = {
			yPercent: 10 * speed,
			ease: 'none'
		}
		
		if (zoomEnabled) {
			fromVars.scale = 1,
				toVars.scale = 1.2
		}
		
		tl.fromTo(img, fromVars, toVars)
	})
}

export default function useParallax() {
	useEffect(() => {
		parallaxEffect()
		parallaxZoom()
	}, []);
}