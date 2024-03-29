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
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('state_id')->constrained()->onDelete('cascade');
            $table->foreignId('district_id')->constrained()->onDelete('cascade');
            $table->foreignId('village_id')->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('udise');
            $table->string('title', 40);
            $table->string('location');
            $table->char('ownership', 20);
            $table->string('founded');
            $table->string('pin', 6);
            $table->char('gender', 20);
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
