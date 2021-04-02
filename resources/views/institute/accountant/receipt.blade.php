@extends('layouts.master')


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
                <h2>Admission Details</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Admission Number</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Class</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Category</th>
                            <th scope="col">Total Balance</th>
                            <th scope="col">Total Pending Balance</th>
                            <th scope="col">Paid Balance</th>
                            <th scope="col">Print Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                        //dd($admission);
                        @endphp
                        <tr>
                            <td>
                                {{$admission->admission_number}}
                            </td>
                            <td>
                                {{$admission->name}}
                            </td>
                            <td>
                                {{$admission->standard[0]->accountclass->name}}
                            </td>
                            <td>
                                {{$admission->phone}}
                            </td>
                            <td>
                                {{$admission->category}}
                            </td>
                            <td>
                                {{$admission->total_balance}}
                            </td>
                            <td>
                                {{$admission->old_balance}}
                            </td>
                            <td>
                                {{$admission->balance_taken}}
                            </td>
                            <td>
                                <a href="{{url()->full() . '/get'}}">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        width="30" height="30" style="cursor: pointer; color: #6626a3">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Monthly Details</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Class</th>

                            <th scope="col">Paid Balance</th>
                            <th scope="col">Print Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($admission->monthlybill as $item)
                        <tr>
                            <td>
                                {{  $item->month->name  }}
                            </td>
                            <td>
                                @php
                                $ledger =
                                \App\AdmissionMonthlyBillLedger::where('monthly_bill_id',$item->id)
                                ->with('ledger')
                                ->get();
                                @endphp
                                @isset($ledger[0]->ledger->balance)
                                {{$ledger[0]->ledger->balance}}
                                @endisset
                            </td>
                            <td>
                                <a href="{{url()->full() . '/get/'.$item->id}}">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        width="30" height="30" style="cursor: pointer; color: #6626a3">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection
