import React from 'react';
import {Link} from "@inertiajs/react";

import Logo from "../../_src/img/logo.svg"
import {address, mailAddress, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

const Offcanvas = () => {
	return (
		<div className="sidemenu-wrapper">
			<div className="sidemenu-content">
				
				<div className="sidemenu-logo sidemenu-item">
					<Link href="/">
						<img src={Logo} alt="Math Magic in Motion" className="logo"/>
					</Link>
					<button className="closeButton sideMenuCls">X</button>
				</div>
				
				<hr className="sidemenu-hr sidemenu-item"/>
				
				<div className="sidemenu-inner">
					<div className="sidemenu-body">
						<p className="sidemenu-item text-white mb-30">
							We are constantly expanding the range of services offered, taking care of children of all ages.
							{/*solve: metin ve lang*/}
						</p>
						<h4 className="sidemenu-subtitle sidemenu-item">
							BİZE ULAŞIN
							{/*solve: lang*/}
						</h4>
						<div className="sidemenu-contact">
							<ul>
								<li className="sidemenu-item">
									<a href={`tel:${phoneNumber.replace(/ /g, '')}`} className="sidemenu-link">{phoneNumber}</a>
								</li>
								<li className="sidemenu-item">
									<a href={`mailto:${mailAddress}`} className="sidemenu-link">{mailAddress}</a>
								</li>
								<li className="sidemenu-item">
									<Link href="/contact" className="sidemenu-link">{address}</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="sidemenu-footer">
						<hr className="sidemenu-hr sidemenu-item"/>
						<div className="footer-social sidemenu-item">
							<span>follow us on:</span>
							{/*solve: language*/}
							{
								socialMediaAccounts.map(account => (
									<a
										key={account.type}
										href={account.url}
										target="_blank"
									>
										<i className={`${account.type === 'x' ? 'fa-brands' : 'fab'} fa-${account.icon}`}></i>
									</a>
								))
							}
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
	);
};

export default Offcanvas;
