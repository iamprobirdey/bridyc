<?php

namespace App\Http\View\Composers;
use Illuminate\View\View;
use App\Verification;
use Auth;
class SidebarComposer
{
    public function __construct()
    {
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $verificationStatus = auth()->user()->status;
        $view->with('verificationStatus', $verificationStatus);
    }
}
