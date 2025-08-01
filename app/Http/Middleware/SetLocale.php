<?php
	
	namespace App\Http\Middleware;
	
	use Closure;
	use Illuminate\Http\Request;
	use Illuminate\Support\Facades\App;
	use Illuminate\Support\Facades\Cookie;
	use LaravelLang\Locales\Facades\Locales;
	use Symfony\Component\HttpFoundation\Response;
	
	class SetLocale
	{
		/**
		 * Handle an incoming request.
		 *
		 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
		 */
		public function handle(Request $request, Closure $next): Response
		{
			$locale = Cookie::get('Accept-Language');
			if (!$locale) {
				$browserLanguages = $request->getLanguages();
				
				foreach ($browserLanguages as $language) {
					if (Locales::isAvailable($language)) {
						$locale = $language;
						break;
					}
				}
			}
			if (!$locale) {
				$locale = config('app.fallback_locale', 'en');
			}
			
			setcookie('Accept-Language', $locale, time() + 525600, "/");
			
			App::setLocale($locale);
			
			return $next($request);
		}
	}
