import React from 'react';
import {Link} from "@inertiajs/react";

import Logo from "../../_src/img/logo.svg"
import {address, mailAddress, menuItems, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

const MobileMenu = () => {
	return (
		<div className="vs-menu-wrapper">
			<div className="vs-menu-area text-center">
				
				<div className="mobile-logo">
					<Link href="/">
						<img src={Logo} alt="Math Magic in Motion" className="logo"/>
					</Link>
					<button className="vs-menu-toggle" tabIndex="-1">
						<i className="fa-solid fa-xmark"/>
					</button>
				</div>
				
				<div className="vs-header__right pt-4">
					<button className="searchBoxTggler" type="button">
						language buttons goes here
						{/*solve*/}
					</button>
				</div>
				
				<div className="vs-mobile-menu">
					<ul>
						{
							menuItems.map(item => (
								<li key={item.path}>
									<Link href={item.path} className="vs-svg-assets">
										{item.title}
										{/*solve: lang options*/}
										<svg xmlns="http://www.w3.org/2000/svg" style={{width: 'calc(100% + 20px)'}} height="31" viewBox="0 0 87 31" fill="none">
											<path d="M0 4.14031C0 1.87713 1.87602 0.0646902 4.13785 0.142684L83.1379 2.86682C85.2921 2.94111 87 4.70896 87 6.86445V25.0909C87 27.2642 85.2647 29.0399 83.0919 29.0898L4.09193 30.9059C1.84739 30.9575 0 29.1521 0 26.907V4.14031Z" fill="#70167E"/>
										</svg>
									</Link>
								</li>
							))
						}
					</ul>
				</div>
				
				<div className="px-20 py-20">
					<div className="sidemenu-contact style2">
						<ul>
							<li>
								<a href={`tel:${phoneNumber.replace(/ /g, '')}`} className="sidemenu-link">{phoneNumber}</a>
							</li>
							<li>
								<a href={`mailto:${mailAddress}`}>{mailAddress}</a>
							</li>
							<li>
								<Link href="/contact">
									{address}
								</Link>
							</li>
						</ul>
					</div>
					
					<div className="footer-social mb-20">
						{
							socialMediaAccounts.map(account => (
								<a
									key={account.type}
									href={account.url}
									target="_blank"
								>
									<i className={`${account.icon === 'x-twitter' ? 'fa-brands' : 'fab'} fa-${account.icon}`}/>
								</a>
							))
						}
					</div>
					
					<p className="sidemenu-text sidemenu-text--footer text-center mb-0">
						Copyright &copy; 2025 <span className="vs-theme-color">Math Magic In Motion</span>. All rights reserved.
						{/*solve: language options*/}
					</p>
				</div>
				
			</div>
		</div>
	);
};

export default MobileMenu;
