<?php

namespace App\Http\Controllers;

use App\Channel;
use App\Podcast;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index()
    {
        $channel = Channel::where('status', 1)->first();
        $podcast = Podcast::orderBy('created_at', 'desc')->first();
        return response()->view('sitemap.index', [
            'channel' => $channel,
            'podcast' => $podcast,
        ])
            ->header('Content-Type', 'text/xml');
    }

    public function static()
    {
        return response()->view('sitemap.static')
            ->header('Content-Type', 'text/xml');
    }

    public function channels()
    {
        $channels = Channel::where('status', 1)->get();
        return response()->view('sitemap.index', [
            'channels' => $channels,
        ])
            ->header('Content-Type', 'text/xml');
    }
}
