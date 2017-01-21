<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {

            $table->increments('id');
            $table->string('name');
            $table->string('national_code');
            $table->string('idcrd_number');
            $table->string('birt_hdate');
            $table->string('father_name');
            $table->string('birth_place');
            $table->string('living_place');
            $table->integer('file_number');
            $table->string('gender');
            $table->string('phone');
            $table->string('mobile');
            $table->string('cancer_type');
            $table->string('marital_status');
            $table->string('doctor_name');
            $table->string('picture');
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
        Schema::dropIfExists('patients');
    }
}
