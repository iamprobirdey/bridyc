<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Institute
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
        // if(!Auth::check()){
        //     return redirect('institute.login');
        // }
        // if(Auth::user()->role === 2){
        //     return $next($request);
        // }
        // $destination = [
        //     1 => '/',
        //     2 => 'user/dashboard',
        //     3 => 'admin'
        // ];
        // return redirect(route($destination[Auth::user()->role]));
    }
}
