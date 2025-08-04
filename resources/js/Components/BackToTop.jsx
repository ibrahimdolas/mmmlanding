import React, {useEffect, useRef} from 'react';
import gsap from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const BackToTop = () => {
	
	const backToTopRef = useRef(null);
	const progressCircleRef = useRef(null);
	const percentageRef = useRef(null);
	
	const CIRCLE_RADIUS = 40;
	const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
	
	const throttle = (func, limit) => {
		let lastFunc
		let lastRan
		
		return function (...args) {
			const context = this
			if (!lastRan) {
				func.apply(context, args)
				lastRan = Date.now()
			} else {
				clearTimeout(lastFunc)
				lastFunc = setTimeout(() => {
					if (Date.now() - lastRan >= limit) {
						func.apply(context, args)
						lastRan = Date.now()
					}
				}, limit - (Date.now() - lastRan))
			}
		}
	}
	
	
	const updateProgress = () => {
		const scrollY = window.scrollY
		const totalHeight = document.documentElement.scrollHeight - window.innerHeight
		
		if (totalHeight > 0) {
			const scrollPercentage = (scrollY / totalHeight) * 100
			const offset = CIRCUMFERENCE * (1 - scrollPercentage / 100)
			
			if (progressCircleRef.current) {
				progressCircleRef.current.style.strokeDashoffset = offset.toFixed(2)
			}
			if (percentageRef.current) {
				percentageRef.current.textContent = `${Math.round(scrollPercentage)}%`
			}
			if (backToTopRef.current) {
				backToTopRef.current.classList.toggle('visible', scrollPercentage > 5)
			}
		}
	}
	
	useEffect(() => {
		const circle = progressCircleRef.current
		if (circle) {
			circle.style.strokeDasharray = CIRCUMFERENCE
			circle.style.strokeDashoffset = CIRCUMFERENCE
		}
		
		const throttledScroll = throttle(updateProgress, 50)
		window.addEventListener('scroll', throttledScroll)
		updateProgress()
		
		return () => {
			window.removeEventListener('scroll', throttledScroll)
		}
	}, []);
	
	
	
	const scrollToTop = () => {
		gsap.to(window, {duration: 1, scrollTo: 0})
	}
	
	return (
		<button className="back-to-top" id="backToTop" aria-label="Back To Top" tabIndex="-1" ref={backToTopRef} onClick={scrollToTop}>
			<span className="progress-circle">
				 <svg viewBox="0 0 100 100">
	        <circle className="bg" cx="50" cy="50" r="40"/>
	        <circle className="progress" cx="50" cy="50" r="40" ref={progressCircleRef}/>
	      </svg>
				<span className="progress-percentage" id="progressPercentage" ref={percentageRef}>0%</span>
			</span>
		</button>
	);
};

export default BackToTop;
