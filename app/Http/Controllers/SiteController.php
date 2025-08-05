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
	}
