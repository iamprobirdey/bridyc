@extends('student.layouts.master')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/login-register.css')}}">

@endsection
@section('content')

<div class="container-fluid about-faq-contact imglogin-register">
<div class="txtbanner">
          <h1 class="text-uppercase mt-n5">Sign In</h1>
        </div>
</div>

<br>

<div class="container body-login-register">
        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="form-group row mb-4 mx-lg-5">
                <label for="email" class="col-md-3 col-form-label text-center">{{ __('E-mail id') }}:</label>

                <div class="col-md-9">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                        placeholder="Enter email id" name="email" value="{{ old('email') }}" required autocomplete="email">

                    @error('email')
                    <span class="invalid-feedback text-danger text-center" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>


            <div class="form-group row mx-lg-5 mb-4">
                <label for="password" class="col-md-3 col-form-label text-center">{{ __('Password') }}:</label>

                <div class="col-md-9">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                    placeholder="Enter password" name="password" required autocomplete="current-password">

                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row text-md-right remember-forget ml-md-5">
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label remember-me" for="remember">
                            {{ __('Remember Me') }}
                        </label>
                    </div>
                </div>
                <div class="col-6  text-md-center">
                <a href="{{ route('password.request') }}">
                        {{ __('Forgot your Password?') }}
                    </a>
                </div>
            </div>
<br>
            <div class="form-group row text-md-right log-reg ml-md-5">
                <div class="col-6">
                    <button type="submit" class="btn btnlogin py-2 px-5">
                        {{ __('Login') }}
                    </button>
                </div>

                    <!--@if (Route::has('password.request'))
                    <a class="btn btn-link" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>-->
                <div class="col-6 text-left">
                    @endif
                    <a class="btn btn-link" href="{{ route('register') }}">
                        {{ __('Register') }}
                    </a>
                </div>
            </div>
        </form>
<br>
<br>
<br>
<br>
<br>
</div>

@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

@endsection
