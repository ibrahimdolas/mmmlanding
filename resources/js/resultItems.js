import ResultsBG from "../_src/img/resultElements/bg.jpg"
import RoomBG from "../_src/img/resultElements/bg.png"
import ResultElement1 from "../_src/img/resultElements/ele1.png"
import ResultElement2 from "../_src/img/resultElements/ele2.png"

import Result1Cover from "../_src/img/resultElements/result1.jpg"

export const resultsPageData = {
	bg: ResultsBG,
	parallaxTitle: 'Results',
	
	sectionBG: RoomBG,
	element1: ResultElement1,
	element2: ResultElement2,
	topTitle: 'Event Schedule',
	title: 'World\'s Leading Companies At School Conference',
	
	results: [
		{
			id: 1,
			topTitle: 'Scene 1',
			title: 'Kids Learning Math',
			subtitle: 'Pre-School Has Open Doors A Offer Constantly Expanding Children Our Goal Is To Carefully Educate.',
			minutes: '12',
			cover: Result1Cover,
			path: 'https://www.youtube.com/watch?v=J__-tvX8KMg',
			delay: '0.25s'
		},
		{
			id: 2,
			topTitle: 'Scene 2',
			title: 'Kids Learning Science',
			subtitle: 'Pre-School Has Open Doors A Offer Constantly Expanding Children Our Goal Is To Carefully Educate.',
			minutes: '9',
			cover: Result1Cover,
			path: 'https://www.youtube.com/watch?v=J__-tvX8KMg',
			delay: '0.35s'
		},
		{
			id: 3,
			topTitle: 'Scene 3',
			title: 'Kids Learning Technology',
			subtitle: 'Pre-School Has Open Doors A Offer Constantly Expanding Children Our Goal Is To Carefully Educate.',
			minutes: '19',
			cover: Result1Cover,
			path: 'https://www.youtube.com/watch?v=J__-tvX8KMg',
			delay: '0.25s'
		}
	]
}