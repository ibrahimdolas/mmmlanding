import React from 'react';
import {usePage} from "@inertiajs/react";

const Languages = () => {
	const {locale, locales} = usePage().props
	const currentLocale = locales.find(l => l.code === locale) || locales[0]
	
	const changeLanguage = (language) => {
		if (currentLocale.code === language) return
		
		document.cookie = `Accept-Language=${language}; path=/; max-age=31536000`
		location.reload()
	}
	
	return (
		<div className="social-style">
			<span className={`lang cursor-pointer ${locale === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>
				<img src="/storage/flags/en.svg" alt="English" className="rounded-circle" style={{height: '20px', width: '20px'}}/>
			</span>
			<span className={`lang cursor-pointer ${locale === 'tr' ? 'active' : ''}`} onClick={() => changeLanguage('tr')}>
				<img src="/storage/flags/tr.svg" alt="Turkish" className="rounded-circle" style={{height: '20px', width: '20px'}}/>
			</span>
		</div>
	);
};

export default Languages;
