import React from 'react';

import Logo from "../../_src/img/logo.svg"

const Loader = () => {
	return (
		<div className="preloader">
			<div className="preloader-inner">
				<img src={Logo} alt="Math Magic in Motion"/>
				<span className="loader"/>
			</div>
		</div>
	);
};

export default Loader;
