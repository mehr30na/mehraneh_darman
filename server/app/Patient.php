<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //
    protected $fillable = ['name','national_code','idcrd_number','birt_hdate','father_name','birth_place','living_place','file_number','gender','phone','mobile','cancer_type','marital_status','doctor_name','picture'];
}
