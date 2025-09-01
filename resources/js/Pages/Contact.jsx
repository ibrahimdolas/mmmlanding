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
							<img src={Divider} className="contact-divider" alt="Contact Divider"/>
							<div className="social-style style2">
								<span className="social-style__label">Follow Us: </span>
								{
									socialMediaAccounts.map(account => (
										<a href={account.link} key={account.id} target="_blank">
											<i className={`${account.type === 'x' ? 'fa-brands' : 'fab'} fa-${account.icon}`}/>
										</a>
									))
								}
							</div>
						</div>
					
					</div>
				</div>
			</section>
			
			<div>
				<div className="vs-map wow animate__fadeInUp" data-wow-delay="0.25s">
					<div className="mapouter">
						<div className="gmap_canvas">
							<iframe className="gmap_iframe" style={{width: '100%', height: '447px', border: 0, overflow: 'hidden'}}
							        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30686.3461952412!2d38.211143354353624!3d37.765259557191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1533118723b51281%3A0xeee0a6b1dbd1cb1c!2zQWTEsXlhbWFuIMOcbml2ZXJzaXRlc2kgKEFEWcOcKQ!5e1!3m2!1str!2sus!4v1756723796028!5m2!1str!2sus"
							        allowFullScreen/>
							<a className="gmap_canvas__credit" href="https://embed-googlemap.com">embed google map</a>
						</div>
					</div>
				</div>
			</div>
		
		</Layout>
	);
};

export default Contact;
