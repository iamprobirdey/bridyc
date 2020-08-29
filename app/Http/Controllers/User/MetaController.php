<?php

namespace App\Http\Controllers\User;

use App\Channel;
use App\Http\Controllers\Controller;
use App\Http\Requests\Meta\StoreMetaKeywordsDescriptionsValidation;
use Illuminate\Http\Request;

class MetaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(StoreMetaKeywordsDescriptionsValidation $request , $metaId){
        $channel = Channel::findOrFail($metaId);
        //$channel->meta_keywords =
        dd($request->validated());
    }
}
