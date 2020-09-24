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
        current_user()->is_verified() &&
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
        if(!current_user()->is_verified()
            && $request->path() === 'user/dashboard/verification'
        ){
            return redirect('user/dashboard/'.current_user()->channel->title);
        }
        return $next($request);
    }
}
