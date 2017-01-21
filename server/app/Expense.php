<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    //
    protected $fillable = ['letter_number','actual_cost','donation','date','patient_id','cost_type_id'];

}
