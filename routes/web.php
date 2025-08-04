<?php

use App\Http\Controllers\ProfileController;
	use App\Http\Controllers\SiteController;
	use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SiteController::class, 'index'])->name('home');
Route::get('/about-the-project', [SiteController::class, 'about'])->name('about');
