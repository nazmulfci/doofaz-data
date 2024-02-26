<?php

namespace App\Http\Controllers;

use App\AdminEntry;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
class PasswordChangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'oldPassword' => 'required',
            'newPassword' => 'required|min:5',
            'confirmPassword' => 'required|min:5',

        ],
        [
            'oldPassword.required' => 'Enter Old Password',
            'newPassword.required' => 'Enter New Password',
            'confirmPassword.required' => 'Enter Confirm Password',
        ]);


     if($request->newPassword == $request->confirmPassword){
             if(auth('admin')){
                if (Admin::where('pass',$request->oldPassword)->exists()){
                    Admin::where('id',Auth::user()->id)->update([
                        'password' => bcrypt($request->newPassword),                     
                        'pass' => $request->newPassword,                     
                    ]);

                    return ['success'=> "Password Change Successfully"];
                }
                else{
                    return ['oldPassword'=> "Old Password Error"];
                }
             }
        
        }

      else {
          return ['nomatch' => 'Password not match'];
      }
      

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
