import React from 'react';

const BackToTop = () => {
	return (
		<button className="back-to-top" id="backToTop" aria-label="Back To Top" tabIndex="-1">
			<span className="progress-circle">
				 <svg viewBox="0 0 100 100">
	        <circle className="bg" cx="50" cy="50" r="40"/>
	        <circle className="progress" cx="50" cy="50" r="40"/>
	      </svg>
				<span className="progress-percentage" id="progressPercentage">0%</span>
			</span>
		</button>
	);
};

export default BackToTop;
