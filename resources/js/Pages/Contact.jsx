import React from 'react';

import ParallaxBG from "../../_src/img/bg/breadcrumb-bg-7.jpg"
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {address, mailAddress, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

import Divider from "../../_src/img/elements/divider-contact.svg"
import {usePage} from "@inertiajs/react";

const title = {
	tr: 'İletişim',
	en: 'Contact',
	it: 'Contatti',
	ro: 'Contact'
}

const data = {
	topTitle: {
		en: 'Contact Us',
		tr: 'Bize Ulaşın',
		it: 'Contattaci',
		ro: 'Contactaţi-ne'
	},
	title: {
		en: 'Get In Touch',
		tr: 'İletişime Geçin',
		it: 'Contattaci',
		ro: 'Contactaţi-ne'
	},
	address: {
		en: 'Address: ',
		tr: 'Adres: ',
		it: 'Indirizzo: ',
		ro: 'Adresa :'
	},
	phone: {
		en: 'Phone: ',
		tr: 'Telefon: ',
		it: 'Telefono: ',
		ro: 'Telefon: '
	},
	email: {
		en: 'Email: ',
		tr: 'E-posta: ',
		it: 'Email: ',
		ro: 'Email: '
	},
	follow: {
		en: 'Follow Us:',
		tr: 'Takip Edin:',
		it: 'Seguici:',
		ro: 'Urmați-ne:'
	}
}

const Contact = () => {
	
	const {locale} = usePage().props
	return (
		<Layout title="Contact">
			
			<ParallaxPageTitle
				title={title[locale] ?? title.en}
				image={ParallaxBG}
			/>
			
			<section className="space space-extra-bottom overflow-hidden">
				<div className="container">
					<div className="row gx-60">
						
						<div className="col-lg-5 mb-30 mx-auto">
							<div className="vs-title title-anime text-center animation-style2 mb-3">
								<div className="title-anime__wrap">
									<span className="vs-title__sub">{data.topTitle[locale] ?? data.topTitle.en}</span>
									<h2 className="vs-title__main">{data.title[locale] ?? data.title.en}</h2>
								</div>
							</div>
							<div className="contact-info mb-20 wow" data-animate="fadeInUp" data-wow-delay="0.45s">
								<span>{data.address[locale] ?? data.address.en}</span> {address}
							</div>
							<div className="mb-20">
								<div className="address-info wow" data-animate="fadeInUp" data-wow-delay="0.55s">
									<div className="address-info__icon">
										<i className="fa-light fa-phone-volume"/>
									</div>
									<div className="address-info__content">
										<span>{data.phone[locale] ?? data.phone.en}</span>
										<a href={`tel:${phoneNumber.replace(/ /g, '')}`}>{phoneNumber}</a>
									</div>
								</div>
								<div className="address-info wow" data-animate="fadeInUp" data-wow-delay="0.65s">
									<div className="address-info__icon">
										<i className="fa-regular fa-envelope"/>
									</div>
									<div className="address-info__content">
										<span>{data.email[locale] ?? data.email.en}</span>
										<a href={`mailto:${mailAddress}`} className="text-lowercase">{mailAddress}</a>
									</div>
								</div>
							</div>
							<img src={Divider} className="contact-divider" alt="Contact Divider"/>
							<div className="social-style style2">
								<span className="social-style__label"
								      style={{cursor: 'pointer'}}>{data.follow[locale] ?? data.follow.en}</span>
								{
									socialMediaAccounts.map(account => (
										<a href={account.url} key={account.type} target="_blank">
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
							        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25193.721510160307!2d38.223757916690424!3d37.74805512081414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1533118723b51281%3A0xeee0a6b1dbd1cb1c!2zQWTEsXlhbWFuIMOcbml2ZXJzaXRlc2kgKEFEWcOcKQ!5e0!3m2!1str!2sus!4v1756728054001!5m2!1str!2sus"
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
