@extends('student.layouts.master')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/login-register.css')}}">
@endsection
@section('content')

<div class="container-fluid about-faq-contact imglogin-register">
<div class="txtbanner">
          <h1 class="text-uppercase mt-n5">Register Yourself</h1>
        </div>
</div>

<br>
<div class="container body-login-register">

    
        <form method="POST" action="{{ route('register') }}">
            @csrf

            <div class="form-group row  mx-lg-5 mb-4">
                <label for="User Profession" class="col-md-3 col-form-label">Role: </label>

                <div class="col-md-9">
                    <select name="user_type" class="form-control" @error('user_type') is-invalid @enderror required>
                        <option value="">What do you do?</option>
                        <option value="teacher">I am a teacher</option>
                        <option value="student">I am a student</option>
                    </select>

                    @error('user_type')
                    <span class="text-danger text-center" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row mx-lg-5 mb-4">
                <label for="name" class="col-md-3 col-form-label">{{ __('Name') }}:</label>

                <div class="col-md-9">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                       placeholder="Enter your name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                    @error('name')
                    <span class="invalid-feedback text-danger text-center" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            
            <div class="form-group row mx-lg-5 mb-4">
                <label for="email" class="col-md-3 col-form-label">{{ __('E-Mail Address') }}:</label>

                <div class="col-md-9">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                      placeholder="Enter your email id"  name="email" value="{{ old('email') }}" required autocomplete="email">

                    @error('email')
                    <span class="invalid-feedback text-danger text-center" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>
            <div class="form-group row mx-lg-5 mb-4">
                <label for="password" class="col-md-3 col-form-label">{{ __('Password') }}:</label>

                <div class="col-md-9">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                        placeholder="Enter password" name="password" required autocomplete="new-password">

                    @error('password')
                    <span class="invalid-feedback text-danger text-center" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
            </div>

            <div class="form-group row mx-lg-5 mb-4">
                <label for="password-confirm"
                    class="col-md-4 col-form-label">{{ __('Confirm Password') }}:</label>

                <div class="col-md-8">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                       placeholder="Confirm your password" required autocomplete="new-password">
                </div>
            </div>

        
                <div class="text-center mt-5">
                    <button type="submit" class="btn py-2 px-5 btnregister">
                        {{ __('Register') }}
                    </button>
                </div>
    
        </form>
<br>
<br>
<br>
</div>

@endsection

@section('js_code')

<script src="{{url('js/app.js')}}"></script>

@endsection
