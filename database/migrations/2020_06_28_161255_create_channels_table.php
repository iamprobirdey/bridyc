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
            $table->integer('user_id')->unsigned();
            $table->integer('state_id')->unsigned();
            $table->integer('district_id')->unsigned();
            $table->integer('village_id')->unsigned();
            $table->integer('language_id')->unsigned();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('icon_avatar')->nullable();
            $table->string('cover_avatar')->nullable();
            $table->string('website_link')->nullable();
            $table->string('no_of_class')->nullable();
            $table->string('boys_toilet')->nullable();
            $table->string('girls_toilet')->nullable();
            $table->string('computer_learning')->nullable();
            $table->string('electricity')->nullable();
            $table->string('wall')->nullable();
            $table->string('library')->nullable();
            $table->string('no_of_books')->nullable();
            $table->string('playground')->nullable();
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
