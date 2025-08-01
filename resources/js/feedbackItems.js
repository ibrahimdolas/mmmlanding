import FeedbackDivider from "../_src/img/feedbackElements/divider.svg"
import Quote from "../_src/img/feedbackElements/quote.svg"
import Cloud from "../_src/img/feedbackElements/cloud.png"
import FeedbackBG from "../_src/img/feedbackElements/bg.png"
import FeedbackImage from "../_src/img/feedbackElements/feedbackImage.jpg"

import Customer1 from "../_src/img/feedbackElements/customer1.jpg"
import Customer2 from "../_src/img/feedbackElements/customer2.jpg"
import Customer3 from "../_src/img/feedbackElements/customer3.jpg"

export const feedbackPageData = {
	divider: FeedbackDivider,
	quote: Quote,
	cloud: Cloud,
	bg: FeedbackBG,
	feedbackImage: FeedbackImage,
	topTitle: 'FAQ Feedback',
	title: {
		text1: 'Customer',
		span: 'Feedback',
		text2: 'For school'
	},
	customers: [
		{
			id: 1,
			name: 'Rodja Hartmann',
			title: 'Vecuro, CEO',
			stars: 3,
			comment: 'We look forward to developing the long-term relationship with children and parents and will welcome children into our ennce after-school. Our afterschool service.',
			image: Customer1
		},
		{
			id: 2,
			name: 'Parker Jonson',
			title: 'Google, CEO',
			stars: 4,
			comment: 'We look forward to developing the long-term relationship with children and parents and will welcome children into our ennce after-school. Our afterschool service.',
			image: Customer2
		},
		{
			id: 3,
			name: 'Mehadi Hassan',
			title: 'InsightTheme, CEO',
			stars: 3,
			comment: 'We look forward to developing the long-term relationship with children and parents and will welcome children into our ennce after-school. Our afterschool service.',
			image: Customer3
		}
	]
}