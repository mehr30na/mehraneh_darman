<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Expense;
use App\Http\Requests;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Expense::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        //
//    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
         $this->validate($request, [
                'letter_number' => 'unique:expenses'

            ]);
        return Expense::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Expense::find($id);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//    public function edit($id)
//    {
//        //
//    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request , $id)
    {
        //
        Expense::find($id)->update($request->all());
        return Expense::find($id);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Expense::destroy($id);
    }




    public function reportDate($s,$e,$c){

        $sdate = str_replace("-", "/", $s);
        $edate = str_replace("-", "/", $e);


        // return [$sdate,$edate];
        $sum = Expense::selectRaw('sum(actual_cost) as actualSum')
        ->whereRaw('str_to_date(`date`,"%Y/%m/%d") between "' . $sdate . '" AND "' . $edate . '" ')
//            ->whereRaw('')
            ->get();

        $expenses = Expense::whereRaw('str_to_date(`date`,"%Y/%m/%d") between "' . $sdate . '" AND "' . $edate . '" ')
            ->get();
        return ['sum' => $sum,'expenses' => $expenses];

    }

    public function expenseByFile($filenum){
//        return $filenum;
        return Expense::where('patient_id', $filenum)->get();
    }


}
