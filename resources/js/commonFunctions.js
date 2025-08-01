export function lang(key) {
	const translations = window.translations || {}
	return translations[key] || key;
}