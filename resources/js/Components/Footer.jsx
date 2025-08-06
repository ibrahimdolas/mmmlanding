import React from 'react';

import Grass from "../../_src/img/footerElements/footer-element-1.png"
import Scissors from "../../_src/img/footerElements/footer-element-2.png"
import Bus from "../../_src/img/footerElements/footer-element-3.png"

import FooterLogo from "../../_src/img/logo.svg"

import {Link} from "@inertiajs/react";
import {footerMenuItems, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

const Footer = () => {
	return (
		<div className="vs-footer bg-title">
		
			<div className="vs-footer__top z-index-common space-extra-top space-extra-bottom">
				<img src={Grass} alt="Grass" className="vs-footer__ele1 wow" data-animate="fadeInLeft" data-wow-delay="0.25s"/>
				<img src={Scissors} alt="Scissors" className="vs-footer__ele2"/>
				<img src={Bus} alt="Bus" className="vs-footer__ele3 wow" data-animate="fadeInRight" data-wow-delay="0.35s"/>
				
				<div className="container">
					<div className="row gy-4 gx-xxl-5">
						
						<div className="col-md-6 wow" data-animate="fadeInUp" data-wow-delay="0.25s">
							<div className="vs-footer__widget">
								<div className="vs-footer__logo text-center text-md-start mb-25">
									<Link to="/" className="vs-footer__logo-link">
										<img src={FooterLogo} alt="Math Magic in Motion" height="60"/>
									</Link>
								</div>
								<p className="vs-footer__desc text-center text-md-start">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
								<div className="icon-call justify-content-center justify-content-md-start pt-10 mb-10">
									<span className="icon-call__icon"><i className="fa-solid fa-phone-rotary"/></span>
									<div className="icon-call__contact">
										<span className="icon-call__title">call support</span>
										<Link to={`tel:${phoneNumber.replace(/ /g, '')}`} className="icon-call__number">
											{phoneNumber}
										</Link>
									</div>
								</div>
								<div className="social-style social-style--version2 w-100 justify-content-center justify-content-md-start pt-25">
									<span className="social-style__label">Follow us:</span>
									{
										socialMediaAccounts.map(account => (
											<a key={account.type} href={account.url} target="_blank">
												<i className={`${account.type === 'x' ? 'fa-brands' : 'fab'} fa-${account.icon}`}/>
											</a>
										))
									}
								</div>
							</div>
						</div>
						
						<div className="col-md-6 wow" data-animate="fadeInUp" data-wow-delay="0.35s">
							<div className="vs-footer__widget">
								<div className="vs-footer__title">Explore</div>
								<div className="vs-footer__menu">
									{
										footerMenuItems.map((list, index) => (
											<ul className="vs-footer__menu--list" key={index}>
												{
													list.map(item => (
														<li key={item.path}>
															<Link to={item.path}>
																{item.title}
															</Link>
														</li>
													))
												}
											</ul>
										))
									}
								</div>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
			
			
			<div className="vs-footer__bottom bg-theme-color-1">
				<div className="container">
					
					<div className="row gy-3 gx-5 align-items-center justify-content-center justify-content-lg-between flex-column-reverse flex-lg-row">
						<div className="col-md-auto">
							<p className="vs-footer__copyright mb-0">
								Copyright &copy; 2025 <span className="vs-theme-color">Math Magic In Motion</span>. All rights reserved.
							</p>
						</div>
						<div className="col-md-auto">
							<ul className="vs-footer__bottom--menu">
								<li><Link to="/terms">Terms & Conditions</Link></li>
								<li><Link to="/privacy">Privacy Policy</Link></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	);
};

export default Footer;
