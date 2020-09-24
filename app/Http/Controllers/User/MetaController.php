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

    public function store($metaId, StoreMetaKeywordsDescriptionsValidation $request)
    {
        $this->authorize('superadmin', auth()->user());

        $channel = Channel::findOrFail($metaId);
        $channel->meta_keywords = $request->validated()['meta_keywords'];
        $channel->meta_descriptions = $request->validated()['meta_descriptions'];
        $channel->save();

        return response()->json([
            'message' => true
        ]);
    }
}
