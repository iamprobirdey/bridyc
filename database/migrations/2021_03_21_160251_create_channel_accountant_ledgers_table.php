<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelAccountantLedgersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channel_accountant_ledgers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('channel_accountant_ledger_id')->nullable();
            $table->foreignId('channel_id')->constrained()->onDelete('cascade');
            $table->string('name');
            $table->string('payment_type');
            $table->string('balance');
            $table->boolean('admission_check');
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
        Schema::dropIfExists('channel_accountant_ledgers');
    }
}
