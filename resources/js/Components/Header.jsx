import React, {useEffect, useRef} from 'react';
import {menuItems, socialMediaAccounts} from "@/menuItems.js";
import {Link, usePage} from "@inertiajs/react";

import Logo from "../../_src/img/logo.svg"
import {toggleMobileMenu} from "@/commonFunctions.js";
import Languages from "@/Components/Languages.jsx";

const Header = () => {
	
	const stickyWrapperRef = useRef(null);
	const stickyActiveRef = useRef(null);
	const lastScrollTopRef = useRef(0);
	
	
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			
			const header = stickyActiveRef.current
			const wrapper = stickyWrapperRef.current
			
			if (!header || !wrapper) return
			
			const height = header.offsetHeight
			wrapper.style.minHeight = `${height}px`
			
			if (scrollTop > 800) {
				wrapper.classList.add('will-sticky')
				
				if (scrollTop < lastScrollTopRef.current) {
					header.classList.add('active')
				} else {
					header.classList.remove('active')
				}
			} else {
				wrapper.classList.remove('will-sticky')
				header.classList.remove('active')
				wrapper.style.minHeight = ''
			}
			
			const scrollToTopBtn = document.getElementById('backToTop')
			if (scrollToTopBtn) {
				if (scrollTop > 500) {
					scrollToTopBtn.classList.add('show')
				} else {
					scrollToTopBtn.classList.remove('show')
				}
			}
			
			lastScrollTopRef.current = scrollTop <= 0 ? 0 : scrollTop
		}
		
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, []);
	
	
	useEffect(() => {
		renderAllStrips()
	}, []);
	
	useEffect(() => {
		renderAllStrips()
		window.addEventListener('resize', renderAllStrips)
		return () => {
			window.removeEventListener('resize', renderAllStrips)
		};
	}, []);
	
	
	const renderAllStrips = () => {
		document.querySelectorAll('.vs-balls').forEach(buildBallStrip)
	}
	
	const buildBallStrip = (strip) => {
		const topAttr = strip.dataset.ballsTop
		const bottomAttr = strip.dataset.ballsBottom
		const colorAttr = strip.dataset.ballsColor
		
		strip.style.top = topAttr ?? ''
		strip.style.bottom = topAttr ? '' : (bottomAttr ?? '-8px')
		
		const ballColor = colorAttr || '#ffffff'
		
		strip.innerHTML = ''
		
		const needed = Math.ceil(strip.offsetWidth / 13.9) + 5
		
		for (let i = 0; i < needed; i++) {
			const ball = document.createElement('div')
			ball.className = 'vs-balls__ball'
			ball.style.left = `${i * 13.9}px`
			ball.style.backgroundColor = ballColor
			strip.appendChild(ball)
		}
	}
	
	
	
	
	return (
		<header className="vs-header">
			
			<div className="vs-balls"/>
			
			<div className="vs-header__top">
				<div className="container container--custom">
					<div className="row align-items-center justify-content-between gy-1 text-center text-lg-start">
						<div className="col-lg-auto d-none d-lg-block">
							<div className="social-style">
								<span className="social-style__label">Follow us: </span>
								{/*solve: lang*/}
								{
									socialMediaAccounts.map(account => (
										<a
											key={account.type}
											href={account.url}
											target="_blank"
										>
											<i className={`${account.type === 'x' ? 'fa-brands' : 'fab'} fa-${account.icon}`}/>
										</a>
									))
								}
							</div>
						</div>
						{/*solve: fill with languages*/}
						<div className="col-lg-auto">
							<Languages/>
						</div>
					</div>
				</div>
			</div>
			
			<div className="sticky-wrapper" ref={stickyWrapperRef}>
				<div className="sticky-active" ref={stickyActiveRef}>
					<div className="container container--custom">
						<div className="row justify-content-between align-items-center">
							<div className="col">
								<div className="vs-header__logo">
									<Link href="/">
										<img src={Logo} alt="Math Magic in Motion" className="logo" height="60"/>
									</Link>
								</div>
							</div>
							<div className="col-auto">
								<nav className="main-menu d-none d-lg-block">
									<ul>
										{
											menuItems.map(item => (
												<li key={item.path}>
													<Link href={item.path} className="vs-svg-assets">
														{item.title}
														<svg xmlns="http://www.w3.org/2000/svg" style={{width: 'calc(100% + 20px)'}} height="31" preserveAspectRatio="none" viewBox="0 0 87 31" fill="none">
															<path d="M0 4.14031C0 1.87713 1.87602 0.0646902 4.13785 0.142684L83.1379 2.86682C85.2921 2.94111 87 4.70896 87 6.86445V25.0909C87 27.2642 85.2647 29.0399 83.0919 29.0898L4.09193 30.9059C1.84739 30.9575 0 29.1521 0 26.907V4.14031Z" fill="#70167E"/>
														</svg>
													</Link>
												</li>
											))
										}
									</ul>
								</nav>
							</div>
							<div className="col-auto">
								<div className="vs-header__action">
									<div className="d-none d-xxl-inline-flex">
										<a href="https://portal.mathmagicinmotion.com" className="vs-btn">
											<span className="vs-btn__border"/>
											Portal
											{/*solve: lang*/}
										</a>
									</div>
									<button className="vs-menu-toggle style2 d-inline-block d-lg-none" tabIndex="-1" onClick={() => toggleMobileMenu()}>
										<i className="fal fa-bars"/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</header>
	);
};

export default Header;
