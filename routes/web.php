<?php

use App\Channel;
use App\User;
use App\UserEducation;
use App\UserInstitute;
use Carbon\Carbon;
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

Route::get('/pass1', function () {
    return view('auth.passwords.confirm');
});

Route::get('/pass2', function () {
    return view('auth.passwords.email');
});
Route::get('/pass3', function () {
    return view('auth.passwords.reset');
});



Route::get('/home', 'HomeController@test');

Route::get('hobby', function () {
    $user4 = User::create([
        'name' => Str::random(10),
        'email' => 'institute2@gmail.com',
        'password' => '$2y$10$A5qfm/Ssy2JOTLf5PQKOxeIFrLTOUaK5nwONeWstGu07wQDAEciwK',
        'username' => 'institute2',
        'user_type' => 'institute',

    ]);


    $user4->update(['email_verified_at' => Carbon::now()]);

    $user4->assignRole('institute');
});

Auth::routes(['verify' => true]);

Route::get('test', 'Teacher\PhoneNumberVerificationController@phoneVerification');

Route::get('google/login', 'Auth\GoogleLoginController@getGoogleLogIn')->middleware('guest');
Route::get('google/response', 'Auth\GoogleLoginController@getBackGoogleValiationStore')->middleware('guest');

Route::get('facebook-login', 'Auth\FacebookLoginController@getFacebookLogIn');
Route::get('facebook/response', 'Auth\FacebookLoginController@getBackFacebookValiationStore');

Route::get('validation/user/role/{user:email}', 'Auth\ValidateUserRoleController@validateRole')->name('validate.user.role');
//http://localhost:3000/facebook/response


