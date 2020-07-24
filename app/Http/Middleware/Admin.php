<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Admin::where
        // if(!Auth::check()){
        //     abort(404);
        // }
        // if(Auth::user()->role === '3'){
        //     return $next($request);
        }
        // $destination = [
        //     1 => '/',
        //     2 => 'user/dashboard',
        //     3 => 'admin'
        // ];
        // return redirect($destination[Auth::user()->role]);
    }
}
