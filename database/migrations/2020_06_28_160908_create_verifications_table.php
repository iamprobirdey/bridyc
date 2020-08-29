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
            $table->integer('state_id');
            $table->integer('district_id');
            $table->integer('village_id');
            $table->integer('language_id');
            $table->string('udise');
            $table->string('title');
            $table->string('location');
            $table->string('ownership');
            $table->string('founded');
            $table->string('pin');
            $table->string('gender');
            $table->string('slug_creation')->default('not-created');
            $table->tinyInteger('status')->default(1); //default = 1,verified = 2, block = 3
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
