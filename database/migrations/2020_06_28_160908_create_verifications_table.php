<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verifications', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned();
            $table->integer('state_id')->nullable();
            $table->integer('district_id')->nullable();
            $table->integer('village_id')->nullable();
            $table->integer('language_id')->nullable();
            $table->string('udise')->nullable();
            $table->string('title')->nullable();
            $table->string('location')->nullable();
            $table->string('ownership')->nullable();
            $table->string('founded')->nullable();
            $table->string('pin')->nullable();
            $table->string('gender')->nullable();
            $table->tinyInteger('status')->default(0); //default = 0,submitted = 1,verified = 2, block = 3
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
        Schema::dropIfExists('verifications');
    }
}
