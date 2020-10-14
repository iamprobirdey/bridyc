@extends('student.layouts.master')

@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and 
activities and provide access to students and parents in particular, who are looking for 
cross-training their minds before choosing an institute or a career. The platform will allow 
students to share their learnings, learn from their peers and from the people who have already 
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance in Assam, 
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school, career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career video')

@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<link rel="stylesheet" type="text/css" href="{{url('css/login-register.css')}}">
@endsection
@section('content')

<div class="container-fluid about-faq-contact imglogin-register">
<div class="txtbanner">
          <h1 class="text-uppercase mt-n5">Get yourself registered!</h1>
          <p>Digitalize your institute and optimize the cost</p>
        </div>
</div>

<br>

{{-- <div class="container">

    <div id="institute-register">
        <institute-register></institute-register>
    </div>
</div> --}}


<div class="container body-login-register">

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <input type="hidden" name="user_type" value="institute">

            <div class="form-group row mx-lg-5 mb-4">
                <label for="name" class="col-md-3 col-form-label">{{ __('Name') }}:</label>

                <div class="col-md-9">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"
                        placeholder="Enter principal's name" value="{{ old('name') }}" required autocomplete="name" autofocus>

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
                        placeholder="Enter principal's email id" name="email" value="{{ old('email') }}" required autocomplete="email">

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
                        placeholder="Enter a password" name="password" required autocomplete="new-password">

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
{{-- <script src="{{url('js/instituteRegister.js')}}"></script> --}}

@endsection
