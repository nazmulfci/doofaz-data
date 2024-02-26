<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

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
        If (env('APP_ENV') !== 'local') {
             $this->app['request']->server->set('HTTPS', true);
        }else{
         \URL::forceScheme('http');
        }
        // if(config('app.env') === 'production') {
        //     URL::forceScheme('https');
        // }

        Schema::defaultStringLength(191);
    }
}
