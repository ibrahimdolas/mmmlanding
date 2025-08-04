import React, {useEffect} from 'react';
import Loader from "@/Components/Loader.jsx";
import MobileMenu from "@/Components/MobileMenu.jsx";
import Header from "@/Components/Header.jsx";
import {Head, router} from "@inertiajs/react";
import Footer from "@/Components/Footer.jsx";
import BackToTop from "@/Components/BackToTop.jsx";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import useGsapWow from "@/hooks/useGsapWow.js";
import useParallax from "@/hooks/useParallax.js";

gsap.registerPlugin(SplitText, ScrollTrigger)

let wowInstance

const Layout = ({title, children}) => {
	
	useGsapWow()
	useParallax()
	
	useEffect(() => {
		const onNavigate = () => {
			requestAnimationFrame(() => {
				setTimeout(() => {
					vsTitleAnimation()
					ScrollTrigger.refresh()
				}, 100)
			})
		}
		
		const unlisten = router.on('navigate', onNavigate)
		return () => unlisten()
	}, []);
	
	useEffect(() => {
		ScrollTrigger.addEventListener('refreshInit', refreshInit)
		ScrollTrigger.addEventListener('refresh', vsTitleAnimation)
		window.addEventListener('resize', resizeTimeout)
		window.addEventListener('DOMContentLoaded', loaded)
		return () => {
			ScrollTrigger.removeEventListener('refreshInit', refreshInit)
			ScrollTrigger.removeEventListener('refresh', vsTitleAnimation)
			window.removeEventListener('resize', resizeTimeout)
			window.removeEventListener('DOMContentLoaded', loaded)
		}
	}, []);
	
	
	let resizeFunc
	const resizeTimeout = () => {
		clearTimeout(resizeFunc)
		resizeFunc = setTimeout(() => {
			ScrollTrigger.refresh()
		}, 200)
	}
	
	const loaded = () => {
		if (window.innerWidth >= 768) {
			vsTitleAnimation()
			ScrollTrigger.refresh()
		}
	}
	
	
	const refreshInit  = () => {
		document.querySelectorAll('.title-anime__wrap').forEach(quote => {
			if (quote.split) quote.split.revert()
		})
	}
	
	const vsTitleAnimation = () => {
		const vsElements = document.querySelectorAll('.title-anime')
		if (!vsElements.length || window.innerWidth < 768) return
		
		vsElements.forEach(container => {
			const quotes = container.querySelectorAll('.title-anime__wrap')
			quotes.forEach(quote => {
				if (quote.animation) {
					quote.animation.scrollTrigger.kill()
					quote.animation.kill()
					quote.split.revert()
				}
				
				const animationClass = container.className.match(/animation-(style\d+)/)
				if (!animationClass || animationClass[1] === 'style4') return
				
				quote.split = new SplitText(quote, {
					type: 'lines,words,chars',
					linesClass: 'split-line',
					charsClass: 'char'
				})
				
				const splitLines = quote.querySelectorAll('.split-line')
				splitLines.forEach(line => {
					line.style.textAlign = ''
				})
				
				const chars = quote.split.chars
				const style = animationClass[1]
				
				const initialStates = {
					style1: { opacity: 0, y: '30vh', rotateX: '-40deg' },
					style2: { opacity: 0, x: '5vw' },
					style3: { opacity: 0 },
					style4: { opacity: 0, skewX: '-30deg', scale: 0.8 },
					style5: { opacity: 0, scale: 0.5 },
					style6: { opacity: 0, y: '-50vh', rotate: '45deg' },
				}
				
				gsap.set(quote, {perspective: 1000})
				gsap.set(chars, initialStates[style])
				
				quote.animation = gsap.to(chars, {
					x: 0,
					y: 0,
					rotateX: 0,
					rotate: 0,
					opacity: 1,
					skewX: 0,
					scale: 1,
					duration: 1,
					ease: 'expo.out',
					stagger: 0.02,
					scrollTrigger: {
						trigger: quote,
						start: 'top 95%',
						end: 'bottom 5%',
						toggleActions: 'restart none restart none',
						markers: false,
						onEnter: () => runAnimationAgain(quote),
						onEnterBack: () => runAnimationAgain(quote),
					}
				});
			})
		})
	}
	
	const runAnimationAgain = (quote) => {
		if (quote.animation) {
			quote.animation.restart()
		}
	}
	
	
	return (
		<>
			
			<Head title={title}/>
			
			{/*<Loader/>*/}
			<MobileMenu/>
			{/*<Offcanvas/>*/}
			<Header/>
			
			<main className="vs-main">
				{children}
			</main>
			
			<Footer/>
			
			<BackToTop/>
			
		</>
	);
};

export default Layout;
