<?php
	
	use App\Http\Controllers\ProfileController;
	use App\Http\Controllers\SiteController;
	use Illuminate\Foundation\Application;
	use Illuminate\Support\Facades\Route;
	use Inertia\Inertia;
	use function Pest\Laravel\get;
	
	Route::get('/', [SiteController::class, 'about'])->name('about');
	Route::get('/partners', [SiteController::class, 'partners'])->name('partners');
	Route::get('/work-packages', [SiteController::class, 'workPackages'])->name('work-packages');
	Route::get('/results', [SiteController::class, 'results'])->name('results');
	Route::get('/documents', [SiteController::class, 'documents'])->name('documents');
	Route::get('/contact', [SiteController::class, 'contact'])->name('contact');