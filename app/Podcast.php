<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Podcast extends Model
{
    protected $fillable = [
                'image_path',
                'thumbnail',
                'name',
                'designation',
                'summary',
                'youtube_link'
    ];
}
