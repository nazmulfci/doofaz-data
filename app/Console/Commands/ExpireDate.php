<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use App\Models\Admin;
use App\ShopAccountIntormation;
use App\ShopOwnerInformation;

class ExpireDate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'expire:date';

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
        $grace=ShopAccountIntormation::get();
        foreach($grace as $info){
            $idget= $info->billingGraceDate;
         
         
           
          if($idget==NULL){
        $shop=ShopAccountIntormation::where('billingDate','<', Carbon::now())->get();
        foreach($shop as $get){
            
            $ShopOwnerInformation =  ShopOwnerInformation::where('shopId', $get->shopId)->first();
            
            $refferCount =Admin::where('refferType',1)->where('paymentStatus',2)->where('refferUserId', $get->shopId)->count();
            if($refferCount>=10){
                $update=Admin::where('id', $get->shopId)->update([
                    'paymentStatus' => 2,
                    'status' => 13,
                ]);

                
            }
        else{
            $update=Admin::where('id', $get->shopId)->update([
                'paymentStatus' => 1,
                'status' => 50,
            ]);

            



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
      
        dd($update);
 
}
if($idget!=NULL)  { 
    $shop=ShopAccountIntormation::where('billingGraceDate','<', Carbon::now())->get();
    foreach($shop as $get){
  
        $ShopOwnerInformation =  ShopOwnerInformation::where('shopId', $get->shopId)->first();
            
        $refferCount =Admin::where('refferType',1)->where('paymentStatus',2)->where('refferUserId', $get->shopId)->count();
        if($refferCount>=10){       
    $update=Admin::where('id', $get->shopId)->update([
        'paymentStatus' => 2,
        'status' => 13,
    ]);

    
}
    else{
        $update=Admin::where('id', $get->shopId)->update([
            'paymentStatus' => 1,
            'status' => 50,
        ]);

        

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
  
    dd($update);

}
    }
}
}
