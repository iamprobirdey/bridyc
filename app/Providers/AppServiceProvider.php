<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use App\State;
use App\Observers\StateObserver;
use Illuminate\Support\Facades\View;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        State::observe(StateObserver::class);
        View::composer(
            'layouts.sidebar', 'App\Http\View\Composers\SidebarComposer'
        );
    }
}
