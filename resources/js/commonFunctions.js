export function lang(key) {
	const translations = window.translations || {}
	return translations[key] || key;
}

export function toggleMobileMenu() {
	const menu = document.querySelector('.vs-menu-wrapper')
	if (menu) {
		menu.classList.toggle('vs-body-visible')
	}
}