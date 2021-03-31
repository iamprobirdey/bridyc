<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdmissionStandardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admission_standards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channel_accountant_admissions_id')->constrained()->onDelete('cascade');
            $table->foreignId('accountant_class_id')->constrained()->onDelete('cascade');
            $table->string('current_class_state')->default('present'); //can be => "old"
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
        Schema::dropIfExists('admission_standards');
    }
}
