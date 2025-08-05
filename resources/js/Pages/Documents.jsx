import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";

import ParallaxBG from "../../_src/img/resultElements/bg.jpg"
import Ele1 from "../../_src/img/elements/events-page-ele1.png"
import Ele2 from "../../_src/img/elements/events-page-ele2.png"

import Image1 from "../../_src/img/eventElements/event1.jpg"
import Image2 from "../../_src/img/eventElements/event2.jpg"
import Image3 from "../../_src/img/eventElements/event3.jpg"
import Image4 from "../../_src/img/eventElements/event4.jpg"
import EventCard from "@/Components/Event/EventCard.jsx";


const events = [
	{
		id: 1,
		title: 'Activity Report',
		image: Image1,
		date: '2025-08-03',
		documentType: 'PDF',
		documentIcon: 'pdf',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.',
		download: '/storage/reports/report1.pdf'
	},
	{
		id: 2,
		title: 'Screenwriting Report',
		image: Image2,
		date: '2025-07-16',
		documentType: 'PDF',
		documentIcon: 'pdf',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.',
		download: '/storage/reports/report2.pdf'
	},
	{
		id: 3,
		title: 'Meeting Report',
		image: Image3,
		date: '2025-07-01',
		documentType: 'PDF',
		documentIcon: 'pdf',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.',
		download: '/storage/reports/report3.pdf'
	},
	{
		id: 4,
		title: 'Activity Report',
		image: Image4,
		date: '2025-06-012',
		documentType: 'PDF',
		documentIcon: 'pdf',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quasi.',
		download: '/storage/reports/report4.pdf'
	},
]


const Documents = () => {
	return (
		<Layout title="Documents">
		
			<ParallaxPageTitle
				title="Documents"
				image={ParallaxBG}
			/>
			
			
			<section className="vs-event--page bg-color6 space space-extra-bottom z-index-common overflow-hidden">
			
				<div className="vs-event--ele1">
					<img src={Ele1} alt="Event Element 1"/>
				</div>
				<div className="vs-event--ele2">
					<img src={Ele2} alt="Event Element 2"/>
				</div>
				
				<div className="container">
					
					<div className="row">
						
						<div className="col-lg-8 mx-auto">
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<span className="vs-title__sub">Activity Reports</span>
									<h2 className="vs-title__main">
										Title goes here
									</h2>
								</div>
							</div>
						</div>
						
					</div>
					
					{
						events.map(event => (
							<EventCard event={event} key={event.id}/>
						))
					}
					
				</div>
				
			</section>
			
		</Layout>
	);
};

export default Documents;
