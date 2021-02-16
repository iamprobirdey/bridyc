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
                <h1>Step 1</h1>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputEmail4">Institute Name</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Enter your Institute Name">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="text">Post Office</label>
                            <input type="text" class="form-control" id="inputCity">

                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputZip">District</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputZip">Pin</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">1</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="text">2</label>
                            <input type="text" class="form-control" id="inputCity">

                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputZip">3</label>
                            <input type="text" class="form-control" id="inputZip">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">1</label>
                            <input type="text" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="text">2</label>
                            <input type="text" class="form-control" id="inputCity">

                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">Email</label>
                            <input type="email" class="form-control" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="text">Website</label>
                            <input type="text" class="form-control" id="inputCity">

                        </div>
                        <div class="col-md-4 "><label for="text">WhatApp</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">+91</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <button type="submit" class="btn btn-outline-primary">Next</button>
                    </div>
                </form>
                <h1>Step 2</h1>

                <table class="table table-responsive-md table-bordered">
                    <tr>
                        <th rowspan="4" class="mx-auto ">শিশু বাটিকাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা - ২০২০ বৰ্ষ ।
                        </th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control " value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>

                </table>
                <table class="table table-responsive-md table-bordered">
                    <tr>
                        <th colspan="3" rowspan="4">নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control " value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                </table>
                <table class="table table-responsive-md table-bordered">
                    <tr>
                        <th colspan="3" rowspan="4">উচ্চ প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                </table>
                <table class="table table-responsive-md table-bordered">
                    <tr>
                        <th rowspan="4" class="mx-auto ">উচ্চ মাধ্যমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
                        </th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                        <th>Handle</th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                    <tr>
                        <th>First</th>
                        <th><input type="text" class="form-control " value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th><input type="text" class="form-control" value=" " /></th>
                        <th>Handle</th>
                        <th><input type="text" class="form-control" value=" " /></th>
                    </tr>
                </table>
                <form action="">
                    <div class="table-bordered">
                        <div class="form-row">
                            <div class="form-group row col-md-4 ">
                                <label class="d-flex align-items-end ">চাৰিওটা শাখাৰ সৰ্বমুঠ :</label>
                                <div class="col ">
                                    <label for="text">ছাত্র </label>
                                    <input type="text" class="form-control" placeholder="ছাত্র ">
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="text">ছাত্ৰী</label>
                                <input type="text" class="form-control" placeholder="ছাত্ৰী">

                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">মুঠ</label>
                                <input type="text" class="form-control" placeholder="মুঠ">
                            </div>
                        </div>
                        <!--  form 2 -->
                        <div class="d-flex flex-row-reverse">
                            <div class="form-group col-md-3 ">
                                <label for="inputCity">আচাৰ্য </label>
                                <input type="text" class="form-control" placeholder="আচাৰ্য">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="text">আচৰ্যা</label>
                                <input type="text" class="form-control" placeholder="আচৰ্যা">

                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputZip">মুঠ</label>
                                <input type="text" class="form-control" placeholder="মুঠ">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="মুঠ অন্য কৰ্মচাৰী">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name">
                            </div>
                        </div>
                        <div class="form-row ">
                            <div class="form-group row col-md-8">
                                <label class="d-flex align-items-end ">প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ সংখ্যা</label>
                                <div class="col ">
                                    <label for="text">ছাত্র </label>
                                    <input type="text" class="form-control" id="inputPassword" placeholder="Text ">
                                </div>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="text">ছাত্ৰী </label>
                                <input type="text" class="form-control" id="inputCity">

                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">মুঠ </label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                        </div>
                        <table class="table table-responsive-md table-bordered">
                            <tr>
                                <th colspan="3" rowspan="4">নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Handle</th>
                                <th>Handle</th>
                                <th>Handle</th>
                                <th>Handle</th>
                                <th>Handle</th>
                            </tr>
                            <tr>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                                <th><input type="text" class="form-control" value=" " /></th>
                            </tr>
                        </table>
                    </div>
                    <h1>Step 3</h1>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td colspan="4">Otto</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td rowspan="2">Otto</td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td>Otto</td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                                <td><input type="text" class="form-control" value=" " /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            </div>
        </main>
    </div>
</div>
@endsection

@section('js_code')
<script src="{{url('js/app.js')}}"></script>
<script src="{{url('js/dashboardBlade.js')}}"></script>
<script src="{{url('js/ChannelNotification.js')}}"></script>
{{-- <script src="{{env('APP_URL')}}{{mix('/js/editChannel.js')}}"></script> --}}
@endsection