<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //
    protected $fillable = [

    				'fullname',
    				'national_code',
    				'idcrd_number',
    				'birt_hdate',
    				'father_name',
    				'birth_place',
    				'birth_village',
    				'living_place',
    				'living_village',
    				'file_number',
    				'gender',
    				'phone',
    				'mobile',
    				'cancer_type',
    				'marital_status',
    				'doctor_name',
    				'picture'

    				];
}
