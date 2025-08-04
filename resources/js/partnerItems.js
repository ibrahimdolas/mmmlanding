import PartnersBG from "../_src/img/partnerElements/bg.jpg"

import Adyu from "../_src/img/partnerElements/adyu.jpg"
import BeCreative from "../_src/img/partnerElements/be-creative.jpg"
import Ceipes from "../_src/img/partnerElements/ceipes.jpg"
import Ila from "../_src/img/partnerElements/ila.jpg"
import Wsbinoz from "../_src/img/partnerElements/wsbinoz.jpg"


export const partnerPageData = {
	parallaxBG: PartnersBG,
	title: 'Partners',
	partners: [
		{
			id: 1,
			title: 'Adıyaman University',
			address: 'Atatürk Bulvarı No:1 02040 Adıyaman Türkiye',
			url: 'https://adiyaman.edu.tr',
			type: 'Higher education institution (teriatry level)',
			isCoordinator: true,
			image: Adyu,
			delay: '0.25s',
			flag: 'tr'
		},
		{
			id: 2,
			title: 'International Labour Association',
			address: 'Keizersgracht 482, 1017EG, Amsterdam, The Netherlands',
			url: 'https://ilabour.eu',
			type: 'Non-governmental organiastion/association/social enterprise',
			image: Ila,
			delay: '0.35s',
			flag: 'nl'
		},
		{
			id: 3,
			title: 'Wyzsza Szkola Biznesu I Nauk O Zdrowiu',
			address: 'UL Piotrkowska 278 90 361 LODZ, Łódzkie, Poland',
			url: 'https://wsbinoz.edu.pl',
			type: 'Higher education institution (teriatry level)',
			image: Wsbinoz,
			delay: '0.45s',
			flag: 'pl'
		},
		{
			id: 4,
			title: 'Centro Internazional Per La Promozione Dell\'educazione e lo sviluppo',
			address: 'Via G. La Farina 21 90141 Palermo, Sicillia, Italy',
			url: 'http://ceipes.org',
			type: 'Non-governmental organiastion/association/social enterprise',
			image: Ceipes,
			delay: '0.55s',
			flag: 'it'
		},
		{
			id: 5,
			title: 'Be-Creative Association',
			address: 'Maskrosvägen 5 295 32 Bromolla, Skåne län, Sweden',
			url: 'http://be-creative.link',
			type: 'Non-governmental organiastion/association/social enterprise',
			image: BeCreative,
			delay: '0.65s',
			flag: 'se'
		}
	]
}