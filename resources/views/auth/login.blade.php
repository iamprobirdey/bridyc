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

<div class="container w-75 body-login-register">
    <br>

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="form-group row mx-lg-5">
                <label for="email" class="col-md-3 col-form-label text-right">{{ __('E-mail id') }}:</label>

                <div class="col-md-9">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                        placeholder="Enter email" name="email" value="{{ old('email') }}" required autocomplete="email">

                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row mx-lg-5">
                <label for="password" class="col-md-3 col-form-label text-right">{{ __('Password') }}:</label>

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

            <div class="form-group row">
                <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember"
                            {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            {{ __('Remember Me') }}
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
                    <a class="btn btn-link" href="{{ route('register') }}">
                        {{ __('Register') }}
                    </a>
                </div>
            </div>
        </form>

</div>

@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

@endsection
