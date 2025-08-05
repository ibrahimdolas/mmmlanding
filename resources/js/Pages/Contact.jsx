import React from 'react';

import ParallaxBG from "../../_src/img/resultElements/bg.jpg"
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {address, mailAddress, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

import Divider from "../../_src/img/elements/divider-contact.svg"

const Contact = () => {
	return (
		<Layout title="Contact">
			
			<ParallaxPageTitle
				title="Contact"
				image={ParallaxBG}
			/>
			
			<section className="space space-extra-bottom overflow-hidden">
				<div className="container">
					<div className="row gx-60">
						
						<div className="col-lg-5 mb-30 mx-auto">
							<div className="vs-title title-anime text-center animation-style2 mb-3">
								<div className="title-anime__wrap">
									<span className="vs-title__sub">Contact us</span>
									<h2 className="vs-title__main">Get In Touch</h2>
								</div>
							</div>
							<div className="contact-info mb-20 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
								<span>Address: </span> {address}
							</div>
							<div className="mb-20">
								<div className="address-info wow" data-animate="fadeInUp" data-wow-delay="0.55s">
									<div className="address-info__icon">
										<i className="fa-light fa-phone-volume"/>
									</div>
									<div className="address-info__content">
										<span>Phone: </span>
										<a href={`tel:${phoneNumber.replace(/ /g, '')}`}>{phoneNumber}</a>
									</div>
								</div>
								<div className="address-info wow" data-animate="fadeInUp" data-wow-delay="0.65s">
									<div className="address-info__icon">
										<i className="fa-regular fa-envelope"/>
									</div>
									<div className="address-info__content">
										<span>Email: </span>
										<a href={`mailto:${mailAddress}`} className="text-lowercase">{mailAddress}</a>
									</div>
								</div>
							</div>
							<img src={Divider} className="contact-divider" alt="Contact Divider" />
							<div className="social-style style2">
								<span className="social-style__label">Follow Us: </span>
								{
									socialMediaAccounts.map(account => (
										<a href={account.link} key={account.id} target="_blank">
											<i className={`${account.type === 'x' ? 'fa-brands' : 'fab'} fa-${account.icon}`} />
										</a>
									))
								}
							</div>
						</div>
						
					</div>
				</div>
			</section>
			
		</Layout>
	);
};

export default Contact;
