<?php
	
	use App\Http\Controllers\ProfileController;
	use App\Http\Controllers\SiteController;
	use Illuminate\Foundation\Application;
	use Illuminate\Support\Facades\Route;
	use Inertia\Inertia;
	use function Pest\Laravel\get;
	
	Route::get('/', [SiteController::class, 'index'])->name('home');
	Route::get('/about-the-project', [SiteController::class, 'about'])->name('about');
	Route::get('/partners', [SiteController::class, 'partners'])->name('partners');
