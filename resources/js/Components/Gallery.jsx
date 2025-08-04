import React from 'react';
import {galleryPageData} from "@/galleryItems.js";

const Gallery = () => {
	return (
		<section className="vs-gallery--area space space-extra-bottom overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className="vs-title text-center title-anime animation-style2">
							<div className="title-anime__wrap">
								<span className="vs-title__sub">{galleryPageData.topTitle}</span>
								<h2 className="vs-title__main">{galleryPageData.title}</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="vs-gallery--row">
					{
						galleryPageData.images.map(image => (
							<div className={`vs-gallery vs-gallery--col${image.id} wow`} data-animate="fadeInUp" data-wow-delay={image.delay} key={image.id}>
								<div className="vs-gallery__figure">
									<img src={image.image} alt={`Gallery Image ${image.id}`} loading="lazy" className="vs-gallery__image"/>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
