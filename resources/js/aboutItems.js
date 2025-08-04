import AboutBG from "../_src/img/aboutElements/bg.png"
import Palm from "../_src/img/aboutElements/palm.png"
import TopLeft from "../_src/img/aboutElements/image-top-left.jpg"
import BottomRight from "../_src/img/aboutElements/image-bottom-right.jpg"
import Plane from "../_src/img/aboutElements/plane.svg"
import Balloons from "../_src/img/aboutElements/balloons.svg"
import Lines from "../_src/img/aboutElements/lines.png"
import AboutPageBG from "../_src/img/bg/breadcrumb-bg-2.jpg"
import Collage from "../_src/img/aboutElements/about-page-collage.png"

import CardIcon1 from "../_src/img/icons/feature-icon-h2-1.svg"
import CardIcon2 from "../_src/img/icons/feature-icon-h2-2.svg"
import CardIcon3 from "../_src/img/icons/feature-icon-h2-3.svg"

export const aboutPageData = {
	bg: AboutBG,
	palm: Palm,
	topLeft: TopLeft,
	bottomRight: BottomRight,
	plane: Plane,
	balloons: Balloons,
	lines: Lines,
	yoe: {
		number: '21+',
		text: 'Years of Experience'
	},
	topTitle: 'School Facilities',
	title: {
		text1: 'Learning',
		span: 'Opportunity',
		text2: 'For Kids'
	},
	parallaxBg: AboutPageBG,
	crumbs: [
		{title: 'Home', path: '/'},
		{title: 'About The Project', path: '/about-the-project'}
	],
	pageTitle: 'About The Project',
	tabs: [
		{
			id: 'history',
			title: 'Our History',
			text: 'Pre-school has open door and also offer free trial sessions that child Creative Learning Opportunity For Kids Hised sedaugue felis Phasellus gravida lacus quis eros.',
			list: [
				'Learning Opportunity For Kids',
				'Your Child Will Take'
			],
			button: {
				path: '/',
				text: 'Contact Us'
			}
		},
		{
			id: 'school',
			title: 'School',
			text: 'Pre-school has open door and also offer free trial sessions that child Creative Learning Opportunity For Kids Hised sedaugue felis Phasellus gravida lacus quis eros.',
			list: [
				'Learning Opportunity For Kids',
				'Your Child Will Take'
			],
			button: {
				path: '/',
				text: 'Test'
			}
		},
		{
			id: 'kids',
			title: 'Kids',
			text: 'Pre-school has open door and also offer free trial sessions that child Creative Learning Opportunity For Kids Hised sedaugue felis Phasellus gravida lacus quis eros.',
			list: [
				'Learning Opportunity For Kids',
				'Your Child Will Take'
			],
			button: {
				path: '/',
				text: 'Contact Us'
			}
		}
	],
	cards: [
		{
			id: 1,
			title: 'Learning & Fun',
			description: 'Pre-school has open doors free session in child.',
			icon: CardIcon1,
			color: 4,
			delay: '0.25s',
			fill: '#4F830E'
		},
		{
			id: 2,
			title: 'Online Class',
			description: 'Pre-school has open doors free session in child.',
			icon: CardIcon2,
			color: 1,
			delay: '0.35s',
			fill: '#70167E'
		},
		{
			id: 3,
			title: 'Own Playground',
			description: 'Pre-school has open doors free session in child.',
			icon: CardIcon3,
			color: 2,
			delay: '0.45s',
			fill: '#D18109'
		},
	],
	collage: Collage
}