//Route::post('register','Auth\RegisterController@postRegister');
//Route::post('login', 'Auth\LoginController@login');
//Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::group([
    'name' => 'admin.',
    'prefix' => 'admin',
    'middleware' => ['can:admin']
], function () {
    Route::get('/', 'Admin\AdminController@index')->name('admin');
    Route::group([
        'name' => 'contact.',
        'prefix' => 'contact'
    ], function () {
        Route::get('/', 'Admin\ContactUsController@index');
        Route::post('/enquiry/{contact:id}', 'Admin\ContactUsController@enquiry')->name('enquiry');
    });
    Route::group([
        'name' => 'podcast.',
        'prefix' => 'podcast'
    ], function () {
        Route::get('/', 'Admin\PodcastController@index');
        Route::get('create', 'Admin\PodcastController@create');
        Route::post('create', 'Admin\PodcastController@store')->name('admin.podcast.create');
        Route::get('updating/{podcast:id}', 'Admin\PodcastController@updating');
        Route::post('update/{podcast:id}', 'Admin\PodcastController@update')->name('admin.podcast.update');
        Route::get('delete/{podcast:id}', 'Admin\PodcastController@delete');
    });
    Route::group([
        'name' => 'country.',
        'prefix' => 'country'
    ], function () {
        Route::get('/', 'Admin\CountryController@index')->name('admin.country.index');
        Route::get('create', 'Admin\CountryController@create');
        Route::post('create', 'Admin\CountryController@store')->name('admin.country.create');
        Route::get('updating/{country:id}', 'Admin\CountryController@updating');
        Route::post('update/{country:id}', 'Admin\CountryController@update')->name('admin.country.update');
    });
    Route::group([
        'name' => 'state.',
        'prefix' => 'state'
    ], function () {
        Route::get('/', 'Admin\StateController@index');
        Route::get('create', 'Admin\StateController@create');
        Route::post('create', 'Admin\StateController@store')->name('admin.state.create');
        Route::get('updating/{id}', 'Admin\StateController@updating');
        Route::post('update/{id}', 'Admin\StateController@update')->name('admin.state.update');
    });

    Route::group([
        'name' => 'district.',
        'prefix' => 'district'
    ], function () {
        Route::get('/', 'Admin\DistrictController@index');
        Route::get('create', 'Admin\DistrictController@create');
        Route::post('create', 'Admin\DistrictController@store')->name('admin.district.create');
        Route::get('updating/{id}', 'Admin\DistrictController@updating');
        Route::post('update/{id}', 'Admin\DistrictController@update')->name('admin.district.update');
    });

    Route::group([
        'name' => 'village.',
        'prefix' => 'village'
    ], function () {
        Route::get('/', 'Admin\VillageController@index');
        Route::get('create', 'Admin\VillageController@create');
        Route::post('create', 'Admin\VillageController@store')->name('admin.village.create');
        Route::get('updating/{id}', 'Admin\VillageController@updating');
        Route::post('update/{id}', 'Admin\VillageController@update')->name('admin.village.update');
    });

    Route::group([
        'name' => 'board.',
        'prefix' => 'board'
    ], function () {
        Route::get('/', 'Admin\BoardController@index');
        Route::get('create', 'Admin\BoardController@create');
        Route::post('create', 'Admin\BoardController@store')->name('admin.board.create');
        Route::get('updating/{id}', 'Admin\BoardController@updating');
        Route::post('update/{id}', 'Admin\BoardController@update')->name('admin.board.update');
    });

    Route::group([
        'name' => 'standard.',
        'prefix' => 'standard'
    ], function () {
        Route::get('/', 'Admin\StandardController@index');
        Route::get('create', 'Admin\StandardController@create');
        Route::post('create', 'Admin\StandardController@store')->name('admin.standard.create');
        Route::get('updating/{id}', 'Admin\StandardController@updating');
        Route::post('update/{id}', 'Admin\StandardController@update')->name('admin.standard.update');
    });
    Route::group([
        'name' => 'subject.',
        'prefix' => 'subject'
    ], function () {
        Route::get('/', 'Admin\SubjectController@index');
        Route::get('create', 'Admin\SubjectController@create');
        Route::post('create', 'Admin\SubjectController@store')->name('admin.subject.create');
        Route::get('updating/{id}', 'Admin\SubjectController@updating');
        Route::post('update/{id}', 'Admin\SubjectController@update')->name('admin.subject.update');
    });

    Route::group([
        'name' => 'hobby.',
        'prefix' => 'hobby'
    ], function () {
        Route::get('/', 'Admin\HobbiesController@index');
        Route::get('create', 'Admin\HobbiesController@create');
        Route::post('create', 'Admin\HobbiesController@store')->name('admin.hobby.create');
        Route::get('updating/{id}', 'Admin\HobbiesController@updating');
        Route::post('update/{id}', 'Admin\HobbiesController@update')->name('admin.hobby.update');
    });

    Route::group([
        'name' => 'language.',
        'prefix' => 'language'
    ], function () {
        Route::get('/', 'Admin\LanguageController@index');
        Route::get('create', 'Admin\LanguageController@create');
        Route::post('create', 'Admin\LanguageController@store')->name('admin.language.create');
        Route::get('updating/{id}', 'Admin\LanguageController@updating');
        Route::post('update/{id}', 'Admin\LanguageController@update')->name('admin.language.update');
    });

    Route::group([
        'name' => 'verification.',
        'prefix' => 'verification'
    ], function () {
        Route::get('/', 'Admin\VerificationController@index');

        Route::get('api/updatingforon/{user:id}/{verification:id}', 'Admin\VerificationController@updatingforon');
        Route::get('api/updatingforoff/{user:id}/{verification:id}', 'Admin\VerificationController@updatingforoff');
        Route::get('api/updatingforblock/{user:id}/{id}', 'Admin\VerificationController@updatingforblock');
        Route::post('api/channel-slug/{channel:user_id}', 'Admin\VerificationController@slugGenerator');
        Route::get('api/get-slug-of-channel/{user:id}', 'Admin\VerificationController@getSlugOfChannel');
        //Add meta-keywords and meta-description
        Route::post('api/keywords/description/{id}', 'User\MetaController@store');
        Route::get('api/delete/user/{user:id}', 'Admin\VerificationController@deleteUser');
    });
});

