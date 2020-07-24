<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Channel;
use App\State;

class ChannelCreatingProcessor implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $userData;
    public $tries = 3;

    public $timeout = 200;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($verification)
    {
        $this->userData = $verification;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $state = State::findOrFail($this->userData->state_id);
        $channel = Channel::create([
            'user_id' => Auth::id(),
            'state_id' => $this->userData->state_id,
            'district_id' => $this->userData->district_id,
            'village_id' => $this->userData->village_id,
            'language_id' => $this->userData->language_id,
            'title' => $this->userData->title,
            'slug' => Str::slug($this->userData->title.'-'.$state->name),
            ]);
            $channel->extra_attributes->set('social.facebook', null);
            $channel->extra_attributes->set('social.youtube', null);
            $channel->extra_attributes->set('social.linkedin', null);
            $channel->extra_attributes->set('social.instagram', null);
            $channel->save();
    }
}
