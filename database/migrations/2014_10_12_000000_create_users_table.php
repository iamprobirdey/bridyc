<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('username')->unique();
            $table->string('user_type');
            $table->string('avatar')->default('default.jpg');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone')->nullable();
            $table->string('gender')->nullable();
            $table->string('vission')->nullable();
            $table->text('message')->nullable();
            $table->string('password')->nullable();
            $table->integer('status')->default(0); //verified => 1, block => 2
            $table->timestamp('phone_verified')->nullable();
            $table->timestamp('blocked_at')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
