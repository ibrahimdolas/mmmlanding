import ServiceBG from "../_src/img/serviceElements/bg.png"
import ServiceEle1 from "../_src/img/serviceElements/hands-left.svg"
import ServiceEle2 from "../_src/img/serviceElements/hands-right.svg"

import Service1 from "../_src/img/serviceElements/service1.jpg"
import Service2 from "../_src/img/serviceElements/service2.jpg"
import Service3 from "../_src/img/serviceElements/service3.jpg"
import Service4 from "../_src/img/serviceElements/service4.jpg"

import Icon1 from "../_src/img/serviceElements/icon1.svg"
import Icon2 from "../_src/img/serviceElements/icon2.svg"
import Icon3 from "../_src/img/serviceElements/icon3.svg"
import Icon4 from "../_src/img/serviceElements/icon4.svg"

export const servicePageData = {
	bg: ServiceBG,
	ele1: ServiceEle1,
	ele2: ServiceEle2,
	topTitle: 'Choose Us',
	title: {
		text: 'Education',
		span: 'For Kids'
	},
	services: [
		{
			id: 1,
			delay: '0.25s',
			path: '/',
			image: Service1,
			icon: Icon1,
			iconAlt: 'Service Icon 1',
			title: 'Learn and Play',
		},
		{
			id: 2,
			delay: '0.35s',
			path: '/',
			image: Service2,
			icon: Icon2,
			iconAlt: 'Service Icon 2',
			title: 'Online Course',
		},
		{
			id: 3,
			delay: '0.45s',
			path: '/',
			image: Service3,
			icon: Icon3,
			iconAlt: 'Service Icon 3',
			title: 'Formal Tuition',
		},
		{
			id: 4,
			delay: '0.55s',
			path: '/',
			image: Service4,
			icon: Icon4,
			iconAlt: 'Service Icon 4',
			title: 'Online Course',
		},
	]
}