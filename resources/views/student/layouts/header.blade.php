<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google Tag Manager -->
    <script>
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8XBJZT');
    </script>

    <!-- End Google Tag Manager -->

    <title>Bridyc-Bridge your chaos</title>
    <meta charset="utf-8">
    {{-- <link rel="dns-prefetch" href="{{env('APP_URL')}}"/>
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    --}}
    <title>@yield('title')</title>
    <link rel="canonical"
        href="{{(isset($_SERVER['HTTPS']) ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'].explode('?', $_SERVER['REQUEST_URI'], 2)[0]}}">
    <meta name="description" content="@yield('desc')">
    <meta name="keywordspa serve" content="@yield('keywords')">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1,user-scalable=0">
    {{-- <meta name="google-site-verification" content="_S07lrEOB4o4njaKYagirshoYplEEP61edOV8nb2-J4" /> --}}
    <link rel="apple-touch-icon" sizes="57x57" href="{{env('APP_URL')}}/fabicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="{{env('APP_URL')}}/fabicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="{{env('APP_URL')}}/fabicon/apple-bicon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="{{env('APP_URL')}}/fabicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="{{env('APP_URL')}}/fabicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="{{env('APP_URL')}}/fabicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="{{env('APP_URL')}}/fabicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="{{env('APP_URL')}}/fabicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="{{env('APP_URL')}}/fabicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="{{env('APP_URL')}}/fabicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{env('APP_URL')}}/fabicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="{{env('APP_URL')}}/fabicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{env('APP_URL')}}/fabicon/favicon-16x16.png">


    <!--Onesignal-->
    {{--<link rel="manifest" href="/onesignal/manifest.json">--}}
    {{-- <link rel="manifest" href="{{env('APP_URL')}}/fabicon/manifest.json"> --}}

    <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content="@yield('s_title')">
    <meta itemprop="description" content="@yield('s_desc')">
    <meta itemprop="image" content="@yield('s_img')">

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="product">
    <meta name="twitter:site" content="{{env('APP_URL')}}">
    <meta name="twitter:title" content="@yield('s_title')">
    <meta name="twitter:description" content="@yield('s_desc')">
    <meta name="twitter:image" content="@yield('s_img')">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{env('APP_URL')}}/fabicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Open Graph data -->
    <meta property="og:url" content="@yield('s_url')" />
    <meta property="og:type" content="@yield('s_type')" />
    <meta property="og:title" content="@yield('s_title')" />
    <meta property="og:description" content="@yield('s_desc')" />
    <meta property="og:image" content="@yield('s_img')" />


    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/index.css">



</head>
<style>
    body {
        overflow-x: hidden;
        width: 100%;
    }
</style>
@yield('css_code')

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8XBJZT" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
