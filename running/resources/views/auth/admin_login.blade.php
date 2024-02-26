@extends('layouts.app')

@section('content')
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card" style="margin-top:60px;">
			<div class="card-header">
				<h3> Sign In </h3>

			</div>
			<div class="card-body">
				<form method="POST" onsubmit="return LoginUser()">
                @csrf
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" id="userName" name="userName"  placeholder="user name">

					</div>
					<div class="input-group form-group" style="display:none">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-atom"></i></span>
						</div>
						<input type="text" value="-1" class="form-control" id="shopSiralId" name="shopSiralId" placeholder="shop code">

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
						<input type="submit" value="Login" class="btn float-right login_btn main_login_button">
						<button style="display:none;"  type="button" class="btn float-right login_btn loading_login_button"> <i class="fa fa-spinner fa-2x fa-spin fa-fw"></i>
<span class="sr-only">Loading...</span> </button>
					</div>
				</form>
			</div>
			<div class="card-footer">

                @if (Route::has('password.request'))
				<div class="d-flex justify-content-center">
					<a href="{{ route('forget.password.get') }}">Forgot your password?</a>
				</div>
                @endif
			</div>
		</div>
	</div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript">
        function LoginUser()
        {
            $('.main_login_button').hide();
            $('.loading_login_button').show();

            var userName    = $("input[name=userName]").val();
            var shopSiralId    = $("input[name=shopSiralId]").val();
            var password = $("input[name=password]").val();
            var remember = $("input[name=remember]").val();
            var data = {

                userName:userName,
                shopSiralId:shopSiralId,
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
                url: "/shop/login",
                data: data,
                cache: false,
                success: function (msg)
                {
                    //alert(msg.message);
                    window.location.replace('{{route('shop')}}');

                },
                error: function (referenceCompanyName){
                    //alert('Fail to run Login..');
                        $('.main_login_button').show();
                        $('.loading_login_button').hide();
                }
            });
            return false;
        }
        // login user

    </script>
@endsection