Route::get('/', 'ChannelController@index');
Route::get('/application', 'HomeController@application');
Route::get('/faq', 'HomeController@faq');
Route::get('/contact', 'HomeController@contact');
Route::post('contact', 'ContactController@store');
Route::get('/privacy', 'HomeController@privacy');
Route::get('/terms', 'HomeController@terms');
Route::get('/about', 'HomeController@about')->name('about');

Route::get('institute/register', 'Auth\InstituteController@instituteRegister');
Route::post('institute/register', 'Auth\RegisterController@register');

Route::get('channel/{channel:slug}', 'ChannelController@getChannelBySlug');



Route::group([
    'name' => 'user.',
    'prefix' => 'user/dashboard',
    'middleware' => ['auth', 'can:institute', 'check_verification', 'verified']
], function () {
    Route::get('verification', 'User\DashboardController@verification')->name('verification');
    Route::get('/{channel:title}', 'User\DashboardController@index')->name('channel.index');
    Route::get('channel/{channel:title}', 'User\DashboardController@channel')->name('channel.show');
    Route::get('edit/{channel:title}', 'User\DashboardController@editChannel')->name('channel.edit');
    Route::get('edit/profile/{user:username}', 'User\DashboardController@profile')->name('user.profile');
    Route::get('achievement/{channel:title}', 'User\DashboardController@acheivement')->name('channel.achievement');
    Route::get('teacher/{channel:title}', 'User\DashboardController@teacher')->name('channel.teacher');
    Route::get('new/feature/{channel:title}', 'User\DashboardController@newFeature')->name('channel.feature');
    Route::get('notification/{channel:title}', 'User\DashboardController@notification')->name('channel.notification');
});

Route::get('edit/student/profile/{user:username}', 'Student\ProfileController@index')->middleware(['can:student'])->middleware('verified');

Route::get('edit/teacher/profile/{user:username}', 'Teacher\ProfileController@index')->middleware(['can:teacher'])->middleware('verified');


