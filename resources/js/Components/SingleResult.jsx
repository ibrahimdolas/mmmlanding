import React from 'react';
import VideoPopup from "@/Components/VideoPopup.jsx";

const SingleResult = ({result}) => {
	
	return (
		<div className="row align-items-center">
			<div className="col-lg-5 mb-50 wow" data-animate="fadeInUp" data-wow-delay={result.delay}>
				<div className="vs-title pe-xl-3 mb-0 title-anime animation-style2">
					<div className="title-anime__wrap">
						<span className="vs-title__sub">{result.topTitle}</span>
						<h2 className="vs-title__main pe-xl-4">
							{result.title}
						</h2>
					</div>
					<p className="vs-title__text text-capitalize fw-medium mb-0">
						{result.subtitle}
					</p>
				</div>
			</div>
			<div className="col-lg-7 mb-50 wow" data-animate="fadeInUp" data-wow-delay={result.delay}>
				<div className="vs-room--video background-image" style={{backgroundImage: `url(${result.cover})`}}>
					<div className="vs-room--ex">
						<span className="vs-room--ex__num counter-style">
							<span className="counter-number" data-counter={result.minutes}>{result.minutes}</span>
						</span>
						<h4 className="vs-room--ex__title">minutes</h4>
						<i className="fa fa-clock fs-2 text-white"/>
					</div>
					<div className="vs-room--icon">
						<VideoPopup videoUrl={result.path.replace('watch?v=', 'embed/')} title={result.title}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleResult;
