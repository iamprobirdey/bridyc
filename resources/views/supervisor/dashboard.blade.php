@extends('supervisor.index')


@section('title','Bridyc – Explore career possibilities|Learn from Achiever’s|Find Institute')
@section('desc','BRIDYC is dedicated to empower young minds with the real life exposure and
activities and provide access to students and parents in particular, who are looking for
cross-training their minds before choosing an institute or a career. The platform will allow
students to share their learnings, learn from their peers and from the people who have already
crossed those paths')
@section('keywords','Best school in Assam, Junior college in Karbi Anglong, best school in diphu, Online career guidance
in Assam,
Schools in Guwahati, Career guidance in Assam, Online admission in junior college, career guidance in assam school,
career guidance in assam website online zoology,
career guidance in Assam website details, career guidance in assam website Guwahati, career guidance in Assam website
link,
career guidance in Assam website online youtube, career counselling Assam website, best educational podcasts for
students, Collectibles,
best educational podcasts for college students, best career coaching podcast, best career advice videos, biology career
video')


@section('supervisorContent')
<style>
    .margin-fill {
        margin-left: 4px;
        margin-right: 4px;

    }

    .t-text {
        white-space: nowrap !important;
    }
</style>
<div class="container">

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h2 class="h4 mb-0">
            Overview
        </h2>
    </div>

    <div class="row mb-4">
        <div class="p-1 col-6">
            <div class="card-body shadow-sm" style="background-color: #E7F7FF; height: 150px;">
                <div class="d-flex card-title">
                    <h5>{{$channelCount}}</h5>
                    <p class="ml-auto ">
                        <img class="i-dash" src="/images/custom/icons/eye.svg">
                    </p>
                </div>
                <div class="d-flex">
                    <b class="text-primary">Total Number of Institute</b>
                    {{-- <p class="ml-auto btn-sm btn btn-outline-primary">View All</p> --}}
                </div>
            </div>
        </div>
        <div class="p-1 col-6">
            <div class="card-body shadow-sm" style="background-color: #FFF9ED;height: 150px;">
                <div class="d-flex card-title">
                    <h5>{{$totalSiteVisit}}</h5>
                    <p class="ml-auto ">
                        <img class="i-dash" src="/images/custom/icons/eye.svg">
                    </p>
                </div>
                <div class="d-flex">
                    <b class="text-primary">Total Visitor</b>
                    {{-- <p class="ml-auto btn-sm btn btn-outline-primary">View All</p> --}}
                </div>
            </div>
        </div>

    </div>
    <div class="margin-fill">
        <div class="row  mt-2 d-flex d-flex justify-content-between">
            <div id="weather">
                <weather></weather>
            </div>
            {{-- <div class="col-sm-12 col-lg-4 shadow-sm ">
                <div class="table-responsive">
                    <table class="t-text table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>iPhone X 64Gb Grey</th>
                                <td>$999.00</td>
                                <td>1</td>
                                <td>$999.00</td>
                            </tr>
                            <tr>
                                <th>iPhone X 64Gb Grey</th>
                                <td>$999.00</td>
                                <td>1</td>
                                <td>$999.00</td>
                            </tr>
                            <tr>
                                <th>iPhone X 64Gb Grey</th>
                                <td>$999.00</td>
                                <td>1</td>
                                <td>$999.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> --}}
        </div>
    </div>

</div>

@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
<script src="{{url('js/weather.js')}}"></script>
@endsection
