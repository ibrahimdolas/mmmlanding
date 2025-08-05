import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {resultsPageData} from "@/resultItems.js";
import SingleResult from "@/Components/SingleResult.jsx";

const Results = () => {
	return (
		<Layout title="Results">
			
			<ParallaxPageTitle
				title={resultsPageData.parallaxTitle}
				image={resultsPageData.bg}
			/>
			
			<section className="vs-room--area space space-extra-bottom z-index-common parallax-wrap overflow-hidden background-image" style={{backgroundImage: `url(${resultsPageData.sectionBG})`}}>
				<img src={resultsPageData.element1} className="vs-room__ele1 parallax-element" alt="Result Element 1" data-move="100"/>
				<img src={resultsPageData.element2} className="vs-room__ele2 parallax-element" alt="Result Element 2" data-move="60"/>
				
				<div className="container">
					
					{
						resultsPageData.results.map(result => (
							<SingleResult key={result.id} result={result}/>
						))
					}
					
				</div>
				
			</section>
		
		</Layout>
	);
};

export default Results;
