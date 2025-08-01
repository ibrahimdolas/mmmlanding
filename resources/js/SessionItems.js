import SessionsBg from "../_src/img/sessionElements/bg.png"
import SessionElement1 from "../_src/img/sessionElements/ele1.png"
import SessionElement2 from "../_src/img/sessionElements/ele2.png"

import SessionIcon1 from "../_src/img/sessionElements/icon1.svg"
import SessionIcon2 from "../_src/img/sessionElements/icon2.svg"
import SessionIcon3 from "../_src/img/sessionElements/icon3.svg"
import SessionIcon4 from "../_src/img/sessionElements/icon4.svg"

import SessionShape from "../_src/img/sessionElements/shape.png"


export const sessionPageData = {
	bg: SessionsBg,
	ele1: SessionElement1,
	ele2: SessionElement2,
	topTitle: 'Session Times',
	title: 'Your kids Are 100% Safe at Our Care',
	shape: SessionShape,
	sessions: [
		{
			id: 1,
			title: 'Brain Train',
			subtitle: '8.00am - 10.00am',
			icon: SessionIcon1,
			delay: '0.2s'
		},
		{
			id: 2,
			title: 'Drawing & Paintings',
			subtitle: '10.00am - 12.00pm',
			icon: SessionIcon2,
			delay: '0.3s'
		},
		{
			id: 3,
			title: 'Alphabet Matching',
			subtitle: '12.00pm - 2.00pm',
			icon: SessionIcon3,
			delay: '0.4s'
		},
		{
			id: 4,
			title: 'Playland & Caffe',
			subtitle: '2.00pm - 4.00pm',
			icon: SessionIcon4,
			delay: '0.5s'
		}
	]
}