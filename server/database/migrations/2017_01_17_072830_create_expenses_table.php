<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {

            $table->increments('id');
            $table->integer('letter_number');
            $table->integer('actual_cost');
            $table->integer('donation');
            $table->string('date');
            $table->integer('cost_type');
            $table->integer('patient_fid')->unsigned();

            $table->timestamps();
        });

        Schema::table('expenses', function (Blueprint $table) {

            $table->foreign('patient_fid')->references('file_number')->on('patients')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
    }
}
