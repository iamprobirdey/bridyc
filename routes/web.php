<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', 'HomeController@test');

Route::get('test','HomeController@test');

Route::get('admin/login','Admin\AdminAuthController@showAdminLoginForm')->name('admin.login');
Route::post('admin/login','Admin\AdminAuthController@login');
Route::post('admin/logout','Admin\AdminAuthController@adminLogout')->name('admin.logout');

//Route::post('register','Auth\RegisterController@postRegister');
//Route::post('login', 'Auth\LoginController@login');
//Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::group([
    'name' => 'admin.',
    'prefix' => 'admin',
    'middleware' => ['auth:admin']
], function () {
    Route::get('/','Admin\AdminController@index')->name('admin');
    Route::group([
        'name' => 'country.',
        'prefix' => 'country'
    ], function () {
        Route::get('/','Admin\CountryController@index');
        Route::get('create','Admin\CountryController@create');
        Route::post('create','Admin\CountryController@store')->name('admin.country.create');
        Route::get('updating/{id}','Admin\CountryController@updating');
        Route::post('update/{id}','Admin\CountryController@update')->name('admin.country.update');
    });
    Route::group([
        'name' => 'state.',
        'prefix' => 'state'
    ], function () {
        Route::get('/','Admin\StateController@index');
        Route::get('create','Admin\StateController@create');
        Route::post('create','Admin\StateController@store')->name('admin.state.create');
        Route::get('delete/{id}','Admin\StateController@delete');
        Route::get('updating/{id}','Admin\StateController@updating');
        Route::post('update/{id}','Admin\StateController@update')->name('admin.state.update');
    });

    Route::group([
        'name' => 'district.',
        'prefix' => 'district'
    ], function () {
        Route::get('/','Admin\DistrictController@index');
        Route::get('create','Admin\DistrictController@create');
        Route::post('create','Admin\DistrictController@store')->name('admin.district.create');
        Route::get('delete/{id}','Admin\DistrictController@delete');
        Route::get('updating/{id}','Admin\DistrictController@updating');
        Route::post('update/{id}','Admin\DistrictController@update')->name('admin.district.update');
    });

    Route::group([
        'name' => 'village.',
        'prefix' => 'village'
    ], function () {
        Route::get('/','Admin\VillageController@index');
        Route::get('create','Admin\VillageController@create');
        Route::post('create','Admin\VillageController@store')->name('admin.village.create');
        Route::get('delete/{id}','Admin\VillageController@delete');
        Route::get('updating/{id}','Admin\VillageController@updating');
        Route::post('update/{id}','Admin\VillageController@update')->name('admin.village.update');
    });

    Route::group([
        'name' => 'stream.',
        'prefix' => 'stream'
    ], function () {
        Route::get('/','Admin\StreamController@index');
        Route::get('create','Admin\StreamController@create');
        Route::post('create','Admin\StreamController@store')->name('admin.stream.create');
        Route::get('delete/{id}','Admin\StreamController@delete');
        Route::get('updating/{id}','Admin\StreamController@updating');
        Route::post('update/{id}','Admin\StreamController@update')->name('admin.stream.update');
    });

    Route::group([
        'name' => 'board.',
        'prefix' => 'board'
    ], function () {
        Route::get('/','Admin\BoardController@index');
        Route::get('create','Admin\BoardController@create');
        Route::post('create','Admin\BoardController@store')->name('admin.board.create');
        Route::get('delete/{id}','Admin\BoardController@delete');
        Route::get('updating/{id}','Admin\BoardController@updating');
        Route::post('update/{id}','Admin\BoardController@update')->name('admin.board.update');
    });

    Route::group([
        'name' => 'standard.',
        'prefix' => 'standard'
    ], function () {
        Route::get('/','Admin\StandardController@index');
        Route::get('create','Admin\StandardController@create');
        Route::post('create','Admin\StandardController@store')->name('admin.standard.create');
        Route::get('delete/{id}','Admin\StandardController@delete');
        Route::get('updating/{id}','Admin\StandardController@updating');
        Route::post('update/{id}','Admin\StandardController@update')->name('admin.standard.update');
    });
    Route::group([
        'name' => 'language.',
        'prefix' => 'language'
    ], function () {
        Route::get('/','Admin\LanguageController@index');
        Route::get('create','Admin\LanguageController@create');
        Route::post('create','Admin\LanguageController@store')->name('admin.language.create');
        Route::get('delete/{id}','Admin\LanguageController@delete');
        Route::get('updating/{id}','Admin\LanguageController@updating');
        Route::post('update/{id}','Admin\LanguageController@update')->name('admin.language.update');
    });

    Route::group([
        'name' => 'verification.',
        'prefix' => 'verification'
    ], function () {
        Route::get('/','Admin\VerificationController@index');
        Route::get('api/updatingforon/{userId}/{id}','Admin\VerificationController@updatingforon');
        Route::get('api/updatingforoff/{userId}/{id}','Admin\VerificationController@updatingforoff');
        Route::get('api/updatingforblock/{userId}/{id}','Admin\VerificationController@updatingforblock');
    });

});

Route::group([
    'name' => 'user.',
    'prefix' => 'user/dashboard',
    'middleware' => ['auth','can:institute dashboard','check_verification']
], function () {
    Route::get('/','User\DashboardController@index')->name('institute');
    Route::get('verification','User\DashboardController@verification')->name('verification');
    Route::get('channel','User\DashboardController@channel');
    Route::get('edit','User\DashboardController@editChannel');
    Route::group([
        'name' => 'api.',
        'prefix' => 'api'
        //    'middleware' => 'auth'
    ], function () {
        //Infrastructure
        Route::get('getUserData','User\InfrastructureController@getUserData');
        Route::post('infra/store/{id}','User\InfrastructureController@storeUserInformation');
        //Website
        Route::get('/website','User\WebsiteController@getWebsiteData');
        Route::post('website','User\WebsiteController@storeWebsiteData');
        Route::post('website/edit','User\WebsiteController@editWebsiteData');
        //Description
        Route::get('/description','User\DescriptionController@getDescriptionData');
        Route::post('description','User\DescriptionController@storeDescriptionData');
        Route::post('description/edit','User\DescriptionController@editDescriptionData');
        //Cover
        Route::get('cover','User\ImageController@getCoverData');
        Route::post('cover/upload','User\ImageController@storeImageCover');
        //Icon
        Route::get('icon','User\ImageController@getIconData');
        Route::post('icon/upload','User\ImageController@storeImageIcon');
                //->middleware('optimizeImages');
        //Verification
        Route::post('verification','User\VerificationController@getVerificationData');
        //Standard
        Route::get('standard','User\StandardController@getStandardData');
        Route::post('standard','User\StandardController@store');
        //Stream
        Route::get('stream','User\StreamController@getStreamData');
        Route::post('stream','User\StreamController@store');
        //Board
        Route::get('board','User\BoardController@getBoardData');
        Route::post('board','User\BoardController@store');
        //Social
        Route::get('social','User\SocialController@getSocialData');
        Route::post('social','User\SocialController@store');

    });
});


Route::get('/','ChannelController@index');
Route::get('/application','HomeController@application');
Route::get('/faq','HomeController@faq');
Route::get('/contact','HomeController@contact');
Route::get('/privacy','HomeController@privacy');
Route::get('/terms','HomeController@terms');

Route::get('institute/register','Auth\InstituteController@instituteRegister');
Route::post('institute/register','Auth\InstituteController@postRegister');


Route::get('channel/{slug}','ChannelController@getChannelBySlug');


// Route::group([
//     'name' => 'api.',
//     'prefix' => 'api'
// ], function () {

// });







