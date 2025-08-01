import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import Hero from "@/Components/Hero.jsx";
import Services from "@/Components/Services.jsx";

const Index = () => {
	return (
		<Layout
			title="Homepage"
		>
		
			<Hero/>
			<Services/>
			
		</Layout>
	);
};

export default Index;
