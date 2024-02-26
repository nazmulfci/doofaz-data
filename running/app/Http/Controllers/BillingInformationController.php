<?php

namespace App\Http\Controllers;

use App\BillingInformation;
use App\ShopBillMonthList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Image;
use File;
class BillingInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=BillingInformation::with('bank')->orderby('id','desc')->get();
        return ['data'=>$data];
    }
    public function getBillOfferList()
    {
        $data=ShopBillMonthList::get();
        return ['data'=>$data];
    }
    public function deleteBillOffer($id)
    {
        $data=ShopBillMonthList::where('id',$id)->delete();
        return ['data'=>$data];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

         
        $strpos=strpos($request->image,';' );
        $sub=substr($request->image,0,$strpos);
        $ex=explode('/',$sub)[1];
        $name=time().".".$ex;
        $img=Image::make($request->image)->resize(950,627);
        $upload_path=public_path()."/images/";
        $img->save($upload_path.$name);
        $form= new BillingInformation();     
        $form->image=$name;      
        $form->bankTypeId=$request->senderbankTypeEntryId;      
        $form->bankId=$request->bankEntryId;      
        $form->save();
        return response()->json('successfully added');
    }
    public function billOffer(Request $request)
    {

         
        $request->validate([
            'countryId' => 'required',
            'title' => 'required',
            'month' => 'required',
            'discountAmount' => 'required',
        ],
        [
          'countryId.required' => 'Select Country.',
          'title.required' => 'Enter Title.',
          'month.required' => 'Enter Month ',
          'discountAmount.required' => 'Enter Discount Amount ',
        ]);

        ShopBillMonthList::insert([
        'countryId' => $request->countryId,
        'title' => $request->title,
        'month' => $request->month,
        'discountAmount' => $request->discountAmount,
        'discountText' => $request->discountText,
        'shopId' => 0,
        'createBy' => 0,
        ]);
        


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $show=BillingInformation::where('bankId',$id)->first();
        return ['show'=>$show];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $form = BillingInformation::where('id',$id)->first();
        $usersImage = public_path("/images/{$form->image}");
        if (File::exists($usersImage)) {
            unlink($usersImage);
        }
       BillingInformation::where('id',$id)->delete();
    }
}
