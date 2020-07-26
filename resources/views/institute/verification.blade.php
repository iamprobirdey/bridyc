@extends('layouts.master')

@section('css_code')
    <link rel="stylesheet" type="text/css" href="{{url('css/institutedashboard.css')}}">
@endsection
@section('content')
    <div class="container-fluid">
        <div class="row">
            @include('layouts.sidebar')
            <main role="main" class="col-lg-10 ml-lg-auto">
                <br>
                <br>

                <div class="container">
                    <div class="row">
                        <div id="verification">
                            <verification
                        :places="{{json_encode($allPlaces)}}"
                        :user="{{json_encode($usersVerification)}}"
                        :languages="{{json_encode($languages)}}"
                        :auth="{{json_encode($authUser)}}"
                        ></verification>
                        </div>
                    </div>
                </div>
              </main>
        </div>
    </div>
@endsection

@section('js_code')
    <script src="{{url('js/app.js')}}"></script>
    <script src="{{url('js/dashboardBlade.js')}}"></script>
    <script src="{{url('js/verification.js')}}"></script>
@endsection
