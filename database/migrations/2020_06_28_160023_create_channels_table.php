<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('state_id')->constrained()->onDelete('cascade');
            $table->foreignId('district_id')->constrained()->onDelete('cascade');
            $table->foreignId('village_id')->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('slug')->index()->unique()->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('meta_descriptions')->nullable();
            $table->string('icon_avatar')->default('institute-logo-default.jpg');
            $table->string('cover_avatar')->default('institute-cover-default.jpg');
            $table->string('website_link')->nullable();
            $table->string('no_of_class')->nullable();
            $table->string('canteen')->nullable();
            $table->string('stationary')->nullable();
            $table->string('boys_hostel', 10)->nullable();
            $table->string('girls_hostel', 10)->nullable();
            $table->string('computer_learning', 10)->nullable();
            $table->string('wall', 10)->nullable();
            $table->string('library', 10)->nullable();
            $table->string('no_of_books')->nullable();
            $table->string('playground', 10)->nullable();
            $table->string('bus_services', 10)->nullable();
            $table->tinyInteger('status')->default(0); // 1 => verified , 2 => block
            $table->schemalessAttributes('extra_attributes');
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
        Schema::dropIfExists('channels');
    }
}
