import FacilityBG from "../_src/img/facilityElements/bg.png"
import Crocs from "../_src/img/facilityElements/crocs.png"

import Class1 from "../_src/img/facilityElements/class1.jpg"
import Class2 from "../_src/img/facilityElements/class2.jpg"
import Class3 from "../_src/img/facilityElements/class3.jpg"
import Class4 from "../_src/img/facilityElements/class4.jpg"
import Class5 from "../_src/img/facilityElements/class2.jpg"

import Icon1 from "../_src/img/facilityElements/icon1.svg"
import Icon2 from "../_src/img/facilityElements/icon2.svg"
import Icon3 from "../_src/img/facilityElements/icon3.svg"
import Icon4 from "../_src/img/facilityElements/icon4.svg"
import Icon5 from "../_src/img/facilityElements/icon2.svg"


export const facilitiesPageData = {
	bg: FacilityBG,
	crocs: Crocs,
	topTitle: 'School Facilities',
	title: 'Engaging & Spacious School',
	classes: [
		{
			id: 1,
			image: Class1,
			icon: Icon1,
			color: 1,
			title: 'Online Class',
			subtitle: 'Pre-School Has Open Door Is And Also Offer Free Trial Session In Child.',
			delay: '0.25s',
			path: '/'
		},
		{
			id: 2,
			image: Class2,
			icon: Icon2,
			color: 2,
			title: 'Pick & Drop',
			subtitle: 'Pre-School Has Open Door Is And Also Offer Free Trial Session In Child.',
			delay: '0.45s',
			path: '/'
		},
		{
			id: 3,
			image: Class3,
			icon: Icon3,
			color: 3,
			title: 'Play Ground',
			subtitle: 'Pre-School Has Open Door Is And Also Offer Free Trial Session In Child.',
			delay: '0.65s',
			path: '/'
		},
		{
			id: 4,
			image: Class4,
			icon: Icon4,
			color: 4,
			title: 'Health Foods',
			subtitle: 'Pre-School Has Open Door Is And Also Offer Free Trial Session In Child.',
			delay: '0.85s',
			path: '/'
		},
		{
			id: 5,
			image: Class5,
			icon: Icon5,
			color: 2,
			title: 'Modern School',
			subtitle: 'Pre-School Has Open Door Is And Also Offer Free Trial Session In Child.',
			delay: '1.05s',
			path: '/'
		}
	]
}