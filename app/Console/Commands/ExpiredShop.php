<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Auth;
use App\Models\Admin;
use App\ShopAccountIntormation;
use Carbon\Carbon;
class ExpiredShop extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'expired:shop';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
      
        $get = shopAccountIntormation::get();
        foreach($get as  $selectAccountInfo){
        $billingDate = Carbon::parse($selectAccountInfo->billingDate);
        $billingGraceDate = $selectAccountInfo->billingGraceDate;
      
        $now = Carbon::now();
      

        $ShopOwnerInformation =  ShopOwnerInformation::where('shopId', $selectAccountInfo->shopId)->first();
         

         $diff = $billingDate->diffInDays($now);
         
        $today = date('Y-m-d H:i:s');
        if ($billingGraceDate) {
            if ($today > $billingGraceDate) {
                $refferCount =Admin::where('refferType',1)->where('paymentStatus',2)->where('refferUserId', $selectAccountInfo->shopId)->count();
                
                if($refferCount>=10){
                    Admin::where('shopId', $selectAccountInfo->shopId)->update([
                        'paymentStatus' => 2,
                        'status' => 13,
                    ]);

                   

                }
                else{
                Admin::where('shopId', $selectAccountInfo->shopId)->update([
                    'paymentStatus' => 1,
                    'status' => 50,
                ]);
            }

               
            } 
        } else {
            if ($today > $billingDate) {
                if($diff>2){
                    $refferCount =Admin::where('refferType',1)->where('paymentStatus',2)->where('refferUserId', $selectAccountInfo->shopId)->count();
                    if($refferCount>=10){
                        Admin::where('shopId', $selectAccountInfo->shopId)->update([
                            'paymentStatus' => 2,
                            'status' => 13,
                        ]);
    
                    }
                    else{
                    Admin::where('shopId', $selectAccountInfo->shopId)->update([
                        'paymentStatus' => 1,
                        'status' => 50,
                    ]);
                }
    
               
            } 
        }
    }




    
                // mail configareation
                
                
                $to = $ShopOwnerInformation->shopOwnerEmail;
                if(!empty($to)){
                $subject = 'Cashbook Bill Expired';
                
                $headers = "From: " . strip_tags('sales@cashbook.com.bd') . "\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                
                $message = '<html><body>';
                $message .= "<h4> Dear Customer </h4>";
                $message .= "<p>Your shop bill is expired. please pay bill and active shop.  </p>";
                
                
                $message .= "<p>Best Regards</p>";
                $message .= "<p>Cashbook billing department.</p>";
                $message .= "<p>visit: https://cashbook.com.bd </p>";
                $message .= "</body></html>";
                
                mail($to, $subject, $message, $headers);
                }



                
    }
    }
}
