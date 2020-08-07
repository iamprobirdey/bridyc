<?php

namespace App\Http\Middleware;

use Closure;
use App\Verification;
use Exception;
use Illuminate\Support\Facades\Auth;

class CheckVerification
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
        if(
        Auth::user()->is_verified() &&
        (
        collect([
                'user/dashboard',
                'user/dashboard/channel',
                'user/dashboard/edit'
                ])
                ->contains($request->path()))
        ){
            return redirect('user/dashboard/verification');
        }
        if(!Auth::user()->is_verified()
            && $request->path() === 'user/dashboard/verification'
        ){
            return redirect('user/dashboard/');
        }
        return $next($request);
    }
}
