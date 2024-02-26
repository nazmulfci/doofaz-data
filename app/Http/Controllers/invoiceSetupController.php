<?php

namespace App\Http\Controllers;


use Image;
use File;
use Carbon\Carbon;
use App\User;
use App\models\Admin;
use Illuminate\Http\Request;
use App\InvoiceSetup;
use App\InvoiceSetupDetails;
use App\invoiceForTypeList;
use App\ShopTypeEntry;
use App\invoiceTypeList;
use App\Http\Resources\InvoiceSetup as InvoiceSetupResource;
use Illuminate\Support\Facades\Auth;

class invoiceSetupController extends Controller
{


    
    public function __construct()
    {
        $this->middleware('auth:,admin');
    }




    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return InvoiceSetupResource::collection(InvoiceSetup::orderBy('id','DESC')->get());
    }


    public function checkDemoId(){
        $shopTypeId = Admin::where('shopId',Auth::user()->shopId)->first()->shopSirialId;
        $have = 0;
        if(ShopTypeEntry::where('demoShopTypeCode',$shopTypeId)->exists()){
            $have = 1;
        }

        return ['thisIsDemoId' => $have];
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
        $this->validate($request, [
            'invoiceForId' => 'required',
            'invoiceTypeId' => 'required',
            'invoiceFormetId' => 'required',
            // 'logo' => 'required',
            'companyName' => 'required',
            'address' => 'required',
            'mobileNo' => 'required',
            'email' => 'required',
            'website' => 'required',
        ],
        [
            'invoiceForId.required' => "Please Select invoice for.",
            'invoiceTypeId.required' => "Please Select invoice type.",
            'invoiceFormetId.required' => "Please Select invoice Formet.",
            // 'logo.required' => "Please Select Image.",
            'companyName.required' => "Please Enter Company Name.",
            'address.required' => "Please Enter Address.",
            'mobileNo.required' => "Please Enter Mobile No.",
            'email.required' => "Please Enter Email.",
            'website.required' => "Please Enter Website.",
        ]);
  
              
       

                if(1){


                    // replace photo when update 
                                // $form = model::find($id);
                                // $image = public_path("/folder name/{$form->image}"); //get prevous image name
                                // if(File::exists($image)){
                                //     unlink($image);
                                // }
                    // replace photo when update 
                    




                    $InvoiceSetupDetails  = new InvoiceSetupDetails();

                    if(strpos($request->logo,';')){

                    $strpos = strpos($request->logo,';');
                    $sub = substr($request->logo,0,$strpos);
                    $ex = explode('/',$sub)[1];
                    $name = time().".".$ex;
                    $img = Image::make($request->logo);
                    $upload_path = public_path()."/images/invoice_logo/";
                    $img->save($upload_path.$name);


                    if(InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$request->invoiceForId)->where('invoiceTypeId',$request->invoiceTypeId)->exists()){
                        $imageDb = InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$request->invoiceForId)->where('invoiceTypeId',$request->invoiceTypeId)->first()->logo;
                        if($imageDb){
                            unlink('images/invoice_logo/'.$imageDb);
                        }
                    }

                        $InvoiceSetupDetails->logo = $name;
                    }
                    else{
                        $name = '';
                        if(InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$request->invoiceForId)->where('invoiceTypeId',$request->invoiceTypeId)->exists()){
                            $imageDb = InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$request->invoiceForId)->where('invoiceTypeId',$request->invoiceTypeId)->first()->logo;
                            $name = $imageDb;
                        }
                        $InvoiceSetupDetails->logo = $name;
                    }




                    // $logo = $request->file('logo');
                    // if($logo){
                    //     $logo_name = md5(time()).'.'.$logo->getClientOriginalExtension();
                    //     $logo->move('public/images',$logo_name);
                    // }
                    // else{
                    //     $logo_name = 'img.png';
                    // }



                    
                  

                    InvoiceSetupDetails::where('shopId',Auth::user()->shopId)->where('invoiceForId',$request->invoiceForId)->where('invoiceTypeId',$request->invoiceTypeId)->delete();
                    

                    
                    $InvoiceSetupDetails->shopId = Auth::user()->shopId;
                    $InvoiceSetupDetails->invoiceForId = $request->get('invoiceForId');
                    $InvoiceSetupDetails->invoiceTypeId = $request->get('invoiceTypeId');
                    $InvoiceSetupDetails->invoiceFormetId = $request->get('invoiceFormetId');
                    $InvoiceSetupDetails->address = $request->get('address');
                    $InvoiceSetupDetails->companyName = $request->get('companyName');
                    $InvoiceSetupDetails->mobileNo = $request->get('mobileNo');
                    $InvoiceSetupDetails->email = $request->get('email');
                    $InvoiceSetupDetails->website = $request->get('website');
                    $InvoiceSetupDetails->toText = $request->get('toText');
                    $InvoiceSetupDetails->titleText = $request->get('titleText');
                    $InvoiceSetupDetails->themeColor = $request->get('themeColor');
                    $InvoiceSetupDetails->subTotal = $request->get('subTotal');
                    $InvoiceSetupDetails->vat = $request->get('vat');
                    $InvoiceSetupDetails->discount = $request->get('discount');
                    $InvoiceSetupDetails->grandTotal = $request->get('grandTotal');
                    $InvoiceSetupDetails->noticeTitle = $request->get('noticeTitle');
                    $InvoiceSetupDetails->noticeDetails = $request->get('noticeDetails');
                    $InvoiceSetupDetails->generatedFrom = $request->get('generatedFrom');
                    $InvoiceSetupDetails->thankyou = $request->get('thankyou');
                    $InvoiceSetupDetails->save();




                                // InvoiceSetupDetails::create([
                                //     'invoiceSetupId' => $last_id,
                                //     'logo' => '',
                                //     'address' => $request->get('address'),
                                //     'toText' => $request->get('toText'),
                                //     'titleText' => $request->get('titleText'),
                                //     'themeColor' => $request->get('themeColor'),
                                //     'subTotal' => $request->get('subTotal'),
                                //     'vat' => $request->get('vat'),
                                //     'discount' => $request->get('discount'),
                                //     'grandTotal' => $request->get('grandTotal'),
                                //     'noticeTitle' => $request->get('noticeTitle'),
                                //     'noticeDetails' => $request->get('noticeDetails'),
                                //     'generatedFrom' => $request->get('generatedFrom'),
                                //     'thankyou' => $request->get('thankyou'),
                                // ]);
                }

          return ['data'=>'Success Invoice Setup'];
    }

    public function invoiceForList()
    {
        $invoiceForList =  invoiceForTypeList::where('status',1)->orderBy('id','ASC')->get();
        return ['invoiceForList' => $invoiceForList];
    }

    public function invoiceTypeList()
    {
        $invoiceTypeList =  invoiceTypeList::where('status',1)->orderBy('id','ASC')->get();
        return ['invoiceTypeList' => $invoiceTypeList];
    }

    public function getInvoiceDetailData($for,$type)
    {
        $data =  InvoiceSetupDetails::
        where('shopId',Auth::user()->shopId)
        ->where('invoiceForId',$for)
        ->where('invoiceTypeId',$type)
        ->orderBy('id','DESC')->first();
        return ['data' => $data];
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
    }

    public function edit($id)
    {
        $data = InvoiceSetup::find($id)->first();
        return ['data'=>$data];
    }


    public function changeStatus($id){
        $last_status = InvoiceSetup::where('id',$id)->first()->status;

        if ($last_status == 0){
            InvoiceSetup::where('id', $id)->update([
              'status' => 1,
          ]);
      }else{
        InvoiceSetup::where('id', $id)->update([
          'status' => 0,
      ]);
      }
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
        $this->validate($request, [
          'adminMenuTitleId' => 'required',
          'adminMenuName' => 'required',
          'adminMenuPosition' => 'required|numeric',
          'adminMenuStatus' => 'required',
        ],
        [
          'adminMenuTitleId.required' => 'Enter Menu Title Name',
          'adminMenuName.required' => 'Enter Menu Name',
          'adminMenuPosition.required' => 'Enter Menu Postition',
          'adminMenuStatus.required' => 'Enter Menu Status',
        ]);

        if (InvoiceSetup::where('adminMenuTitleId',$request->adminMenuTitleId)->where('adminMenuName',$request->adminMenuName)->where('adminMenuId','!=',$id)->exists()) {
            return ['changeMenuName' => 'Change Your Admin Menu Name'];
        }
        else {
            InvoiceSetup::where('adminMenuId',$id)->update([
                'adminMenuTitleId'=> $request->adminMenuTitleId,
                'adminMenuName'=> $request->adminMenuName,
                'adminMenuPosition'=> $request->adminMenuPosition,
                'adminMenuUrl'=> $request->adminMenuUrl,
                'adminMenuIcon'=> $request->adminMenuIcon,
                'adminMenuStatus'=> $request->adminMenuStatus,
                'adminSubMenuStatus'=> $request->adminSubMenuStatus,
                'updateBy'=> Auth::user()->id,
            ]);
        }

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = InvoiceSetup::where('id',$id);
        $data1 = InvoiceSetupDetails::where('invoiceSetupId',$id);
        $data->delete();
        $data1->delete();
    }
}
