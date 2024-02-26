<?php

namespace App\Http\Controllers\Auth;



use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;

use DB;

use Carbon\Carbon;

use App\Models\User;

use Mail;

use Hash;

use Illuminate\Support\Str;


class AdminForgatePasswordController extends Controller
{
          /**

       * Write code on Method

       *

       * @return response()

       */

      public function showForgetPasswordForm()

      {

         return view('auth.forgetPassword');

      }



      /**

       * Write code on Method

       *

       * @return response()

       */

      public function submitForgetPasswordForm(Request $request)

      {

          $request->validate([

              'email' => 'required|email|exists:admins',

          ]);



          $token = Str::random(64);



          DB::table('password_resets')->insert([

              'email' => $request->email,

              'token' => $token,

              'created_at' => Carbon::now()

            ]);



          Mail::send('email.forgetPassword', ['token' => $token], function($message) use($request){

              $message->to($request->email);

              $message->subject('Reset Password');

          });



          return back()->with('status', 'We have e-mailed your password reset link!');

      }

      public function submitForgetPasswordFormApon(Request $request)

      {

          $request->validate([

              'email' => 'required|email|exists:admins',

          ]);

          $getInfo = Admin::where('email',$request->email)->first();
          $getPassword = $getInfo->pass;



          Mail::send('email.forgetPassword', ['password' => $getPassword], function($message) use($request){

              $message->to($request->email);

              $message->subject('Remember Your Password');

          });



          return back()->with('status', 'We have e-mailed your password reset link!');

      }

      /**

       * Write code on Method

       *

       * @return response()

       */

      public function showResetPasswordForm($token) {

         return view('auth.forgetPasswordLink', ['token' => $token]);

      }



      /**

       * Write code on Method

       *

       * @return response()

       */

      public function submitResetPasswordForm(Request $request)

      {

          $request->validate([

              'email' => 'required|email|exists:admins',

              'password' => 'required|confirmed',

              'password_confirmation' => 'required'

          ]);



          $updatePassword = DB::table('password_resets')

                              ->where([

                                'email' => $request->email,

                                'token' => $request->token

                              ])

                              ->first();



          if(!$updatePassword){

              return back()->withInput()->with('error', 'Invalid token!');

          }



          $user = Admin::where('email', $request->email)

                      ->update(['password' => Hash::make($request->password)]);



          DB::table('password_resets')->where(['email'=> $request->email])->delete();



          return redirect('/shop/login')->with('message', 'Your password has been changed!');

      }
}
