<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChannelExpenseIncomesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channel_expense_incomes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channel_id')->constrained()->onDelete('cascade');
            $table->string('expense');
            $table->string('income');
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
        Schema::dropIfExists('channel_expense_incomes');
    }
}
