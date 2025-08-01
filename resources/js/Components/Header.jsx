import React, {useEffect} from 'react';
import {menuItems, socialMediaAccounts} from "@/menuItems.js";
import {Link, usePage} from "@inertiajs/react";

import Logo from "../../_src/img/logo.svg"

const Header = () => {
	
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
	
	const {locale, locales} = usePage().props
	const currentLocale = locales.find(l => l.code === locale) || locales[0]
	
	const changeLanguage = (language) => {
		if (currentLocale.code === language) return
		
		document.cookie = `Accept-Language=${language}; path=/; max-age=31536000`
		location.reload()
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
							<div className="social-style">
								<span className={`lang cursor-pointer ${locale === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>
									<img src="/storage/flags/en.svg" alt="English" className="rounded-circle" style={{height: '20px', width: '20px'}}/>
								</span>
								<span className={`lang cursor-pointer ${locale === 'tr' ? 'active' : ''}`} onClick={() => changeLanguage('tr')}>
									<img src="/storage/flags/tr.svg" alt="Turkish" className="rounded-circle" style={{height: '20px', width: '20px'}}/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="sticky-wrapper">
				<div className="sticky-active">
					<div className="container container--custom">
						<div className="row justify-content-between align-items-center">
							<div className="col">
								<div className="vs-header__logo">
									<Link href="/">
										<img src={Logo} alt="Math Magic in Motion" className="logo"/>
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
											Go To Panel
											{/*solve: lang*/}
										</a>
									</div>
									<div className="d-none d-lg-inline-flex align-items-center">
										<button className="sideMenuToggler" tabIndex="-1">
											<svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.9165 4.5H28.4165C29.6594 4.5 30.6665 3.49292 30.6665 2.25C30.6665 1.00708 29.6594 0 28.4165 0H2.9165C1.67358 0 0.666504 1.00708 0.666504 2.25C0.666504 3.49292 1.67358 4.5 2.9165 4.5Z" fill="currentColor" />
												<path d="M28.4165 9H2.9165C1.67358 9 0.666504 10.0071 0.666504 11.25C0.666504 12.4929 1.67358 13.5 2.9165 13.5H28.4165C29.6594 13.5 30.6665 12.4929 30.6665 11.25C30.6665 10.0071 29.6594 9 28.4165 9Z" fill="currentColor" />
												<path d="M28.4165 18H2.9165C1.67358 18 0.666504 19.0071 0.666504 20.25C0.666504 21.4929 1.67358 22.5 2.9165 22.5H28.4165C29.6594 22.5 30.6665 21.4929 30.6665 20.25C30.6665 19.0071 29.6594 18 28.4165 18Z" fill="currentColor" />
											</svg>
										</button>
									</div>
									<button className="vs-menu-toggle style2 d-inline-block d-lg-none" tabIndex="-1">
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
