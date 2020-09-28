<?php

namespace App\Repository;

use App\SocialAccount;
use App\User;
use Carbon\Carbon;
use Laravel\Socialite\Contracts\User as ProviderUser;

class SocialAccountService
{
    public function createOrGetUser($provider)
    {
        $account = SocialAccount::whereProvider('google')
            ->whereProviderUserId($provider->id)
            ->first();

        if ($account) {
            return $account->user;
        } else {
            $account = new SocialAccount([
                'provider_user_id' => $provider->id,
                'provider' => 'google'
            ]);

            $user = User::whereEmail($provider->email)->first();

            if (!$user) {
                $username = $this->getUserName($provider->name);
                if ($provider->user['verified_email']) {
                    User::create([
                        'name' => $provider->name,
                        'email' => $provider->email,
                        'avatar' => $provider->avatar_original,
                        'username' => $username,
                        'email_verified_at' => Carbon::now()

                    ]);
                } else {
                    User::create([
                        'name' => $provider->name,
                        'email' => $provider->email,
                        'avatar' => $provider->avatar_original,
                        'username' => $username,
                        'email_verified_at' => null
                    ]);
                }
            } else {
                SocialAccount::where('user_id', $user->id)->delete();
            }

            $account->user()->associate($user);
            $account->save();

            return $user;
        }
    }

    protected function getUserName($data)
    {
        $username = $data . random_int(1, 1000000);
        $user = User::where('username', $username)->first();
        if ($user === null) return $username;
        $this->getUserName($data);
    }
}
