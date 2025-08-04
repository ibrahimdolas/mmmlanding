import NewsBG from "../_src/img/newsElements/bg.png"
import NewsImage1 from "../_src/img/newsElements/news1.jpg"
import NewsImage2 from "../_src/img/newsElements/news2.jpg"
import NewsImage3 from "../_src/img/newsElements/news3.jpg"

export const newsPageData = {
	bg: NewsBG,
	topTitle: 'Our News',
	title: 'Our News & Article',
	news: [
		{
			id: 1,
			image: NewsImage1,
			date: '2025-09-26',
			title: 'Learn And Play',
			description: 'Pre-School Has Open Door And Offer Free Trial Session In Child',
			button: {
				title: 'Read More',
				path: '/'
			},
			delay: '0.25s'
		},
		{
			id: 2,
			image: NewsImage2,
			date: '2025-09-13',
			title: 'Indoor Class Rooms',
			description: 'Pre-School Has Open Door And Offer Free Trial Session In Child',
			button: {
				title: 'Read More',
				path: '/'
			},
			delay: '0.35s'
		},
		{
			id: 3,
			image: NewsImage3,
			date: '2025-08-31',
			title: 'Filled Fun & Games',
			description: 'Pre-School Has Open Door And Offer Free Trial Session In Child',
			button: {
				title: 'Read More',
				path: '/'
			},
			delay: '0.45s'
		}
	]
}