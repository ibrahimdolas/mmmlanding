<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        
        <meta name="author" content="İbrahim Dolaş"/>
{{--        <meta name="description" content="{{ _('Children gonna love math!') }}"/>--}}
        <meta name="keywords" content="Math, Children">
        <meta name="robots" content="INDEX,FOLLOW">
        
        <link rel="apple-touch-icon" sizes="57x57" href="/storage/favicons/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/storage/favicons/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/storage/favicons/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/storage/favicons/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/storage/favicons/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/storage/favicons/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/storage/favicons/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/storage/favicons/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/storage/favicons/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/storage/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/storage/favicons/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/storage/favicons/favicon-16x16.png">
        <link rel="manifest" href="/storage/favicons/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/storage/favicons/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
       
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Baloo+2:wght@400..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased" id="page_root">
        @inertia
    </body>
</html>
