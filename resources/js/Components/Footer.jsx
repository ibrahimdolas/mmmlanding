import React from 'react';

import Grass from "../../_src/img/characters/ch8.png"
import Scissors from "../../_src/img/footerElements/footer-element-2.png"
import Bus from "../../_src/img/characters/ch7.png"

import FooterLogo from "../../_src/img/logo.svg"
import EULogo from "../../_src/img/footerElements/eu-logo-ua-tr.jpg"

import {Link, usePage} from "@inertiajs/react";
import {copyright, footerMenuItems, mailAddress, phoneNumber, socialMediaAccounts} from "@/menuItems.js";

const footerLinks = {
	terms: {
		en: 'Terms & Conditions',
		tr: 'Kullanım Şartları',
		it: 'Termini di Utilizzo',
		ro: 'Termeni de Utilizare'
	},
	privacy: {
		en: 'Privacy Policy',
		tr: 'Gizlilik Politikası',
		it: 'Informativa Sulla Privacy',
		ro: 'Politica de Confidențialitate'
	}
}

const contact = {
	en: 'Contact Us',
	tr: 'Bize Ulaşın',
	it: 'Contattaci',
	ro: 'Contactaţi-ne'
}

const follow = {
	en: 'Follow Us:',
	tr: 'Takip Edin:',
	it: 'Seguici:',
	ro: 'Urmați-ne:'
}

const disclaim = {
	en: `<strong>Disclaimer:</strong> Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.`,
	tr: `<strong>Yasal Uyarı:</strong> Avrupa Birliği tarafından finanse edilmiştir. Ancak, ifade edilen görüş ve düşünceler yalnızca yazar(lar)a aittir ve Avrupa Birliği veya Avrupa Eğitim ve Kültür Yürütme Ajansı'nın (EACEA) görüşlerini yansıtmaz. Avrupa Birliği veya EACEA bunlardan sorumlu tutulamaz.`,
	it: `<strong>Disclaimer:</strong> Finanziato dall'Unione Europea. Le opinioni e i punti di vista espressi sono tuttavia esclusivamente quelli dell’autore/i e non riflettono necessariamente quelli dell'Unione Europea o dell'Agenzia esecutiva europea per l'istruzione e la cultura (EACEA). Né l'Unione Europea né l'EACEA possono essere ritenute responsabili di tali contenuti.`,
	ro: `„Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin, însă, exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere și opiniile Uniunii Europene sau ale Agenției Executive Europene pentru Educație și Cultură (EACEA). Nici Uniunea Europeană și nici EACEA nu pot fi considerate răspunzătoare pentru acestea.”`
}

const Footer = () => {
	
	const {locale} = usePage().props;
	
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
								{/*<p className="vs-footer__desc text-center text-md-start">*/}
								{/*	Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
								{/*</p>*/}
								<div className="icon-call justify-content-center justify-content-md-start pt-10 mb-10">
									<span className="icon-call__icon"><i className="fa-solid fa-phone-rotary"/></span>
									<div className="icon-call__contact">
										<span className="icon-call__title">{contact[locale] ?? contact.en}</span>
										<Link to={`tel:${phoneNumber.replace(/ /g, '')}`} className="icon-call__number">
											{phoneNumber}
										</Link>
									</div>
								</div>
								<div className="icon-call justify-content-center justify-content-md-start pt-10 mb-10">
									<span className="icon-call__icon"><i className="fa-solid fa-envelope"/></span>
									<div className="icon-call__contact">
										<Link to={`mailto:${mailAddress}`} className="icon-call__number">
											{mailAddress}
										</Link>
									</div>
								</div>
								<div className="social-style social-style--version2 w-100 justify-content-center justify-content-md-start pt-25">
									<span className="social-style__label">{follow[locale] ?? follow.en}</span>
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
							<div className="vs-footer__widget text-end">
								<div className="vs-footer_-title mb-4">
									<img src={EULogo} alt="Co-Founded by EU" height="48"/>
								</div>
								<p className="vs-footer__desc pe-0" dangerouslySetInnerHTML={{__html: disclaim[locale] ?? disclaim.en}}/>
							</div>
							{/*<div className="vs-footer__widget">*/}
							{/*	<div className="vs-footer__title">Explore</div>*/}
							{/*	<div className="vs-footer__menu">*/}
							{/*		{*/}
							{/*			footerMenuItems.map((list, index) => (*/}
							{/*				<ul className="vs-footer__menu--list" key={index}>*/}
							{/*					{*/}
							{/*						list.map(item => (*/}
							{/*							<li key={item.path}>*/}
							{/*								<Link to={item.path}>*/}
							{/*									{item.title}*/}
							{/*								</Link>*/}
							{/*							</li>*/}
							{/*						))*/}
							{/*					}*/}
							{/*				</ul>*/}
							{/*			))*/}
							{/*		}*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
						
					</div>
				</div>
				
			</div>
			
			
			<div className="vs-footer__bottom bg-theme-color-1">
				<div className="container">
					
					<div className="row gy-3 gx-5 align-items-center justify-content-center justify-content-lg-between flex-column-reverse flex-lg-row">
						<div className="col-md-auto">
							<p className="vs-footer__copyright mb-0">
								2025{new Date().getFullYear() > 2025 ? ` - ${new Date().getFullYear()}` : ''} &copy; <span className="vs-theme-color">Math Magic In Motion</span>. {copyright[locale] ?? copyright.en}
							</p>
						</div>
						<div className="col-md-auto">
							<ul className="vs-footer__bottom--menu">
								<li><Link href="/terms">{footerLinks.terms[locale] ?? footerLinks.terms.en}</Link></li>
								<li><Link href="/privacy">{footerLinks.privacy[locale] ?? footerLinks.privacy.en}</Link></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
			
		</div>
	);
};

export default Footer;
