import React from 'react';
import Layout from "@/Layouts/Layout.jsx";
import ParallaxPageTitle from "@/Components/ParallaxPageTitle.jsx";
import {partnerPageData} from "@/partnerItems.js";
import useHoverEffect from "@/hooks/useHoverEffect.js";

const Partners = () => {
	
	useHoverEffect()
	
	return (
		<Layout title="Partners">
			
			<ParallaxPageTitle
				image={partnerPageData.parallaxBG}
				title={partnerPageData.title}
			/>
			
			<div className="vs-class--area bg-color6 space space-extra-bottom overflow-hidden">
				<div className="container">
					<div className="row align-items-stretch">
						
						{
							partnerPageData.partners.map(partner => (
								<div
									className="col-lg-4 col-md-6"
									key={partner.id}
								>
									<div className="vs-time vs-time--class vs-image-effect wow" data-animate="fadeInUp" data-wow-delay={partner.delay}>
										<figure className="vs-time__figure">
											<a href={partner.url} target="_blank" className="vs-time__image--link">
												<img className="vs-time__image vs-image-effect__image" src={partner.image} alt={partner.title}/>
												<div className="vs-image-effect__overlay"/>
											</a>
											<span className="vs-time__price">
												<img src={`/storage/flags/${partner.flag}.svg`} alt={`Partner Flag ${partner.id}`} className="vs-time__flag rounded-circle" style={{height: '35px', width: '35px'}}/>
											</span>
										</figure>
										<div className="vs-time__content">
											<h3 className="vs-time__heading">
												<a href={partner.url} target="_blank">
													{partner.title}
												</a>
											</h3>
											<div className="vs-time__features">
												<ul>
													<li><span><i className="fa fa-location-dot"/>{partner.address}</span></li>
													<li><span><i className="fab fa-chrome"/><a href={partner.url} target="_blank">{partner.url}</a></span></li>
													<li><span><i className="fa fa-question-circle"/><b>Type: </b>{partner.type}</span></li>
												</ul>
											</div>
											<hr className="vs-time__divider"/>
											<div className="vs-time__footer">
												<div className="vs-time__teacher">
													<span className="vs-time__teacher--link">
														{partner.isCoordinator ? 'Coordinator' : ''}
													</span>
													<span className="vs-time__topic">
														{partner.isCoordinator ? '' : 'Partner'}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))
						}
						
					</div>
				</div>
			</div>
		
		</Layout>
	);
};

export default Partners;
