<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Accounting\chartOfAccountController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\SalesPayment;
use App\ProviderLoanReceiveEntry;
use App\ReceiverLoanPay;
use App\voucherType;
use App\StockSummery;
use App\AccountSetup;
use App\ShopAssetEntry;
use App\ChartOfAccount;
use App\ChartOfAccountBalance;
use App\voucherInformation;
use App\voucherInformationReport;
use App\ReceivePaymentStatement;
use App\tmpOpeningVoucher;
use App\IncomeExpenseCompany;
use App\LoanProviderEntry;
use App\ChartOfAccountRegister;
use App\StatementInformation;
use App\LoanProviderInstallmentHistory;
use App\LoanReveiverInstallmentHistory;
use App\SalesReturnInvoiceTmp;
use App\CompanyShareInformation;
use App\PurchaseReturnInvoiceTmp;

class dashboardController extends Controller
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
        //
    }

    public function totalSaleInfo(){


        $today = date('Y-m-d');


        // ============================================
        // ================= Today Sale ===============
        // ============================================


        $accCode = AccountSetup::where('placementType',29)->where('headName',114)->first()->headCode;

        
        
       
            $productSaleAccCode = AccountSetup::where('placementType',29)->where('headName',114)->first()->headCode;
            $total_cash_sale_today_cash = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('type','2')
              ->where('paymentType','1')
              ->where('accountHeadCode','LIKE',"$productSaleAccCode%")
              ->where('created_at','LIKE',"$today%")->sum('creditAmount');
            
            $total_cash_sale_today_bank = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('type','2')
              ->where('paymentType','2')
              ->where('accountHeadCode','LIKE',"$productSaleAccCode%")
              ->where('created_at','LIKE',"$today%")->sum('creditAmount');

              $total_cash_sale_today = $total_cash_sale_today_cash+$total_cash_sale_today_bank;
        
       
            // today due sale 
            $c=SalesPayment::where('shopId',Auth::user()->shopId)->where('createBy',Auth::user()->id)->where('salesCustomerTypeId','!=',0)->whereDate('created_at',Carbon::today())->orderby('id','desc')->get()->unique('salesCustomerId');
            $totaldue=0;
            $j=array();
           foreach ($c as $cd) {
               $totaldue+=$cd->currentDue;
               $j[]=$cd->id;
           }

              $total_due_sale_today = $totaldue;
        

        $today_cash_collection = StatementInformation::
              where('shopId',Auth::user()->shopId)
            ->where('type','2')
            ->where('paymentType','1')
            ->where('created_at','LIKE',"$today%")->sum('creditAmount');

        $today_bank_collection = StatementInformation::
              where('shopId',Auth::user()->shopId)
              ->where('bankTypeEntryId','1')
              ->where('type','2')
            ->where('paymentType','2')
            ->where('created_at','LIKE',"$today%")->sum('creditAmount');
      
        $today_mobile_bank_collection = StatementInformation::
              where('shopId',Auth::user()->shopId)
              ->where('bankTypeEntryId','2')
              ->where('type','2')
            ->where('paymentType','2')
            ->where('created_at','LIKE',"$today%")->sum('creditAmount');

        
        

            $total_collection = $today_bank_collection+$today_cash_collection+$today_mobile_bank_collection;

        // ============================================
        // ================= //Today Sale =============
        // ============================================





        // ============================================
        // ================= Today Expense ============
        // ============================================

          $today_cash_loan = LoanProviderInstallmentHistory::where('shopId',Auth::user()->shopId)
          ->where('created_at','LIKE',"$today%")
          ->sum('installmentAmount');
        $today_other_exp = StatementInformation::
            where('shopId',Auth::user()->shopId)
            ->where('type','1')
          ->where('paymentType','1')
          ->where('created_at','LIKE',"$today%")->sum('cashAmount');

        $today_cash_expense = $today_other_exp+$today_cash_loan;



        // -----------------------------------
         
          $salesReturn = SalesReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('status',0)->sum('totalPurchaseValue');
          if($salesReturn==NULL){
            $salesReturn = 0;
          }else{
            $salesReturn =  $salesReturn;
          }
        // -----------------------------------



        // -----------------------------------
         
          $purchaseReturn = PurchaseReturnInvoiceTmp::where('shopId',Auth::user()->shopId)->where('status',0)->sum('totalPurchaseValue');
          if($purchaseReturn==NULL){
            $purchaseReturn = 0;
          }else{
            $purchaseReturn =  $purchaseReturn;
          }
        // -----------------------------------


          $today_bank_expense = StatementInformation::
            where('shopId',Auth::user()->shopId)
            ->where('type','1')
            ->where('bankTypeEntryId','1')
          ->where('paymentType','2')
          ->where('created_at','LIKE',"$today%")->sum('bankAmount');




          $today_mobile_bank_expense = StatementInformation::
            where('shopId',Auth::user()->shopId)
            ->where('type','1')
          ->where('bankTypeEntryId','2')
          ->where('paymentType','2')
          ->where('created_at','LIKE',"$today%")->sum('bankAmount');



          $today_cash_bank_total_expense = $today_bank_expense+$today_cash_expense+$today_mobile_bank_expense;

            $productPurchaseAccCode = AccountSetup::where('placementType',30)->where('headName',115)->first()->headCode;
            $today_product_purchase = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('type','1')
              ->where('accountHeadCode','LIKE',"$productPurchaseAccCode%")
              ->where('created_at','LIKE',"$today%")->sum('debitAmount');





            $assetPurchaseAccCode = AccountSetup::where('placementType',30)->where('headName',116)->first()->headCode;
            $today_asset_purchase = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('type','1')
              ->where('accountHeadCode','LIKE',"$assetPurchaseAccCode%")
              ->where('created_at','LIKE',"$today%")->sum('debitAmount');




            $today_loan_pay = LoanProviderInstallmentHistory::
                where('shopId',Auth::user()->shopId)
              ->where('created_at','LIKE',"$today%")->sum('installmentAmount');





              $salaryAccCode = AccountSetup::where('placementType',30)->where('headName',126)->first()->headCode;
            $today_salary = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('accountHeadCode','LIKE',"$salaryAccCode%")
              ->where('type','1')
              ->where('created_at','LIKE',"$today%")
              ->sum('debitAmount');



              $otherExpenseAseAccCode = AccountSetup::where('placementType',30)->where('headName',118)->first()->headCode;
            $today_other_expense = StatementInformation::
                where('shopId',Auth::user()->shopId)
              ->where('accountHeadCode','LIKE',"$otherExpenseAseAccCode%")
              ->where('type','1')
              ->where('created_at','LIKE',"$today%")
              ->sum('debitAmount');




                $today_total_expense = $today_product_purchase+$today_asset_purchase+$today_salary+$today_loan_pay+$today_other_expense;

        // ============================================
        // ================= //Today Expense ==========
        // ============================================









        // ============================================
        // ================= Today Liability ==========
        // ============================================




                // ============ product supplier due calculation

                $productPurchaseAccCode = AccountSetup::where('placementType',30)->where('headName',115)->first()->headCode;
                $suppliers = statementInformation::where('shopId',Auth::user()->shopId)->where('balanceAmount','<',0)->where('accountCode','LIKE',"$productPurchaseAccCode%")->distinct()->get('accountCode');
                $total_supplier_amount1 = 0;
                foreach($suppliers as $supplier){
                    $supplier_account_code = $supplier->accountCode;

                    $suppliers_amount = statementInformation::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->where('accountCode',$supplier_account_code)->first()->balanceAmount;
                    $total_supplier_amount1 -= $suppliers_amount;
                }
                $total_supplier_amount = abs($total_supplier_amount1);
                // ============ //product supplier due calculation





                // ============ Asset supplier due calculation

                $assetPurchaseAccCode = AccountSetup::where('placementType',30)->where('headName',116)->first()->headCode;
                $suppliers = StatementInformation::where('shopId',Auth::user()->shopId)->where('accountCode','LIKE',"$assetPurchaseAccCode%")->distinct()->get('accountCode');
                $total_asset_supplier_amount = 0;
                foreach($suppliers as $supplier){
                    $supplier_account_code = $supplier->accountCode;

                    $asset_suppliers_amount = abs(StatementInformation::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->where('accountCode',$supplier_account_code)->first()->balanceAmount);
                    $total_asset_supplier_amount += $asset_suppliers_amount;
                }
                // ============ //Asset supplier due calculation





                // ============ Loan Installment calculation

                $total_loan_payable = 0;

                if(ProviderLoanReceiveEntry::where('shopId',Auth::user()->shopId)->exists()){
                    $total_loan_payable = ProviderLoanReceiveEntry::where('shopId',Auth::user()->shopId)->sum('dueAmount');
                }
                else{
                    $total_loan_payable = 0;
                }
                // ============ //Loan Installment calculation


            $total_liability = $total_loan_payable+$total_asset_supplier_amount+$total_supplier_amount;


        // ============================================
        // ================= //Today Liability ========
        // ============================================







        // ============================================
        // ================= //share capital ========
        // ============================================

        $shareCapitalAccCode = AccountSetup::where('placementType',33)->where('headName',131)->first()->headCode;
        //$shareCapitalAccCode1 = AccountSetup::where('placementType',33)->where('headName',132)->first()->headCode;
        $headCode1 = $shareCapitalAccCode;

         $expense = 0;
         $totalExpense = 0;
          if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
            $expense = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
            $totalExpense -= $expense; 
           }
            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->exists()){
            $expense = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode','LIKE',"$headCode1%")->sum('voucherAmount');
            $totalExpense += $expense; 
           }
           $share_capital = $totalExpense; 
         

         
      //   $share_capital = statementInformation::where('shopId',Auth::user()->shopId)
      //   ->where(function($query) use ($shareCapitalAccCode,$shareCapitalAccCode1){
      //     $query->where('accountCode', 'LIKE', "$shareCapitalAccCode%");
      //     $query->orWhere('accountCode', 'LIKE', "$shareCapitalAccCode1%");
      // })->sum('creditAmount');
        


        // ============================================
        // ================= //share capital ========
        // ============================================








        // ============================================
        // ================= Today Income    ==========
        // ============================================




                // ============ customer due calculation

                $customerDueAccountCode = AccountSetup::where('placementType',31)->where('headName',119)->first()->headCode;
                $customers = statementInformation::where('shopId',Auth::user()->shopId)->where('accountHeadCode','LIKE',"$customerDueAccountCode%")->distinct()->get('accountCode');
                $total_customer_due_amount = 0;
                foreach($customers as $customer){
                    $customer_account_code = $customer->accountCode;

                    $customer_due_amount = abs(statementInformation::where('shopId',Auth::user()->shopId)->orderBy('id','DESC')->where('accountCode',$customer_account_code)->first()->balanceAmount);
                    $total_customer_due_amount += $customer_due_amount;
                }
                // ============ //customer due calculation





 
                // ============ Loan Installment calculation

                $total_loan_receiveable = 0;

                if(ReceiverLoanPay::where('shopId',Auth::user()->shopId)->exists()){
                    $total_loan_receiveable = ReceiverLoanPay::where('shopId',Auth::user()->shopId)->sum('dueAmount');
            }
            else{
                  $total_loan_receiveable = 0;
            }

                // ============ //Loan Installment calculation



                // ============ Loan Installment calculation

                $otherIncomeAscAccCode = AccountSetup::where('placementType',31)->where('headName',120)->first()->headCode;
                
                $today_other_income = StatementInformation::
                    where('shopId',Auth::user()->shopId)
                  ->where('accountHeadCode','LIKE',"$otherIncomeAscAccCode%")
                  ->where('type','0')
                  ->sum('debitAmount');


                // ============ //Loan Installment calculation



                    $total_income = $total_customer_due_amount+$total_loan_receiveable+$today_other_income;

        // ============================================
        // ================= //Today Income    ========
        // ============================================







        // ============================================
        // ================= Today Balance   ==========
        // ============================================




                // ============ total joma

            if(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->exists()){
                $contraVoucherAmount = VoucherInformation::where('voucherType',5)->where('shopId',Auth::user()->shopId)->sum('voucherAmount');
                $debitAmount = ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->sum('debitAmount');
                if($debitAmount){
                  $debitAmount -= $contraVoucherAmount;
                }
                $creditAmount = abs(ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->sum('creditAmount'));
                if($creditAmount){
                  $creditAmount -= $contraVoucherAmount;
                }
                $balanceAmount = ChartOfAccountBalance::where('shopId',Auth::user()->shopId)->sum('balanceAmount');

            }
            else{
                    $debitAmount = 0;
                    $creditAmount = 0;
                    $balanceAmount = 0;
            }
                
                // ============ //total joma


        // ============================================
        // ================= //Today Balance    =======
        // ============================================







        // ============================================
        // ================= Today Asset     ==========
        // ============================================



                            // ============ cash

                            $cashAccCode1 = AccountSetup::where('placementType',28)->where('headName',107)->first()->headCode;

                            if(ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountCode','LIKE',"$cashAccCode1%")
                              ->exists()){

                                $cash_available = ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountCode','LIKE',"$cashAccCode1%")
                              ->sum('balanceAmount');

                              }
                              else{
                                $cash_available = 0;
                              }
            
            
                            // ============ // cash


                            // ============ petty cash

                            $cashAccCode2 = AccountSetup::where('placementType',28)->where('headName',108)->first()->headCode;

                            if(ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountCode','LIKE',"$cashAccCode2%")
                              ->exists()){

                                $cash_available_petty = ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountCode','LIKE',"$cashAccCode2%")
                              ->sum('balanceAmount');

                              }
                              else{
                                $cash_available_petty = 0;
                              }
            
            
                            // ============ // petty cash


                            // ============ mobile banking

                            $mobileBankingAccCode = AccountSetup::where('placementType',32)->where('headName',131)->first()->headCode;
                              
                            if(ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountHeadCode','LIKE',"$mobileBankingAccCode%")
                              ->exists()){
                            $mobile_banking_available = ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountHeadCode','LIKE',"$mobileBankingAccCode%")
                              ->sum('balanceAmount');
                              }
                              else{
                                $mobile_banking_available = 0;
                              }
            
            
                            // ============ // mobile banking



                            // ============ bank

                            $bankAccCode = AccountSetup::where('placementType',32)->where('headName',122)->first()->headCode;
                              
                            if(ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountHeadCode','LIKE',"$bankAccCode%")
                              ->exists()){
                            $bank_available = ChartOfAccountBalance::
                                where('shopId',Auth::user()->shopId)
                              ->where('accountHeadCode','LIKE',"$bankAccCode%")
                              ->sum('balanceAmount');
                              }
                              else{
                                $bank_available = 0;
                              }
            
            
                            // ============ // bank


                            // ============ inventory

                            $inventoryAccCode = AccountSetup::where('placementType',32)->where('headName',123)->first()->headCode;
                            
                            $income = 0;
                            $income1 = 0;
                            $totalInventory = 0;

                             $income1 = StockSummery::where('shopId',Auth::user()->shopId)->sum('totalPrice');

                            //  foreach($selects as $select){
                            //   $income1 += ($select->quantity*$select->unitPrice);
                            //  }
                                
                             $totalInventory = $income1;
            
                            // ============ // inventory


                            // ============ Fixed Asset

                            $assetAccCode = AccountSetup::where('placementType',32)->where('headName',124)->first()->headCode;
                            
                            $income = 0;
                            $income1 = 0;
                            $totalFixedAsset = 0;

                            if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$assetAccCode)->exists()){
                                $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$assetAccCode)->sum('voucherAmount');
           
                                $income1 += $income;    
                            }
                            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$assetAccCode)->exists()){
                                $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$assetAccCode)->sum('voucherAmount');
            
                                $income1 -= $income;    
                            }

                            // fixet asset used

                            $lost=0;
                            if(ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->exists())
                            {
                                $lt = ShopAssetEntry::where('shopId',Auth::User()->shopId)->where('status',1)->select(DB::raw('sum((productQuantity) * productCost) as total'))->first();
                                if(empty($lt)){
                                  $lost=0;  
                                }
                                else{
                                    $lost=$lt->total;
                                }
                            }
                            // fixet asset used
                                
                             $totalFixedAsset = abs($income1);
            
                            // ============ // Fixed Asset


                            // ============ Other Asset

                            $otherAssetAccCode = AccountSetup::where('placementType',32)->where('headName',125)->first()->headCode;
                            
                            $income = 0;
                            $income1 = 0;
                            $totalOtherAsset = 0;

                            if(voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$otherAssetAccCode)->exists()){
                                $income = voucherInformationReport::where('type',1)->where('shopId',Auth::user()->shopId)->where('accountsCode',$otherAssetAccCode)->sum('voucherAmount');
           
                                $income1 += $income;    
                            }
                            if(voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$otherAssetAccCode)->exists()){
                                $income = voucherInformationReport::where('type',2)->where('shopId',Auth::user()->shopId)->where('accountsCode',$otherAssetAccCode)->sum('voucherAmount');
            
                                $income1 -= $income;    
                            }
                                
                             $totalOtherAsset = abs($income1);
            
                            // ============ // Other Asset
                

                            $totalAsset = $cash_available+$cash_available_petty+$bank_available+$mobile_banking_available+$totalInventory+$totalFixedAsset+$totalOtherAsset;

        // ============================================
        // ================= //Total Asset      =======
        // ============================================
        
        
                return [
            'total_cash_sale_today' => $total_cash_sale_today,
            'total_due_sale_today' => $total_due_sale_today,
            'today_cash_collection' => $today_cash_collection,
            'today_bank_collection' => $today_bank_collection,
            'today_mobile_bank_collection' => $today_mobile_bank_collection,
            'total_collection' => $total_collection,

            
            'salesReturn' => $salesReturn,
            'purchaseReturn' => $purchaseReturn,
            'today_cash_expense' => $today_cash_expense,
            'today_bank_expense' => $today_bank_expense,
            'today_mobile_bank_expense' => $today_mobile_bank_expense,
            'today_cash_bank_total_expense' => $today_cash_bank_total_expense,

            'today_product_purchase' => $today_product_purchase,
            'today_asset_purchase' => $today_asset_purchase,
            'today_loan_pay' => $today_loan_pay,
            'today_salary' => $today_salary,
            'today_other_expense' => $today_other_expense,
            'today_total_expense' => $today_total_expense,

            'total_supplier_amount' => $total_supplier_amount,
            'total_asset_supplier_amount' => $total_asset_supplier_amount,
            'total_loan_payable' => $total_loan_payable,
            'total_liability' => $total_liability,


            'share_capital' => $share_capital,


            'total_customer_due_amount' => $total_customer_due_amount,
            'total_loan_receiveable' => $total_loan_receiveable,
            'today_other_income' => $today_other_income,
            'total_income' => $total_income,

            'debitAmount' => $debitAmount,
            'creditAmount' => $creditAmount,
            'balanceAmount' => $balanceAmount,

            'cash_available' => $cash_available,
            'cash_available_petty' => $cash_available_petty,
            'mobile_banking_available' => $mobile_banking_available,
            'bank_available' => $bank_available,
            'totalInventory' => $totalInventory,
            'totalFixedAssetUsed' => $lost,
            'totalFixedAsset' => $totalFixedAsset,
            'totalOtherAsset' => $totalOtherAsset,
            'totalAsset' => $totalAsset,
        ];

        
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
        //
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
        //
    }
}
