<?php

namespace App\Providers;

use App\StudentSubject;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
         'App\User' => 'App\Policies\UserPolicy',
         'App\StudentSubject' => 'App\Policies\StudentSubjectPolicy',
         'App\UserInformation' => 'App\Policies\UserInformationPolicy',
         'App\Channel' => 'App\Policies\ChannelPolicy',

    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