Route::group([
    'name' => 'api.',
    'prefix' => 'api',
    'middleware' => 'verified'
], function () {
    //Independent
    Route::get('store/channel/session/{channelId}', 'ChannelController@storeChannelSession');

    Route::group([
        'middleware' => ['can:student']
    ], function () {
        //Student ******
        Route::post('profile/edit/username/{user:id}', 'Student\ProfileController@storeUsername');
        Route::post('profile/edit/address/{user:id}', 'Student\ProfileController@storeAddress');
        Route::post('profile/edit/address/channel/{user:id}', 'Student\ProfileController@storeChannel');
        Route::post('profile/edit/subject/{user:id}', 'Student\ProfileController@storeSubjectData');
        Route::post('profile/edit/hobbies/{user:username}', 'Student\ProfileController@storeHobbyData');
        Route::post('profile/image/upload/{user:id}', 'Student\ProfileController@storeAvatar');
        Route::post('profile/edit/phone/{user:id}', 'Student\ProfileController@storePhoneNumber');
    });

    Route::group([
        'middleware' => ['can:teacher']
    ], function () {
        //Teacher ****
        Route::post('profile/teacher/edit/username/{user:id}', 'Teacher\ProfileController@storeUsername');
        Route::post('profile/teacher/edit/address/{user:id}', 'Teacher\ProfileController@storeAddress');
        Route::post('profile/teacher/edit/channel/{user:id}', 'Teacher\ProfileController@storeChannel');
        Route::post('profile/teacher/edit/subject/{user:id}', 'Teacher\ProfileController@storeSubjectData');
        Route::post('profile/teacher/image/upload/{user:id}', 'Teacher\ProfileController@storeAvatar');
        Route::post('profile/teacher/edit/phone/number/{user:id}', 'Teacher\ProfileController@phoneStore');
        Route::post('profile/teacher/edit/phone/number/verify/{user:id}', 'Teacher\PhoneNumberVerificationController@phoneVerification');
        Route::get('teacher/request/for/channel/{user:id}/{channel:id}', 'Teacher\RequestForChannelController@requestForChannel');
    });

    Route::group([
        'middleware' => ['can:institute']
    ], function () {
        //Institute ******
        //Infrastructure
        Route::get('getUserData', 'User\InfrastructureController@getUserData');
        Route::post('infra/store/{id}', 'User\InfrastructureController@storeUserInformation');
        //Website
        Route::get('website', 'User\WebsiteController@getWebsiteData');
        Route::post('website', 'User\WebsiteController@storeWebsiteData');
        Route::post('website/edit', 'User\WebsiteController@editWebsiteData');
        //Description
        Route::get('description', 'User\DescriptionController@getDescriptionData');
        Route::post('description', 'User\DescriptionController@storeDescriptionData');
        Route::post('description/edit', 'User\DescriptionController@editDescriptionData');
        //Cover
        Route::get('cover', 'User\ImageController@getCoverData');
        Route::post('cover/upload', 'User\ImageController@storeImageCover');
        //Icon
        Route::get('icon', 'User\ImageController@getIconData');
        Route::post('icon/upload', 'User\ImageController@storeImageIcon');
        //->middleware('optimizeImages');
        //Verification
        Route::post('verification', 'User\VerificationController@getVerificationData');
        //Standard
        Route::get('standard', 'User\StandardController@getStandardData');
        Route::post('standard', 'User\StandardController@store');
        //Board
        Route::get('board', 'User\BoardController@getBoardData');
        Route::post('board', 'User\BoardController@store');
        //Social
        Route::get('social', 'User\SocialController@getSocialData');
        Route::post('social', 'User\SocialController@store');
        //Profile
        Route::post('gender/vission', 'User\ProfileController@storeGender');
        Route::post('profile/avatar', 'User\ProfileController@storeAvatar');
        //Add Education
        Route::post('add/education', 'User\ProfileController@storeEducation');
        Route::post('add/education/edit/{user_education:id}', 'User\ProfileController@storeEditEducation');
        //Activity
        Route::post('add/activity', 'User\ProfileController@storeActivity');
        Route::post('edit/activity/{user_activity:id}', 'User\ProfileController@editActivity');
        //Achievement Upload
        Route::post('achievement/add', 'User\AchievementController@store');
        Route::post('achievement/edit/{acheivement:id}', 'User\AchievementController@editStore');

        //Accept Request of teacher or delete
        Route::post('accept/request/of/teacher/{user_channel_request:id}', 'User\TeachersController@acceptRequest');
        Route::post('delete/request/of/teacher/{user_channel_request:id}', 'User\TeachersController@deleteRequest');

        //Teacher Deletion
        Route::post('delete/teacher/{channel_teacher:id}', 'User\TeachersController@delete');
        //Infructure Image Upload
        Route::post('college/image/upload/{channel:id}', 'User\ChannelCollegeImagesController@store');
        //Infructure Image delete
        Route::post('delete/college/image/{channel_college_image:id}', 'User\ChannelCollegeImagesController@delete');
        //Phone Store
        Route::post('edit/channel/phone/number/{user:id}', 'User\ProfileController@phoneNumberstore');
        //Store Channel Notifiation
        Route::post('channel/add/notification/{channel:id}', 'User\ChannelNotificationController@store');
        //Delete channel Notification
        Route::post('channel/delete/notification/{channel_notifications:id}', 'User\ChannelNotificationController@delete');
    });
});

//institue multi image upload ==> done
//Admin side delete user problem ==> done
//user verification layout changes with modal ==> done
//teacher friend request problem ==>
//Channel profile picture ==> done
//Notification in channel
