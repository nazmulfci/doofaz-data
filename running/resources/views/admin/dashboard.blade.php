<!doctype html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Language" content="en">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>DoofazIT</title>
  <meta name="keywords" content="" />
  <meta name="google-site-verification" content="b2NqzUMVcTi-lcGe1jA-Ow6CoWqAmtr4JieoKHkzFX0" />
  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
  <!-- Disable tap highlight on IE -->
  <meta name="msapplication-tap-highlight" content="no">
  <link rel="stylesheet" href="{{ asset('dashboard/font/flaticon.css') }}">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="{{ asset('dashboard/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}">
  <link href="{{ asset('dashboard/style.css') }}" rel="stylesheet">
  <link href="{{ asset('dashboard/customstyle.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css">

<link rel="shortcut icon" type="image/x-icon" href="{{url('images/favicon.png')}}">

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.js" defer></script>


  <!-- <script src="/dist/vuejs-datatable.js" defer></script>  -->
  <!-- <script src="/myscript.js" defer></script>  -->



  <style type="text/css">
    .comName{
      color:#0c838c;
    }
.comName::first-letter{
  color:#faa32e;
}
.topMenu{
  list-style:none;
  margin:0;
  padding:0;
}
.topMenu li{
  float:left;
}
.topMenu li a{
  display: block;
  color: black;
  text-align: center;
  padding: 2px 16px;
  text-decoration: none;
  border-right:1px solid #ddd;
  /* background:green; */
}
.topMenu li a:hover{
 background:#eee;
}

.topMenuMobile a{
  display: block;
  color: black;
  text-align: center;
  padding: 7px 0;
  text-decoration: none;
  /* background:green; */
}
.topMenuMobile a:hover{
 background:#eee;
}
.progress_home{
  height:5px;margin-top:1px;margin-bottom:1px;background:transparent;
}

.dash-head{
  height:40px;
  background:url(dashboard/assets/images/button/button-bg.png),#ddd;
  background-size:100% 100%;
  color:#00000091;
}
.ribbon-down{
  width:20px;
  height:20px;
  /* background: linear-gradient(#9BC90D 0%, #79A70A 100%); */
  background:url(dashboard/assets/images/button/ribon-down.png),green;
  background-size:100% 100%;
  background-repeat:no-repeat;
}
.graph{
  background:url(dashboard/assets/images/button/graph.png);
  background-size:100% 100%;
  background-repeat:no-repeat;
  width:25px;height:25px;border-bottom:1px solid white;
}

.ribbon {
  position: absolute;
  right: -5px;
  top: -12px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
}
.ribbon span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;
}
.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid #79A70A;
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}
.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid #79A70A;
  border-bottom: 3px solid transparent;
  border-top: 3px solid #79A70A;
}


.button-41 {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
}

.button-41:hover {
  background: #00bd68;
}


/* CSS */
.button-42 {
  background-color: initial;
  background-image: linear-gradient(-180deg, #FF7E31, #E62C03);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 40px;
  line-height: 40px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
  transition: box-shadow .2s;
}

.button-42:hover {
  box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
}
@media only screen and (min-width:320px) and (max-width:575px){
    .hamburger-inner {
	display: block;
	/* top: 50%; */
	margin-top: 5px;
	left: -45px;
}

/* #profile1 {
	position: absolute;
	right: 92px;
	top: 12px;
} */
#profile1 {
	position: absolute;
	right: 5px;
	top: 12px;
}
/* #userNameShow {
	padding-top: 16px;
} */

#userNameShow {
	/* padding-top: 16px; */
	position: absolute;
	right: 50px;
	top: 20px;
}
}
.vertical-nav-menu ul > li > a .metismenu-icon {
  display: block;
}
.hamburger {
  padding: 0px 0px;
   display: block; 
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
    </style>

  <style type="text/css" media="print">
    @page {
      size: auto;
      /* auto is the initial value */
      margin: 0mm;
      /* this affects the margin in the printer settings */
    }
  </style>

</head>

<body>


  <div id="app">
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar closed-sidebar">
      @include('admin.header')
      <div class="app-main">
        @include('admin.sidebar')
        <div class="app-main__outer  col-12 pr-0">
          <div class="app-main__inner pb-3">
            @if(Auth::guard('admin'))
            @if(Auth::User()->status!=50)
            <admin-content></admin-content>
            @else
            <pay-now></pay-now>
            @endif
            @else
            <admin-content></admin-content>
            @endif
          </div>
          @include('admin.footer')
        </div>
      </div>
    </div>
  </div>

  @include('admin.headerbar')

  <script src="{{ asset('js/app.js') }}"></script>


  <!-- <script type="text/javascript" src="{{ asset('dashboard/assets/scripts/main.js') }}"></script> -->
  <script type="text/javascript" src="{{ asset('dashboard/assets/scripts/custom.js') }}"></script>
  <script type="text/javascript" src="{{ asset('dashboard/assets/scripts/icon-change.js') }}"></script>
  <script type="text/javascript" src="{{ asset('dashboard/assets/scripts/print.js') }}"></script>
  <script src="https://unpkg.com/vue-multiselect@2.1.0"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/fr.js"></script> -->
</body>

</html>
