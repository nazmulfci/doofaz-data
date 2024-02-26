<?php

Route::get('/', function () {
    return view('auth.admin_login');
});
Route::get('reset/forget-password', 'Auth\AdminForgatePasswordController@showForgetPasswordForm')->name('forget.password.get');

Route::post('reset/forget-password', 'Auth\AdminForgatePasswordController@submitForgetPasswordFormApon')->name('forget.password.post.apon');

Route::get('reset/reset-password/{token}','Auth\AdminForgatePasswordController@showResetPasswordForm')->name('reset.password.get');

Route::post('reset/reset-password', 'Auth\AdminForgatePasswordController@submitResetPasswordForm')->name('reset.password.post');

Route::get('reset/getTotalBranch','ShopInformation\ShopBranchController@getTotalBranch');
Auth::routes();



