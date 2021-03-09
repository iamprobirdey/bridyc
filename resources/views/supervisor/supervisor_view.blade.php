@extends('student.layouts.master')


@section('css_code')
<link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}">
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="test.css"> -->
@endsection

@section('content')
<br>
<br>
<br>
<br>

@php
$form_data = json_decode($supervisorData[0]->form_data);
@endphp

<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4">
            <img class="i-logo" src="https://pbs.twimg.com/profile_images/631142672120451072/-z2Q6ZD9.png" alt="">
        </div>
        <div class="col-sm-6 col-md-8">

            <div class="mb-0 d-flex justify-content-left">
                <h5 class="mb-0 ">বিদ্যা ভাৰতী অখিল ভাৰতীয় শিক্ষা সংস্থানৰ সংবদ্ধ</h5>
            </div>
            <div class="mb-0 d-flex justify-content-left ml-tcenter">
                <h3 class="mb-0">শিশু শিক্ষা সমিতি, অসম</h3>
            </div>
            <div class="d-flex mb-0  justify-content-left">
                <h5 class="mb-0 ">ৰাধাগোবিন্দ বৰুৱা পথ, প্ৰশান্ত পথ, গুৱাহাটী - ৭৮১০২৮</h5>
            </div>
        </div>
    </div>

    <form class="form-horizontal mt-5">
        <div class="form-row">
            <div class="col-md-12">
                <label for="inputEmail4 letMePutOneColor">১| নিকেতনৰ নাম
                    <label class="btdash">{{$supervisorData[0]->channel->title}}</label>
                </label>
            </div>
        </div>

        <div class="form-row">
            <div class="col-md-3 col-sm-6">
                <label for="inputCity">{!! htmlspecialchars('স্থান') !!}</label>
                {{$form_data->step1->city}}
            </div>
            <div class="col-md-3 col-sm-6">
                <label for="text">ডাকঘৰ {{$form_data->step1->post_office}}</label>
            </div>
            <div class="col-md-3 col-sm-6">
                <label for="inputZip">জিলা {{$form_data->step1->district}}</label>
            </div>
            <div class="col-md-3 col-sm-6">
                <label>পিন {{$form_data->step1->pin}}</label>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-4 col-sm-6">
                <label for="inputCity">নিকেতন স্থাপনৰ তাৰিখ {{$form_data->step1->date}}</label>
            </div>
            <div class="col-md-4 col-sm-6">
                <label for="text">বিভাগ {{$form_data->step1->bibhag}}</label>
            </div>
            <div class="col-md-4">
                <label for="inputZip">সংকুল {{$form_data->step1->songkul}}</label>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6 col-sm-6">
                <label for="inputCity">প্ৰধানাচাৰ্যৰ মোবাইল নং : {{$form_data->step1->number}}</label>
            </div>
            <div class="col-md-6 col-sm-6">
                <label for="text">নিকেতনৰ দুৰাভাষ {{$form_data->step1->niketan}}</label>
            </div>
        </div>

        <div class="form-row">
            <div class="col-md-4 col-sm-6">
                <label for="inputCity">E-mail {{$form_data->step1->email}}</label>
            </div>
            <div class="col-md-4 col-sm-6">
                <label for="text">Website: {{$form_data->step1->website}}</label>
            </div>
            <div class="col-md-4">
                <label for="text">WhatApp +91{{$form_data->step1->whatsapp}}</label>
            </div>
        </div>
    </form>
    <form>
        <table class="table table-responsive-md table-bordered">
            <tr>
                <th rowspan="4" class="mx-auto">
                    শিশু বাটিকাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা - ২০২০ বৰ্ষ ।
                </th>
                <th>শিশু বাটিকা</th>
                <th>অংকুৰ</th>
                <th>মুকুল</th>
                <th>মুঠ</th>
                <th>আচাৰ্য</th>
                <th>
                    {{$form_data->step2->teacher_male_1}}
                </th>
            </tr>
            <tr>
                <th>ছাত্র</th>
                <th>
                    {{$form_data->step2->ankul_1}}
                </th>

                <th>
                    {{$form_data->step2->mukul_1}}
                </th>
                <th>
                    {{$form_data->step2->muth_1}}
                </th>
                <th>আচাৰ্যা</th>
                <th>
                    {{$form_data->step2->teacher_female_1}}
                </th>
            </tr>
            <tr>
                <th>ছাত্ৰী</th>
                <th>
                    {{$form_data->step2->ankul_2}}

                </th>
                <th>
                    {{$form_data->step2->mukul_2}}
                </th>
                <th>
                    {{$form_data->step2->muth_2}}
                </th>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step2->teacher_total_1}}

                </th>
            </tr>
            <tr>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step2->ankul_3}}
                </th>
                <th>
                    {{$form_data->step2->mukul_3}}
                </th>
                <th>
                    {{$form_data->step2->muth_3}}
                </th>
                <th>অন্য কৰ্মচাৰী</th>
                <th>
                    {{$form_data->step2->teacher_karmachari_1}}
                </th>
            </tr>
        </table>
    </form>
    <form>
        <table class="table table-responsive-md table-bordered">
            <tr>
                <th colspan="3" rowspan="4">
                    নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
                </th>
                <th>শ্ৰেণী</th>
                <th>১ম</th>
                <th>২য়</th>
                <th>৩য়</th>
                <th>৪ৰ্থ</th>
                <th>৫ম</th>
                <th>মুঠ</th>
                <th>আচাৰ্য</th>
                <th>
                    {{$form_data->step2->teacher_male_2}}

                </th>
            </tr>
            <tr>
                <th>ছাত্র</th>
                <th>
                    {{$form_data->step2->one_male}}

                </th>
                <th>
                    {{$form_data->step2->two_male}}
                </th>
                <th>
                    {{$form_data->step2->three_male}}

                </th>
                <th>
                    {{$form_data->step2->four_male}}

                </th>
                <th>
                    {{$form_data->step2->five_male}}

                </th>
                <th>
                    {{$form_data->step2->muth_male}}
                </th>
                <th>আচাৰ্যা</th>
                <th>
                    {{$form_data->step2->teacher_female_2}}

                </th>
            </tr>
            <tr>
                <th>ছাত্ৰী</th>
                <th>
                    {{$form_data->step2->one_female}}

                </th>
                <th>
                    {{$form_data->step2->two_female}}

                </th>
                <th>
                    {{$form_data->step2->three_female}}

                </th>
                <th>
                    {{$form_data->step2->four_female}}

                </th>
                <th>
                    {{$form_data->step2->five_female}}

                </th>
                <th>
                    {{$form_data->step2->muth_female}}

                </th>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step2->teacher_total_2}}

                </th>
            </tr>
            <tr>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step2->one_total}}
                </th>
                <th>
                    {{$form_data->step2->two_total}}
                </th>
                <th>
                    {{$form_data->step2->three_total}}

                </th>
                <th>
                    {{$form_data->step2->four_total}}
                </th>
                <th>
                    {{$form_data->step2->five_total}}
                </th>
                <th>
                    {{$form_data->step2->muth_total}}

                </th>
                <th>অন্য কৰ্মচাৰী</th>
                <th>
                    {{$form_data->step2->teacher_karmachari_2}}

                </th>
            </tr>
        </table>

        {{-- 3rd start --}}
    </form>
    <form>
        <table class="table table-responsive-md table-bordered">
            <tr>
                <th colspan="3" rowspan="4">
                    উচ্চ প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
                </th>
                <th>শ্ৰেণী</th>
                <th>৬ষ্ঠ</th>
                <th>৭ম</th>
                <th>৮ম</th>
                <th>মুঠ</th>
                <th>আচাৰ্য</th>
                <th>
                    {{$form_data->step3->teacher_male_1}}

                </th>
            </tr>
            <tr>
                <th>ছাত্র</th>
                <th>
                    {{$form_data->step3->six_male}}

                </th>
                <th>
                    {{$form_data->step3->seven_male}}
                </th>
                <th>
                    {{$form_data->step3->eight_male}}

                </th>
                <th>
                    {{$form_data->step3->muth_male_1}}

                </th>
                <th>আচাৰ্যা</th>
                <th>
                    {{$form_data->step3->teacher_female_1}}

                </th>
            </tr>
            <tr>
                <th>ছাত্ৰী</th>
                <th>
                    {{$form_data->step3->six_female}}

                </th>
                <th>
                    {{$form_data->step3->seven_female}}

                </th>
                <th>
                    {{$form_data->step3->eight_female}}

                </th>
                <th>
                    {{$form_data->step3->muth_female_1}}

                </th>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step3->teacher_female_1}}

                </th>
            </tr>
            <tr>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step3->six_total}}

                </th>
                <th>
                    {{$form_data->step3->seven_total}}

                </th>
                <th>
                    {{$form_data->step3->eight_total}}
                </th>
                <th>
                    {{$form_data->step3->muth_total_1}}

                </th>
                <th>অন্য কৰ্মচাৰী</th>
                <th>
                    {{$form_data->step3->teacher_karmachari_1}}

                </th>
            </tr>
        </table>
        <table class="table table-responsive-md table-bordered">
            <tr>
                <th rowspan="4" class="mx-auto">
                    উচ্চ মাধ্যমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
                </th>
                <th>শ্ৰেণী</th>
                <th>৯ম</th>
                <th>১০ম</th>
                <th>মুঠ</th>
                <th>আচাৰ্য</th>
                <th>
                    {{$form_data->step3->teacher_male_2}}
                </th>
            </tr>
            <tr>
                <th>ছাত্র</th>
                <th>
                    {{$form_data->step3->nine_male}}

                </th>
                <th>
                    {{$form_data->step3->ten_male}}

                </th>
                <th>
                    {{$form_data->step3->muth_male_2}}

                </th>
                <th>আচাৰ্যা</th>
                <th>
                    {{$form_data->step3->teacher_female_2}}

                </th>
            </tr>
            <tr>
                <th>ছাত্ৰী</th>
                <th>
                    {{$form_data->step3->nine_female}}

                </th>
                <th>
                    {{$form_data->step3->ten_female}}

                </th>
                <th>
                    {{$form_data->step3->muth_total_2}}

                </th>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step3->teacher_total_2}}

                </th>
            </tr>
            <tr>
                <th>মুঠ</th>
                <th>
                    {{$form_data->step3->nine_total}}

                </th>
                <th>
                    {{$form_data->step3->ten_total}}
                </th>
                <th>
                    {{$form_data->step3->muth_total_2}}
                </th>
                <th>অন্য কৰ্মচাৰী</th>
                <th>
                    {{$form_data->step3->teacher_total_2}}

                </th>
            </tr>
        </table>

        {{-- 4th --}}
    </form>
    <!-- deep1 -->
    <form>

        <div class="table table-responsive-md table-bordered ">
            <div class="row mt-2 ">
                <div class="row col-md-4">
                    <label class="d-flex align-items-end">চাৰিওটা শাখাৰ সৰ্বমুঠ :</label>
                    <div class="col">
                        <label class="mt-2">ছাত্র {{$form_data->step4->one}}</label>
                    </div>
                </div>
                <div class="col-md-4">
                    <label class="mt-2">ছাত্ৰী {{$form_data->step4->two}}</label>
                </div>
                <div class="col-md-4">
                    <label class="mt-2">মুঠ {{$form_data->step4->three}}</label>
                </div>
            </div>
            <!--  form 2 -->
            <div class="d-flex justify-content-end">
                <div class="col-md-3">
                    <label class="mt-2">আচাৰ্য {{$form_data->step4->four}}</label>
                </div>
                <div class="col-md-3">
                    <label class="mt-2">আচৰ্যা {{$form_data->step4->five}}</label>
                </div>
                <div class="col-md-3">
                    <label class="mt-2">মুঠ {{$form_data->step4->six}}</label>
                </div>
            </div>
            <div class="row mt-2">
                <div class="row col-md-4">
                    <label class="d-flex align-items-end">মুঠ অন্য কৰ্মচাৰী :</label>
                    <div class="col">
                        {{$form_data->step4->seven}}
                    </div>
                </div>
                <div class="row col-md-4">
                    <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত ..:</label>
                    <div class="col">
                        {{$form_data->step4->eight}}
                    </div>
                </div>
            </div>
            <div class="mt-2 row">
                <div class="row col-md-8">
                    <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ
                        সংখ্যা</label>
                    <div class="col">
                        <label class="mt-2">ছাত্র {{$form_data->step4->nine}}</label>
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="mt-2">ছাত্ৰী {{$form_data->step4->ten}}</label>
                </div>
                <div class="col-md-2">
                    <label class="mt-2">মুঠ {{$form_data->step4->eleven}}</label>
                </div>
            </div>
            <table class="table table-responsive-md mb0">
                <tr>
                    <th colspan="3" rowspan="4">
                        নিকেতনৰ দ্বাৰা পৰিচালিত সংস্কাৰ কেন্দ্ৰ
                    </th>
                    <th>সংখ্যা</th>
                    <th>ছাত্র</th>
                    <th>ছাত্ৰী</th>
                    <th>মুঠ</th>
                    <th>আচাৰ্য</th>
                    <th>আচাৰ্যা</th>
                    <th>মুঠ</th>
                </tr>
                <tr>
                    <th>
                        {{$form_data->step4->twelve}}

                    </th>
                    <th>
                        {{$form_data->step4->thirteen}}
                    </th>
                    <th>
                        {{$form_data->step4->fourteen}}

                    </th>
                    <th>
                        {{$form_data->step4->fiveteen}}

                    </th>
                    <th>
                        {{$form_data->step4->sixteen}}

                    </th>
                    <th>
                        {{$form_data->step4->seventeen}}

                    </th>
                    <th>
                        {{$form_data->step4->eighteen}}

                    </th>
                </tr>
            </table>
        </div>
    </form>

    <div class="page-break"></div>
    <form>
        <table class="table table-bordered table-responsive-md">
            <tbody>
                <tr>
                    <td>মুঠ ছাত্র-ছাত্ৰীৰ ভিতৰত কিমান জন</td>
                    <td>ছাত্র</td>
                    <td>ছাত্ৰী</td>
                    <td>মুঠ</td>
                    <td colspan="4">অন্য ধর্মাবলম্বী ছাত্র-ছাত্ৰী কিমান জন</td>
                </tr>
                <tr>
                    <td>(ক) অনুসূচীত জাতি (SC)</td>
                    <td>
                        {{$form_data->step5->sc_male}}

                    </td>
                    <td>
                        {{$form_data->step5->sc_female}}
                    </td>
                    <td>
                        {{$form_data->step5->sc_total}}

                    </td>
                    <td rowspan="2">(ক) (মুছলমান)</td>
                    <td>
                        <p>ছাত্র</p>
                    </td>
                    <td>
                        <p>ছাত্ৰী</p>
                    </td>
                    <td>মুঠ</td>
                </tr>
                <tr>
                    <td>(খ) অনুসূচীত জনজাতি (ST)</td>
                    <td>
                        {{$form_data->step5->st_male}}

                    </td>
                    <td>
                        {{$form_data->step5->st_female}}

                    </td>
                    <td>
                        {{$form_data->step5->st_total}}

                    </td>
                    <td>
                        {{$form_data->step5->muslim_male}}

                    </td>
                    <td>
                        {{$form_data->step5->muslim_female}}

                    </td>
                    <td>
                        {{$form_data->step5->muslim_total}}

                    </td>
                </tr>
                <tr>
                    <td>(গ) অন্যান্য পিছপৰা জাতি (OBC)</td>
                    <td>
                        {{$form_data->step5->obc_male}}

                    </td>
                    <td>
                        {{$form_data->step5->obc_female}}
                    </td>
                    <td>
                        {{$form_data->step5->obc_total}}

                    </td>
                    <td>(খ) খ্ৰীষ্টান</td>
                    <td>
                        {{$form_data->step5->chritian_male}}
                    </td>
                    <td>
                        {{$form_data->step5->chritian_female}}
                    </td>
                    <td>
                        {{$form_data->step5->chritian_total}}
                    </td>
                </tr>
            </tbody>
        </table>

        {{-- 6th Number --}}

    </form>
    <form>

        <div class=" row">
            <p class="mt-2 mr-2">(ক)</p>
            <p class="mt-2 mr-2">
                নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ
                ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা
            </p>

            <!-- <input type="text" class=""  /> -->
            <label class="col-1 mr-2 mt-2">{{$form_data->step6->one}}</label>

            <p class="mt-2 mr-2">নগৰীয়া বস্তিৰ সংখ্যা</p>
            <label class="col-1 mr-2 mt-2">{{$form_data->step6->two}}</label>
            <p class="mt-2 mr-2">ৱাৰ্ডৰ সংখ্যা</p>
            <label class="col-1 mr-2 mt-2">{{$form_data->step6->three}}</label>
            <p class="mt-2 mr-2">
                গাঁৱৰ তালিকা বেলেগে সংলগ্ন কৰি গাঁৱৰ পৰা অহা ছাত্র-ছাত্ৰী সংখ্যা দিব |
            </p>
        </div>

        <div class="row">
            <div class="col">(খ) মাহিলী শিক্ষণ শুল্ক :</div>
            <table class="table col-8 table-responsive table-borderless">
                <tbody>
                    <tr>
                        <td>অংকুৰ, মুকুল</td>
                        <td>
                            {{$form_data->step6->four}}

                        </td>
                        <td>১মৰ পৰা ৫ ম</td>
                        <td>
                            {{$form_data->step6->five}}
                        </td>
                    </tr>
                    <tr>
                        <td>৬ষ্টৰ পৰা ৮ ম</td>
                        <td>
                            {{$form_data->step6->six}}
                        </td>
                        <td>৯ ম আৰু ১০ ম</td>
                        <td>
                            {{$form_data->step6->seven}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(গ)</p>
            <p class="mt-2 mr-2">(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step6->eight}}</label>

            <p class="mt-2 mr-2">(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step6->nine}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(ঘ)</p>
            <p class="mt-2 mr-2">
                নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি
                প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।
            </p>
            <p class="mt-2 mr-2">যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step6->ten}}</label>

            নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু
            কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step6->eleven}}</label>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :
            </p>

            <label class="col-2 mr-2 mt-2">{{$form_data->step6->twelve}}</label>


        </div>
        <div class="  row">
            <p class="mt-2 mr-2">
                (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?
            </p>

            <label class="col-2 mr-2 mt-2">{{$form_data->step6->thirteen}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত
                কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ
                আওতালৈ আনিব লাগে ।
            </p>
        </div>


        {{-- 7th Number --}}

    </form>
    <form>
        <div class=" row">
            <p class="mt-2 mr-2"></p>
            ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->one}}</label>
            <p class="mt-2 mr-2">
                স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->two}}</label>
            <p class="mt-2 mr-2">
                শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->three}}</label>
            <p class="mt-2 mr-2">প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে)
                :
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->four}}</label>
            <p class="mt-2 mr-2">প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->five}}</label>
            <p class="mt-2 mr-2">নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।</p>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->six}}</label>
            <p class="mt-2 mr-2">মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন
                দিব
                )।
            </p>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(খ) নিকেতনখন</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->seven}}</label>
            <p class="mt-2 mr-2">পঞ্চায়ত,</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->eight}}</label>
            <p class="mt-2 mr-2">উন্নয়ন খণ্ড (ব্লক)ত</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->nine}}</label>
            <p class="mt-2 mr-2">মহকুমাত অৱস্থিত ।</p>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->ten}}</label>
            <p class="mt-2 mr-2">টা /আলমাৰী সংখ্যা</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->eleven}}</label>
            <p class="mt-2 mr-2">টা/কিতাবৰ সংখ্যা</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->twelve}}</label>
            <p class="mt-2 mr-2">খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )</p>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )</p>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->thirteen}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) ।
                প্ৰথনা
                বিদ্যা
                ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )
                । বহি প্ৰাৰ্থনা হয়নে ?</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->fourteen}}</label>
        </div>


        {{-- 8th Row --}}

    </form>
    <form>

        <div class="d-flex justify-content-center">
            <h5 class="mb-0 h4 titleCentre">
                নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ ক্ষেত্ৰত যিটো প্ৰযোজ্য
                হয় তাত (✓) চীন দিব ।
            </h5>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->one}}</label>

            <p class="mt-2 mr-2">
                (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
                হৈছে, পঞ্জীয়ন নম্বৰ দিব
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->two}}</label>
            <p class="mt-2 mr-2">
                (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->three}}</label>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->four}}</label>

            <p class="mt-2 mr-2">
                (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
                হৈছে, পঞ্জীয়ন নম্বৰ দিব
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->five}}</label>

            <p class="mt-2 mr-2">
                (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->six}}</label>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->seven}}</label>
            <p class="mt-2 mr-2">
                (যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )
            </p>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">
                (গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয়
                উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->eight}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ
                পৰা অনুমোদন পোৱা চন
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->nine}}</label>

        </div>

        <div class=" row">
            <p class="mt-2 mr-2">
                ৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->ten}}</label>


        </div>
        <div class="  row">
            <p class="mt-2 mr-2">
                (খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা বনাই পাঠ দান
                কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->eleven}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত
                কেইটাকৈ Class
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->twelve}}</label>

            <p class="mt-2 mr-2">হয় ।</p>
        </div>

        <div class=" row">
            <p class="mt-2 mr-2">(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->thirteen}}</label>

        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step7->fourteen}}</label>


            <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->one}}</label>


            <p class="mt-2 mr-2">
                নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল
                ৰূপ
            </p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->two}}</label>
        </div>
        <div class=" row">
            <p class="mt-2 mr-2">(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->three}}</label>
            <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->four}}</label>
            <p class="mt-2 mr-2">যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->nineteen}}</label>

            <p class="mt-2 mr-2">কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।</p>
            <label class="col-2 mr-2 mt-2">{{$form_data->step8->twenty}}</label>


        </div>
        <div class=" row">
            <p class="mt-2 mr-2">
                (ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory) বাবে Atal
                Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই? ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা
                দশম শ্ৰেণীলৈ মুঠ ৪০০ ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ
                ক্ষেত্ৰত প্ৰযোজ্য )
            </p>
        </div>


        {{-- 9th Number --}}

    </form>
    <div class="page-break"></div>
    <form>

        <div class="d-flex justify-content-center">
            <h5 class="mb-0 h5">বিদ্যা ভাৰতী অখিল ভাৰতীয় শিক্ষা সংস্থানৰ সংবদ্ধ</h5>
        </div>
        <div class="mt-2 d-flex justify-content-center">
            <h2 class="mb-0 tit leCentre">শিশু শিক্ষা সমিতি, অসম</h2>
        </div>
        <div class="mb-2 mt-2 d-flex justify-content-center">
            <h5 class="mb-0 h5">
                ৰাধাগোবিন্দ বৰুৱা পথ, প্ৰশান্ত পথ, গুৱাহাটী - ৭৮১০২৮
            </h5>
        </div>
        <div class=" row justify-content-between">
            <div class="col-4 mt-3">
                <p class="">আচাৰ্য/আচাৰ্যাৰ বিৱৰণ - ২০২০</p>
            </div>

            <div class=" col-4 row">
                <p class="mt-2 mr-2">নিকেতনৰ নাম</p>
                <label class="col-2 mr-2 mt-2">{{$form_data->step9->institute_name}}</label>

            </div>
        </div>
        <!--  -->

        <table class="table table-bordered">
            <tbody>
                <tr>
                    <td>ক্ৰ: নং.</td>
                    <td>
                        প্ৰধানাচাৰ্য, শিশু বাটিকা প্ৰমুখ আৰু বালিকা শিক্ষা প্ৰমুখৰ নাম
                        ক্ৰমে লিখিব ।
                    </td>
                    <td>জন্মৰ তাৰিখ আৰু ব্লাড গ্ৰুপ</td>
                    <td>নিকেতনৰ যোগদানৰ তাৰিখ আৰু মোবাইল নং</td>
                    <td>ই-মেইল আই ডি</td>
                    <td>হুৱাটছআপ নম্বৰ</td>
                    <td>শিক্ষাগত অৰ্হতা</td>
                    <td>পাঠদান কৰা মূল বিষয়</td>
                    <td>৭ দিনীয়া</td>
                    <td>১৫ দিনীয়া</td>
                </tr>
                <tr>
                    <td>১</td>
                    <td>
                        {{$form_data->step9->one_name}}

                    </td>
                    <td>
                        {{$form_data->step9->one_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->one_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->one_mohila}}
                    <td>
                        {{$form_data->step9->one_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->one_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->one_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->one_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->one_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>২</td>
                    <td>
                        {{$form_data->step9->two_name}}
                    </td>
                    <td>
                        {{$form_data->step9->two_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->two_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->two_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->two_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->two_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->two_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->two_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->two_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>৩</td>
                    <td>
                        {{$form_data->step9->three_name}}
                    </td>
                    <td>
                        {{$form_data->step9->three_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->three_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->three_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->three_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->three_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->three_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->three_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->three_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">আধাৰভূত বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>৪</td>
                    <td>
                        {{$form_data->step9->four_name}}
                    </td>
                    <td>
                        {{$form_data->step9->four_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->four_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->four_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->four_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->four_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->four_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->four_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->four_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>৫</td>
                    <td>
                        {{$form_data->step9->five_name}}
                    </td>
                    <td>
                        {{$form_data->step9->five_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->five_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->five_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->five_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->five_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->five_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->five_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->five_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>৬</td>
                    <td>
                        {{$form_data->step9->six_name}}
                    </td>
                    <td>
                        {{$form_data->step9->six_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->six_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->six_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->six_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->six_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->six_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->six_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->six_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>৭</td>
                    <td>
                        {{$form_data->step9->seven_name}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->seven_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>৮</td>
                    <td>
                        {{$form_data->step9->eight_name}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->eight_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">বিজ্ঞান বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>৯</td>
                    <td>
                        {{$form_data->step9->nine_name}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->nine_15_diniya}}
                    </td>
                </tr>
                <!-- deep2 -->
                <tr>
                    <td>১০</td>
                    <td>{{$form_data->step9->ten_name}}
                    <td>{{$form_data->step9->ten_start_date}}
                    <td>{{$form_data->step9->ten_end_date}}
                    <td>{{$form_data->step9->ten_mohila}}
                    <td>{{$form_data->step9->ten_nondor}}
                    <td>{{$form_data->step9->ten_ahota}}
                    <td>{{$form_data->step9->ten_pathdam}}
                    <td>{{$form_data->step9->ten_7_diniya}}
                    <td>{{$form_data->step9->ten_15_diniya}}
                </tr>
                <tr>
                    <td>১১</td>
                    <td>
                        {{$form_data->step9->eleven_name}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->eleven_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>১২</td>
                    <td>
                        {{$form_data->step9->twelve_name}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->twelve_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td colspan="2">আচৰ্য/আচাৰ্যাৰ আৰু অন্য কৰ্মচাৰীৰ নাম লিখিব</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>১৩</td>
                    <td>
                        {{$form_data->step9->thirteen_name}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->thirteen_15_diniya}}
                    </td>
                </tr>
                <tr>
                    <td>১৪</td>
                    <td>
                        {{$form_data->step9->fourteen_name}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_start_date}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_end_date}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_mohila}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_nondor}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_ahota}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_pathdam}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_7_diniya}}
                    </td>
                    <td>
                        {{$form_data->step9->fourteen_15_diniya}}
                    </td>
                </tr>
            </tbody>
        </table>

    </form>
</div>

@endsection

@section('js_code')


@endsection