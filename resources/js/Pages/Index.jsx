import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import Hero from "@/Components/Hero.jsx";
import Services from "@/Components/Services.jsx";
import About from "@/Components/About.jsx";
import Sessions from "@/Components/Sessions.jsx";
import Programs from "@/Components/Programs.jsx";
import Gallery from "@/Components/Gallery.jsx";
import Facilities from "@/Components/Facilities.jsx";
import Feedback from "@/Components/Feedback.jsx";
import News from "@/Components/News.jsx";

const Index = () => {
	return (
		<Layout
			title="Homepage"
		>
		
			<Hero/>
			<Services/>
			<About/>
			<Sessions/>
			<Gallery/>
			<Programs/>
			<Facilities/>
			<Feedback/>
			<News/>
			
		</Layout>
	);
};

export default Index;
