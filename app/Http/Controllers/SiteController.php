<?php
	
	namespace App\Http\Controllers;
	
	use Illuminate\Http\Request;
	use Inertia\Inertia;
	
	class SiteController extends Controller
	{
		//
		public function index()
		{
			return Inertia::render('Index');
		}
		
		public function about()
		{
			return Inertia::render('About');
		}
		
		public function workPackages()
		{
			return Inertia::render('WorkPackages');
		}
		
		public function news()
		{
			return Inertia::render('News');
		}
		
		public function singleNews($slug)
		{
			return Inertia::render('SingleNews', [
				'slug' => fn () => $slug
			]);
		}
		
		public function partners()
		{
			return Inertia::render('Partners');
		}
		
		public function results()
		{
			return Inertia::render('Results');
		}
		
		public function documents()
		{
			return Inertia::render('Documents');
		}
		
		public function contact()
		{
			return Inertia::render('Contact');
		}
		
		public function privacy()
		{
			return Inertia::render('Privacy');
		}
		
		public function terms()
		{
			return Inertia::render('Terms');
		}
	}
