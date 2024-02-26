@extends('layouts.app')

@section('content')
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				 
			</div>
			<div class="card-body">
				<form method="POST" onsubmit="return LoginUser()">
                @csrf
					
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-atom"></i></span>
						</div>
						<input type="text" class="form-control" id="adminAccessId" name="adminAccessId" placeholder="Email">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" id="password" name="password" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input name="remember" id="remember" type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				 
               
			</div>
		</div>
	</div>
</div>
<!-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"> {{ isset($url) ? ucwords($url) : ""}} {{ __('Shop Login') }}</div>

                <div class="card-body">
                    <form method="POST" onsubmit="return LoginUser()">
                        @csrf
                        <div class="form-group row">
                            <label for="userName" class="col-md-4 col-form-label text-md-right">E-Mail Address Or User Id </label>
                                  <div class="col-md-6">
                                  <input id="userName"  type="text" class="form-control"   name= "userName"  >                             
                              </div>
                         </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Shop Code</label>                         
                            <div class="col-md-6">                               
                                <input id="shopSiralId" type="text" class="form-control"   name= "shopSiralId"  >                     
                          
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Password</label>                         
                            <div class="col-md-6">                               
                            <input id="password"  type="password" class="form-control " name="password" >
                                                
                          
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                                    <label class="form-check-label" for="remember">
                                      Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript">
        function LoginUser()
        {
           
            var adminAccessId    = $("input[name=adminAccessId]").val();
            
            var password = $("input[name=password]").val();
            var remember = $("input[name=remember]").val();
            var data = {
              
                adminAccessId:adminAccessId,
               
                password:password,
                remember:remember
            };
            // Ajax Post 
            $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

            $.ajax({
                type: "post",
                url: "/admin/login",
                data: data,
                cache: false,
                success: function (data)
                {
                    //   alert('Fail to run Login..');
                    window.location.replace('{{route('home')}}')
                },
                error: function (data){
                  
                }
            });
            return false;
        }
        // login user
       
    </script>
@endsection