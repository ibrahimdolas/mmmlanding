import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import {usePage} from "@inertiajs/react";

const title = {
	en: 'Privacy Policy',
	tr: 'Gizlilik Politikası',
	it: 'Politica Sulla Riservatezza',
	ro: 'Politica de Confidențialitate'
}

const Privacy = () => {
	const {locale} = usePage().props
	return (
		<Layout title="Privacy">
			
			<section className="vs-about--section pt-30 space space-extra-bottom z-index-common overflow-hidden">
				
				
				<div className="container">
					
					<div className="row align-items-center pt-30 gx-50">
						
						<div className="col-12 mb-30 wow">
							
							<div className="vs-title text-center title-anime animation-style2">
								<div className="title-anime__wrap">
									<h2 className="vs-title__main">{title[locale] ?? title.en}</h2>
								</div>
							</div>
							
							<p className="vs-about__text vs-text text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquid animi atque culpa esse
								excepturi in iusto nobis quas, rem reprehenderit sequi vel. Iure nisi provident quaerat velit
								voluptates?
							</p>
							<p className="vs-about__text vs-text text-start">Adipisci aliquid assumenda id ipsam laborum officiis optio quia quidem veritatis vero! Adipisci,
								corporis cum debitis eaque eveniet facilis, itaque iure laborum minima modi non quas, qui similique unde
								voluptatem?
							</p>
							<p className="vs-about__text vs-text text-start">At culpa iusto maxime molestias qui quia quis sit vero. Accusantium dolor dolorum eligendi hic
								quaerat totam! Aspernatur consectetur debitis dignissimos dolores doloribus illo magni maxime, nisi
								reprehenderit sed! Impedit!
							</p>
							<p className="vs-about__text vs-text text-start">Beatae cum dolor dolorem ea hic illo, itaque magnam molestiae nihil nulla numquam obcaecati quaerat
								quasi quibusdam quis. Assumenda consequuntur debitis fuga id laborum minima nobis quidem, tempora
								voluptate voluptatibus!
							</p>
							<p className="vs-about__text vs-text text-start">Ab eos molestiae optio pariatur porro, quae ratione recusandae reiciendis sequi ullam? Autem,
								consequuntur cum delectus doloremque explicabo, facere fuga id illum magnam maiores optio, pariatur quos
								recusandae suscipit voluptates.
							</p>
							
						</div>
						
					</div>
					
				</div>
				
				
			</section>
			
		</Layout>
	);
};

export default Privacy;
