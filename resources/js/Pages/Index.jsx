import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import Services from "@/Components/Services.jsx";
import About from "@/Components/About.jsx";
import Sessions from "@/Components/Sessions.jsx";
import Programs from "@/Components/Programs.jsx";
import Gallery from "@/Components/Gallery.jsx";
import Facilities from "@/Components/Facilities.jsx";
import Feedback from "@/Components/Feedback.jsx";
import News from "@/Components/News.jsx";
import HeroBase from "@/Components/Home/Hero/HeroBase.jsx";
import GuideBase from "@/Components/Home/Guide/GuideBase.jsx";
import AboutBase from "@/Components/Home/About/AboutBase.jsx";

const Index = () => {
	return (
		<Layout
			title="Homepage"
		>
		
			<HeroBase/>
			<GuideBase/>
			<AboutBase/>
			{/*<Sessions/>*/}
			{/*<Gallery/>*/}
			{/*<Programs/>*/}
			{/*<Facilities/>*/}
			{/*<Feedback/>*/}
			{/*<News/>*/}
			
		</Layout>
	);
};

export default Index;
