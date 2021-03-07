{{-- @extends('student.layouts.master') --}}

<html>

{{-- @section('css_code') --}}

{{-- @endsection
@section('content') --}}
<br>
<br>
<br>
<br>

@php
$form_data = json_decode($supervisorData[0]->form_data);
//dd($supervisorData[0]->channel->title);
//dd($form_data->step1->city);


@endphp

<head>
    {{-- <link rel="stylesheet" type="text/css" href="{{url('css/app.css')}}"> --}}
    <style>
        .page-break {
            page-break-after: always;
        }

        .letMePutOneColor {
            color: red
        }

        body {
            font-family: 'examplefont', sans-serif;
        }
    </style>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> --}}
</head>

<body>
    <div class="container">
        <form class="form-horizontal ">
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4 letMePutOneColor">নিকেতনৰ নাম</label>
                    <input value="{{$supervisorData[0]->channel->title}}" type="text" name="institute_name"
                        class="form-control" placeholder="নিকেতনৰ নাম" />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3 col-sm-6">
                    <label for="inputCity">{!! htmlspecialchars('স্থান') !!}</label>
                    <input value="{{$form_data->step1->city}}" type="text" name="city" class="form-control" />
                </div>
                <div class="form-group col-md-3 col-sm-6">
                    <label for="text">ডাকঘৰ</label>
                    <input value="{{$form_data->step1->post_office}}" name="post_office" type="text"
                        class="form-control" />
                </div>
                <div class="form-group col-md-3 col-sm-6">
                    <label for="inputZip">জিলা</label>
                    <input type="text" class="form-control" name="district" value="{{$form_data->step1->district}}" />
                </div>
                <div class="form-group col-md-3 col-sm-6">
                    <label>পিন</label>
                    <input type="number" class="form-control" name="pin" value="{{$form_data->step1->pin}}" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4 col-sm-6">
                    <label for="inputCity">নিকেতন স্থাপনৰ তাৰিখ</label>
                    <input type="date" class="form-control" name="date" value="{{$form_data->step1->date}}" />
                </div>
                <div class="form-group col-md-4 col-sm-6">
                    <label for="text">বিভাগ</label>
                    <input type="text" class="form-control" name="bibhag" value="{{$form_data->step1->bibhag}}" />
                </div>
                <div class="form-group col-md-4">
                    <label for="inputZip">সংকুল</label>
                    <input type="text" class="form-control" name="songkul" value="{{$form_data->step1->songkul}}" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6">
                    <label for="inputCity">প্ৰধানাচাৰ্যৰ মোবাইল নং :</label>
                    <input type="number" class="form-control" name="number" value="{{$form_data->step1->number}}" />
                </div>
                <div class="form-group col-md-6 col-sm-6">
                    <label for="text">নিকেতনৰ দুৰাভাষ</label>
                    <input type="text" class="form-control" name="niketan" value="{{$form_data->step1->niketan}}" />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4 col-sm-6">
                    <label for="inputCity">ই-মেইল</label>
                    <input type="email" class="form-control" name="email" value="{{$form_data->step1->email}}" />
                </div>
                <div class="form-group col-md-4 col-sm-6">
                    <label for="text">ৱেবছাইট</label>
                    <input type="text" class="form-control" name="website" value="{{$form_data->step1->website}}" />
                </div>
                <div class="form-group col-md-4">
                    <label for="text">মোবাইল নম্বৰ</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">+91</div>
                        </div>
                        <input type="number" class="form-control" placeholder="Username" name="whatsapp"
                            value="{{$form_data->step1->whatsapp}}" />
                    </div>
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
                        <input type="number" class="form-control" name="teacher_male_1" placeholder="Teacher"
                            value="{{$form_data->step2->teacher_male_1}}" />
                    </th>
                </tr>
                <tr>
                    <th>ছাত্র</th>
                    <th>
                        <input type="number" class="form-control" name="ankul_1" placeholder=""
                            value="{{$form_data->step2->ankul_1}}" />
                    </th>

                    <th>
                        <input type="number" class="form-control" name="mukul_1" placeholder="Teacher"
                            value="{{$form_data->step2->mukul_1}}" />
                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_1" placeholder="Total"
                            value="{{$form_data->step2->muth_1}}" />
                    </th>
                    <th>আচাৰ্যা</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_female_1" placeholder="Ankul"
                            value="{{$form_data->step2->teacher_female_1}}" />
                    </th>
                </tr>
                <tr>
                    <th>ছাত্ৰী</th>
                    <th>
                        <input type="number" class="form-control" name="ankul_2" placeholder="abc"
                            value="{{$form_data->step2->ankul_2}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="mukul_2" placeholder="pro"
                            value="{{$form_data->step2->mukul_2}}" />
                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_2" placeholder="muth"
                            value="{{$form_data->step2->muth_2}}" />
                    </th>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_total_1" placeholder="muth"
                            value="{{$form_data->step2->teacher_total_1}}" />

                    </th>
                </tr>
                <tr>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="ankul_3" placeholder="muth"
                            value="{{$form_data->step2->ankul_3}}" />
                    </th>
                    <th>
                        <input type="number" class="form-control" name="mukul_3" placeholder="muth"
                            value="{{$form_data->step2->mukul_3}}" />
                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_3" placeholder="muth"
                            value="{{$form_data->step2->muth_3}}" />
                    </th>
                    <th>অন্য কৰ্মচাৰী</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_karmachari_1" placeholder="muth"
                            value="{{$form_data->step2->teacher_karmachari_1}}" />
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
                        <input type="number" class="form-control" name="teacher_male_2" placeholder="Teacher"
                            value="{{$form_data->step2->teacher_male_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্র</th>
                    <th>
                        <input type="number" class="form-control" name="one_male" placeholder="Teacher"
                            value="{{$form_data->step2->one_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="two_male" placeholder="Teacher"
                            value="{{$form_data->step2->two_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="three_male" placeholder="Teacher"
                            value="{{$form_data->step2->three_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="four_male" placeholder="Teacher"
                            value="{{$form_data->step2->four_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="five_male" placeholder="Teacher"
                            value="{{$form_data->step2->five_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_male" placeholder="Teacher"
                            value="{{$form_data->step2->muth_male}}" />

                    </th>
                    <th>আচাৰ্যা</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_female_2" placeholder="Teacher"
                            value="{{$form_data->step2->teacher_female_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্ৰী</th>
                    <th>
                        <input type="number" class="form-control" name="one_female" placeholder="Teacher"
                            value="{{$form_data->step2->one_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="two_female" placeholder="Teacher"
                            value="{{$form_data->step2->two_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="three_female" placeholder="Teacher"
                            value="{{$form_data->step2->three_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="four_female" placeholder="Teacher"
                            value="{{$form_data->step2->four_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="five_female" placeholder="Teacher"
                            value="{{$form_data->step2->five_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_female" placeholder="Teacher"
                            value="{{$form_data->step2->muth_female}}" />

                    </th>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_total_2" placeholder="Teacher"
                            value="{{$form_data->step2->teacher_total_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="one_total" placeholder="Teacher"
                            value="{{$form_data->step2->one_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="two_total" placeholder="Teacher"
                            value="{{$form_data->step2->two_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="three_total" placeholder="Teacher"
                            value="{{$form_data->step2->three_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="four_total" placeholder="Teacher"
                            value="{{$form_data->step2->four_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="five_total" placeholder="Teacher"
                            value="{{$form_data->step2->five_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_total" placeholder="Teacher"
                            value="{{$form_data->step2->muth_total}}" />

                    </th>
                    <th>অন্য কৰ্মচাৰী</th>
                    <th>
                        <input type="number" class="form-control" name="teacher_karmachari_2" placeholder="Teacher"
                            value="{{$form_data->step2->teacher_karmachari_2}}" />

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
                        <input type="number" class="form-control" name="teacher_male_1" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_male_1}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্র</th>
                    <th>
                        <input type="number" class="form-control" name="six_male" placeholder="Teacher"
                            value="{{$form_data->step3->six_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="seven_male" placeholder="Teacher"
                            value="{{$form_data->step3->seven_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="eight_male" placeholder="Teacher"
                            value="{{$form_data->step3->eight_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_male_1" placeholder="Teacher"
                            value="{{$form_data->step3->muth_male_1}}" />

                    </th>
                    <th>আচাৰ্যা</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_female_1}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্ৰী</th>
                    <th>
                        <input type="number" class="form-control" name="six_female" placeholder="Teacher"
                            value="{{$form_data->step3->six_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="seven_female" placeholder="Teacher"
                            value="{{$form_data->step3->seven_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="eight_female" placeholder="Teacher"
                            value="{{$form_data->step3->eight_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_female_1" placeholder="Teacher"
                            value="{{$form_data->step3->muth_female_1}}" />

                    </th>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_female_1}}" />

                    </th>
                </tr>
                <tr>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="six_total" placeholder="Teacher"
                            value="{{$form_data->step3->six_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="seven_total" placeholder="Teacher"
                            value="{{$form_data->step3->seven_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="eight_total" placeholder="Teacher"
                            value="{{$form_data->step3->eight_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_total_1" placeholder="Teacher"
                            value="{{$form_data->step3->muth_total_1}}" />

                    </th>
                    <th>অন্য কৰ্মচাৰী</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_karmachari_1}}" />

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
                        <input type="number" class="form-control" name="teacher_male_2" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_male_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্র</th>
                    <th>
                        <input type="number" class="form-control" name="nine_male" placeholder="Teacher"
                            value="{{$form_data->step3->nine_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="ten_male" placeholder="Teacher"
                            value="{{$form_data->step3->ten_male}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_male_2" placeholder="Teacher"
                            value="{{$form_data->step3->muth_male_2}}" />

                    </th>
                    <th>আচাৰ্যা</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_female_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>ছাত্ৰী</th>
                    <th>
                        <input type="number" class="form-control" name="nine_female" placeholder="Teacher"
                            value="{{$form_data->step3->nine_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="ten_female" placeholder="Teacher"
                            value="{{$form_data->step3->ten_female}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_total_2" placeholder="Teacher"
                            value="{{$form_data->step3->muth_total_2}}" />

                    </th>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_total_2}}" />

                    </th>
                </tr>
                <tr>
                    <th>মুঠ</th>
                    <th>
                        <input type="number" class="form-control" name="nine_total" placeholder="Teacher"
                            value="{{$form_data->step3->nine_total}}" />

                    </th>
                    <th>
                        <input type="number" class="form-control" name="ten_total" placeholder="Teacher"
                            value="{{$form_data->step3->ten_total}}" />
                    </th>
                    <th>
                        <input type="number" class="form-control" name="muth_total_2" placeholder="Teacher"
                            value="{{$form_data->step3->muth_total_2}}" />
                    </th>
                    <th>অন্য কৰ্মচাৰী</th>
                    <th>
                        <input type="number" class="form-control" placeholder="Teacher"
                            value="{{$form_data->step3->teacher_total_2}}" />

                    </th>
                </tr>
            </table>

            {{-- 4th --}}
        </form>
        <form>
            <div class="table-bordered">
                <div class="row mt-2">
                    <div class="form-group row col-md-4">
                        <label class="d-flex align-items-end">চাৰিওটা শাখাৰ সৰ্বমুঠ :</label>
                        <div class="col">
                            <input type="number" class="form-control" name="one" placeholder="ছাত্র "
                                value="{{$form_data->step4->one}}" />

                        </div>
                    </div>
                    <div class="form-group col-md-4">
                        <input type="number" class="form-control" name="two" placeholder="ছাত্ৰী"
                            value="{{$form_data->step4->two}}" />

                    </div>
                    <div class="form-group col-md-4">
                        <input type="number" class="form-control" name="three" placeholder="মুঠ"
                            value="{{$form_data->step4->three}}" />

                    </div>
                </div>
                <!--  form 2 -->
                <div class="d-flex justify-content-end">
                    <div class="form-group col-md-3">
                        <input type="number" class="form-control" name="four" placeholder="আচাৰ্য"
                            value="{{$form_data->step4->four}}" />

                    </div>
                    <div class="form-group col-md-3">
                        <input type="number" class="form-control" name="five" placeholder="আচৰ্যা"
                            value="{{$form_data->step4->five}}" />

                    </div>
                    <div class="form-group col-md-3">
                        <input type="number" class="form-control" name="six" placeholder="মুঠ"
                            value="{{$form_data->step4->six}}" />

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="form-group row col-md-4">
                        <label class="d-flex align-items-end">মুঠ অন্য কৰ্মচাৰী :</label>
                        <div class="col">
                            <input type="number" class="form-control" name="seven" placeholder=""
                                value="{{$form_data->step4->seven}}" />

                        </div>
                    </div>
                    <div class="form-group row col-md-4">
                        <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত ..:</label>
                        <div class="col">
                            <input type="number" class="form-control" name="eight" placeholder=""
                                value="{{$form_data->step4->eight}}" />

                        </div>
                    </div>
                </div>
                <div class="mt-2 row">
                    <div class="form-group row col-md-8">
                        <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ
                            সংখ্যা</label>
                        <div class="col">
                            <input type="number" class="form-control" name="nine" placeholder="ছাত্র"
                                value="{{$form_data->step4->nine}}" />

                        </div>
                    </div>
                    <div class="form-group col-md-2">
                        <input type="number" class="form-control" name="ten" placeholder="ছাত্ৰী"
                            value="{{$form_data->step4->ten}}" />

                    </div>
                    <div class="form-group col-md-2">
                        <input type="number" class="form-control" name="eleven" placeholder="মুঠ"
                            value="{{$form_data->step4->eleven}}" />

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
                            <input type="number" class="form-control" name="twelve" placeholder="মুঠ"
                                value="{{$form_data->step4->twelve}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="thirteen" placeholder="মুঠ"
                                value="{{$form_data->step4->thirteen}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="fourteen" placeholder="মুঠ"
                                value="{{$form_data->step4->fourteen}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="fiveteen" placeholder="মুঠ"
                                value="{{$form_data->step4->fiveteen}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="sixteen" placeholder="মুঠ"
                                value="{{$form_data->step4->sixteen}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="seventeen" placeholder="মুঠ"
                                value="{{$form_data->step4->seventeen}}" />

                        </th>
                        <th>
                            <input type="number" class="form-control" name="eighteen" placeholder="মুঠ"
                                value="{{$form_data->step4->eighteen}}" />

                        </th>
                    </tr>
                </table>
            </div>
        </form>

        <div class="page-break"></div>
        <form>
            <table class="table table-bordered table-responsive">
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
                            <input type="number" class="form-control" name="sc_male" placeholder=""
                                value="{{$form_data->step5->sc_male}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="sc_female" placeholder=""
                                value="{{$form_data->step5->sc_female}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="sc_total" placeholder=""
                                value="{{$form_data->step5->sc_total}}" />

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
                            <input type="number" class="form-control" name="st_male" placeholder=""
                                value="{{$form_data->step5->st_male}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="st_female" placeholder=""
                                value="{{$form_data->step5->st_female}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="st_total" placeholder=""
                                value="{{$form_data->step5->st_total}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'" name="muslim_male"
                                placeholder="" value="{{$form_data->step5->muslim_male}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'"
                                name="muslim_female" placeholder="" value="{{$form_data->step5->muslim_female}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'"
                                name="muslim_total" value="{{$form_data->step5->muslim_total}}" placeholder="" />

                        </td>
                    </tr>
                    <tr>
                        <td>(গ) অন্যান্য পিছপৰা জাতি (OBC)</td>
                        <td>
                            <input type="number" class="form-control" name="obc_male" placeholder=""
                                value="{{$form_data->step5->obc_male}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="obc_female" placeholder=""
                                value="{{$form_data->step5->obc_female}}" />

                        </td>
                        <td>
                            <input type="number" class="form-control" name="obc_total" placeholder=""
                                value="{{$form_data->step5->obc_total}}" />

                        </td>
                        <td>(খ) খ্ৰীষ্টান</td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'"
                                name="chritian_male" value="{{$form_data->step5->chritian_male}}" placeholder="" />

                        </td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'"
                                name="chritian_female" value="{{$form_data->step5->chritian_female}}" placeholder="" />

                        </td>
                        <td>
                            <input type="number" class="form-control" v-validate="'required|numeric'"
                                name="chritian_total" value="{{$form_data->step5->chritian_total}}" placeholder="" />

                        </td>
                    </tr>
                </tbody>
            </table>

            {{-- 6th Number --}}

        </form>
        <form>

            <div class="p-2 row">
                <p class="mt-2 mr-2">(ক)</p>
                <p class="mt-2 mr-2">
                    নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ
                    ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা
                </p>

                <!-- <input type="text" class="form-control "  /> -->
                <input type="text" class="form-control col-1 mr-2" v-model="step6.one" v-validate="'required'"
                    name="one" value="{{$form_data->step6->one}}" placeholder="নিকেতনখন ....." />

                <p class="mt-2 mr-2">নগৰীয়া বস্তিৰ সংখ্যা</p>
                <input type="text" class="form-control col-1 mr-2" v-model="step6.two" v-validate="'required'"
                    name="two" value="{{$form_data->step6->two}}" placeholder="নগৰীয়া বস্তিৰ সংখ্যা" />

                <p class="mt-2 mr-2">ৱাৰ্ডৰ সংখ্যা</p>

                <input type="text" class="form-control col-1 mr-2" v-model="step6.three" v-validate="'required'"
                    name="three" placeholder="ৱাৰ্ডৰ সংখ্যা" value="{{$form_data->step6->three}}" />

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
                                <input type="text" value="{{$form_data->step6->four}}" class="form-control"
                                    v-model="step6.four" v-validate="'required'" name="four" placeholder="" />

                            </td>
                            <td>১মৰ পৰা ৫ ম</td>
                            <td>
                                <input type="text" class="form-control" value="{{$form_data->step6->five}}"
                                    v-model="step6.five" v-validate="'required'" name="five" placeholder="" />

                            </td>
                        </tr>
                        <tr>
                            <td>৬ষ্টৰ পৰা ৮ ম</td>
                            <td>
                                <input type="text" class="form-control" v-model="step6.six" v-validate="'required'"
                                    name="six" placeholder="" value="{{$form_data->step6->six}}" />

                            </td>
                            <td>৯ ম আৰু ১০ ম</td>
                            <td>
                                <input type="text" class="form-control" v-model="step6.seven" v-validate="'required'"
                                    name="seven" placeholder="" value="{{$form_data->step6->seven}}" />

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(গ)</p>
                <p class="mt-2 mr-2">(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step6.eight" v-validate="'required'"
                    name="eight" placeholder="নুন্যতম মানধন.." value="{{$form_data->step6->eight}}" />

                <p class="mt-2 mr-2">(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step6.nine" v-validate="'required'"
                    name="nine" placeholder="অধিকতম মানধন" value="{{$form_data->step6->nine}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(ঘ)</p>
                <p class="mt-2 mr-2">
                    নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি
                    প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।
                </p>
                <p class="mt-2 mr-2">যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব</p>
                <input type="text" class="form-control
            col-2 mr-2" v-model="step6.ten" v-validate="'required'" name="ten" placeholder="অধিকতম মানধন "
                    value="{{$form_data->step6->ten}}" />

                নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু
                কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )
            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)
                </p>

                <input type="text" class="form-control col-1 mr-2" v-model="step6.eleven" v-validate="'required'"
                    name="eleven" placeholder="অধিকতম মানধন " value="{{$form_data->step6->eleven}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :
                </p>

                <input value="{{$form_data->step6->twelve}}" />


            </div>
            <div class=" p-2 row">
                <p class="mt-2 mr-2">
                    (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?
                </p>

                <input value="{{$form_data->step6->thirteen}}" />


            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত
                    কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ
                    আওতালৈ আনিব লাগে ।
                </p>
            </div>


            {{-- 7th Number --}}

        </form>
        <form>
            <div class="p-2 row">
                <p class="mt-2 mr-2"></p>
                ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম </p>

                <input type="text" class="form-control col-2 mr-2" v-model="step7.one" v-validate="'required'"
                    name="one" value="{{$form_data->step7->one}}" placeholder="" />

                <p class="mt-2 mr-2">
                    স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.two" v-validate="'required'"
                    name="two" placeholder="" value="{{$form_data->step7->two}}" />

                <p class="mt-2 mr-2">
                    শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.three" v-validate="'required'"
                    name="three" placeholder="" value="{{$form_data->step7->three}}" />

                <p class="mt-2 mr-2">প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে)
                    :
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.four" v-validate="'required'"
                    name="four" placeholder="" value="{{$form_data->step7->four}}" />

                <p class="mt-2 mr-2">প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.five" v-validate="'required'"
                    name="five" placeholder="" value="{{$form_data->step7->five}}" />

                <p class="mt-2 mr-2">নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।</p>
            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.six" v-validate="'required'"
                    name="six" placeholder="" value="{{$form_data->step7->six}}" />

                <p class="mt-2 mr-2">মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন
                    দিব
                    )।
                </p>
            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(খ) নিকেতনখন</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.seven" v-validate="'required'"
                    name="seven" placeholder="" value="{{$form_data->step7->seven}}" />

                <p class="mt-2 mr-2">পঞ্চায়ত,</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.eight" v-validate="'required'"
                    name="eight" placeholder="" value="{{$form_data->step7->eight}}" />

                <p class="mt-2 mr-2">উন্নয়ন খণ্ড (ব্লক)ত</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.nine" v-validate="'required'"
                    name="nine" placeholder="" value="{{$form_data->step7->nine}}" />

                <p class="mt-2 mr-2">মহকুমাত অৱস্থিত ।</p>
            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.ten" v-validate="'required'"
                    name="ten" placeholder="" value="{{$form_data->step7->ten}}" />

                <p class="mt-2 mr-2">টা /আলমাৰী সংখ্যা</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.eleven" v-validate="'required'"
                    name="eleven" placeholder="" value="{{$form_data->step7->eleven}}" />

                <p class="mt-2 mr-2">টা/কিতাবৰ সংখ্যা</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.twelve" v-validate="'required'"
                    name="twelve" placeholder="" value="{{$form_data->step7->twelve}}" />

                <p class="mt-2 mr-2">খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )</p>
            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )</p>
            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.thirteen" v-validate="'required'"
                    name="thirteen" placeholder="" value="{{$form_data->step7->thirteen}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) ।
                    প্ৰথনা
                    বিদ্যা
                    ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )
                    । বহি প্ৰাৰ্থনা হয়নে ?</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step7.fourteen" v-validate="'required'"
                    name="fourteen" placeholder="" value="{{$form_data->step7->fourteen}}" />

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
            <div class="p-2 row">
                <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>

                <input type="text" class="form-control col-2 mr-2" v-model="step8.one" v-validate="'required'"
                    name="one" value="{{$form_data->step8->one}}" placeholder="" />

                <p class="mt-2 mr-2">
                    (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
                    হৈছে, পঞ্জীয়ন নম্বৰ দিব
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.two" v-validate="'required'"
                    name="two" placeholder="" value="{{$form_data->step7->two}}" />

                <p class="mt-2 mr-2">
                    (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.three" v-validate="'required'"
                    name="three" placeholder="3" value="{{$form_data->step7->three}}" />

            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.four" v-validate="'required'"
                    name="four" placeholder="3" value="{{$form_data->step7->four}}" />

                <p class="mt-2 mr-2">
                    (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
                    হৈছে, পঞ্জীয়ন নম্বৰ দিব
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.five" v-validate="'required'"
                    name="five" placeholder="3" value="{{$form_data->step7->five}}" />

                <p class="mt-2 mr-2">
                    (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.six" v-validate="'required'"
                    name="six" placeholder="3" value="{{$form_data->step7->six}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.seven" v-validate="'required'"
                    name="seven" placeholder="3" value="{{$form_data->step7->seven}}" />

                <p class="mt-2 mr-2">
                    (যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )
                </p>
            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয়
                    উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.eight" v-validate="'required'"
                    name="eight" placeholder="3" value="{{$form_data->step7->eight}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ
                    পৰা অনুমোদন পোৱা চন
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.nine" v-validate="'required'"
                    name="nine" placeholder="3" value="{{$form_data->step7->nine}}" />

            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    ৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।
                </p>

                <input value="{{$form_data->step7->ten}}"></input>



            </div>
            <div class=" p-2 row">
                <p class="mt-2 mr-2">
                    (খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা বনাই পাঠ দান
                    কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.eleven" v-validate="'required'"
                    name="eleven" placeholder="3" value="{{$form_data->step7->eleven}}" />

            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত
                    কেইটাকৈ Class
                </p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.twelve" v-validate="'required'"
                    name="twelve" placeholder="3" value="{{$form_data->step7->twelve}}" />

                <p class="mt-2 mr-2">হয় ।</p>
            </div>

            <div class="p-2 row">
                <p class="mt-2 mr-2">(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।</p>

                <input value="{{$form_data->step7->thirteen}}" />


            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">
                    (ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।
                </p>

                <input value="{{$form_data->step7->fourteen}}" />


                <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।</p>
                <input value="{{$form_data->step8->one}}" />


                <p class="mt-2 mr-2">
                    নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল
                    ৰূপ
                </p>

                <input value="{{$form_data->step8->two}}" />



            </div>
            <div class="p-2 row">
                <p class="mt-2 mr-2">(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।</p>
                <input value="{{$form_data->step8->three}}" />


                <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই</p>
                <input value="{{$form_data->step8->four}}" />


                <p class="mt-2 mr-2">যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা</p>
                <input type="text" class="form-control col-2 mr-2" v-model="step8.nineteen" v-validate="'required'"
                    name="nineteen" placeholder="3" value="{{$form_data->step8->nineteen}}" />

                <p class="mt-2 mr-2">কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।</p>

                <input value="{{$form_data->step8->twenty}}" />


            </div>
            <div class="p-2 row">
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
            <div class="p-2 row justify-content-between">
                <div class="col-4 mt-3">
                    <p class="">আচাৰ্য/আচাৰ্যাৰ বিৱৰণ - ২০২০</p>
                </div>

                <div class="p-2 col-4 row">
                    <p class="mt-2 mr-2">নিকেতনৰ নাম</p>
                    <input type="text" class="form-control" v-model="step9.institute_name" v-validate="'required'"
                        name="institute_name" placeholder="" value="{{$form_data->step9->institute_name}}" />

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
                            <input type="text" class="form-control" v-model="step9.one_name" v-validate="'required'"
                                name="one_name" placeholder="" value="{{$form_data->step9->one_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_start_date"
                                v-validate="'required'" name="one_start_date" placeholder=""
                                value="{{$form_data->step9->one_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_end_date" v-validate="'required'"
                                name="one_end_date" placeholder="" value="{{$form_data->step9->one_end_date}}" />

                        </td>
                        <td> <input type="text" class="form-control" v-model="step9.one_mohila" v-validate="'required'"
                                name="one_mohila" placeholder="mohila" value="{{$form_data->step9->one_mohila}}" />

                        <td>
                            <input type="text" class="form-control" v-model="step9.one_nondor" v-validate="'required'"
                                name="one_nondor" placeholder="" value="{{$form_data->step9->one_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_ahota" v-validate="'required'"
                                name="one_ahota" placeholder="" value="{{$form_data->step9->one_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_pathdam" v-validate="'required'"
                                name="one_pathdam" placeholder="" value="{{$form_data->step9->one_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_7_diniya" v-validate="'required'"
                                name="one_7_diniya" placeholder="" value="{{$form_data->step9->one_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.one_15_diniya"
                                v-validate="'required'" name="one_15_diniya" placeholder=""
                                value="{{$form_data->step9->one_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>২</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_name" v-validate="'required'"
                                name="two_name" placeholder="" value="{{$form_data->step9->two_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_start_date"
                                v-validate="'required'" name="two_start_date" placeholder=""
                                value="{{$form_data->step9->two_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_end_date" v-validate="'required'"
                                name="two_end_date" placeholder="" value="{{$form_data->step9->two_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_mohila" v-validate="'required'"
                                name="two_mohila" placeholder="" value="{{$form_data->step9->two_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_nondor" v-validate="'required'"
                                name="two_nondor" placeholder="" value="{{$form_data->step9->two_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_ahota" v-validate="'required'"
                                name="two_ahota" placeholder="" value="{{$form_data->step9->two_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_pathdam" v-validate="'required'"
                                name="two_pathdam" placeholder="" value="{{$form_data->step9->two_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_7_diniya" v-validate="'required'"
                                name="two_7_diniya" placeholder="" value="{{$form_data->step9->two_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.two_15_diniya"
                                v-validate="'required'" name="two_15_diniya" placeholder=""
                                value="{{$form_data->step9->two_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>৩</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_name" v-validate="'required'"
                                name="three_name" placeholder="" value="{{$form_data->step9->three_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_start_date"
                                v-validate="'required'" name="three_start_date" placeholder=""
                                value="{{$form_data->step9->three_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_end_date"
                                v-validate="'required'" name="three_end_date" placeholder=""
                                value="{{$form_data->step9->three_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_mohila" v-validate="'required'"
                                name="three_mohila" placeholder="" value="{{$form_data->step9->three_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_nondor" v-validate="'required'"
                                name="three_nondor" placeholder="" value="{{$form_data->step9->three_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_ahota" v-validate="'required'"
                                name="three_ahota" placeholder="" value="{{$form_data->step9->three_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_pathdam"
                                v-validate="'required'" name="three_pathdam" placeholder=""
                                value="{{$form_data->step9->three_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_7_diniya"
                                v-validate="'required'" name="three_7_diniya" placeholder=""
                                value="{{$form_data->step9->three_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.three_15_diniya"
                                v-validate="'required'" name="three_15_diniya" placeholder=""
                                value="{{$form_data->step9->three_15_diniya}}" />

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
                            <input type="text" class="form-control" v-model="step9.four_name" v-validate="'required'"
                                name="four_name" placeholder="" value="{{$form_data->step9->four_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_start_date"
                                v-validate="'required'" name="four_start_date" placeholder=""
                                value="{{$form_data->step9->four_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_end_date"
                                v-validate="'required'" name="four_end_date" placeholder=""
                                value="{{$form_data->step9->four_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_mohila" v-validate="'required'"
                                name="four_mohila" placeholder="" value="{{$form_data->step9->four_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_nondor" v-validate="'required'"
                                name="four_nondor" placeholder="" value="{{$form_data->step9->four_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_ahota" v-validate="'required'"
                                name="four_ahota" placeholder="" value="{{$form_data->step9->four_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_pathdam" v-validate="'required'"
                                name="four_pathdam" placeholder="" value="{{$form_data->step9->four_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_7_diniya"
                                v-validate="'required'" name="four_7_diniya" placeholder=""
                                value="{{$form_data->step9->four_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.four_15_diniya"
                                v-validate="'required'" name="four_15_diniya" placeholder=""
                                value="{{$form_data->step9->four_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>৫</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_name" v-validate="'required'"
                                name="five_name" placeholder="" value="{{$form_data->step9->five_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_start_date"
                                v-validate="'required'" name="five_start_date" placeholder=""
                                value="{{$form_data->step9->five_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_end_date"
                                v-validate="'required'" name="five_end_date" placeholder=""
                                value="{{$form_data->step9->five_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_mohila" v-validate="'required'"
                                name="five_mohila" placeholder="" value="{{$form_data->step9->five_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_nondor" v-validate="'required'"
                                name="five_nondor" placeholder="" value="{{$form_data->step9->five_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_ahota" v-validate="'required'"
                                name="five_ahota" placeholder="" value="{{$form_data->step9->five_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_pathdam" v-validate="'required'"
                                name="five_pathdam" placeholder="" value="{{$form_data->step9->five_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_7_diniya"
                                v-validate="'required'" name="five_7_diniya" placeholder=""
                                value="{{$form_data->step9->five_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.five_15_diniya"
                                v-validate="'required'" name="five_15_diniya" placeholder=""
                                value="{{$form_data->step9->five_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>৬</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_name" v-validate="'required'"
                                name="six_name" placeholder="" value="{{$form_data->step9->six_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_start_date"
                                v-validate="'required'" name="six_start_date" placeholder=""
                                value="{{$form_data->step9->six_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_end_date" v-validate="'required'"
                                name="six_end_date" placeholder="" value="{{$form_data->step9->six_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_mohila" v-validate="'required'"
                                name="six_mohila" placeholder="" value="{{$form_data->step9->six_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_nondor" v-validate="'required'"
                                name="six_nondor" placeholder="" value="{{$form_data->step9->six_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_ahota" v-validate="'required'"
                                name="six_ahota" placeholder="" value="{{$form_data->step9->six_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_pathdam" v-validate="'required'"
                                name="six_pathdam" placeholder="" value="{{$form_data->step9->six_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_7_diniya" v-validate="'required'"
                                name="six_7_diniya" placeholder="" value="{{$form_data->step9->six_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.six_15_diniya"
                                v-validate="'required'" name="six_15_diniya" placeholder=""
                                value="{{$form_data->step9->six_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>৭</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_name" v-validate="'required'"
                                name="seven_name" placeholder="" value="{{$form_data->step9->seven_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_start_date"
                                v-validate="'required'" name="seven_start_date" placeholder=""
                                value="{{$form_data->step9->seven_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_end_date"
                                v-validate="'required'" name="seven_end_date" placeholder=""
                                value="{{$form_data->step9->seven_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_mohila" v-validate="'required'"
                                name="seven_mohila" placeholder="" value="{{$form_data->step9->seven_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_nondor" v-validate="'required'"
                                name="seven_nondor" placeholder="" value="{{$form_data->step9->seven_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_ahota" v-validate="'required'"
                                name="seven_ahota" placeholder="" value="{{$form_data->step9->seven_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_pathdam"
                                v-validate="'required'" name="seven_pathdam" placeholder=""
                                value="{{$form_data->step9->seven_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_7_diniya"
                                v-validate="'required'" name="seven_7_diniya" placeholder=""
                                value="{{$form_data->step9->seven_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.seven_15_diniya"
                                v-validate="'required'" name="seven_15_diniya" placeholder=""
                                value="{{$form_data->step9->seven_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>৮</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_name" v-validate="'required'"
                                name="eight_name" placeholder="" value="{{$form_data->step9->eight_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_start_date"
                                v-validate="'required'" name="eight_start_date" placeholder=""
                                value="{{$form_data->step9->eight_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_end_date"
                                v-validate="'required'" name="eight_end_date" placeholder=""
                                value="{{$form_data->step9->eight_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_mohila" v-validate="'required'"
                                name="eight_mohila" placeholder="" value="{{$form_data->step9->eight_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_nondor" v-validate="'required'"
                                name="eight_nondor" placeholder="" value="{{$form_data->step9->eight_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_ahota" v-validate="'required'"
                                name="eight_ahota" placeholder="" value="{{$form_data->step9->eight_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_pathdam"
                                v-validate="'required'" name="eight_pathdam" placeholder=""
                                value="{{$form_data->step9->eight_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_7_diniya"
                                v-validate="'required'" name="eight_7_diniya" placeholder=""
                                value="{{$form_data->step9->eight_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eight_15_diniya"
                                v-validate="'required'" name="eight_15_diniya" placeholder=""
                                value="{{$form_data->step9->eight_15_diniya}}" />

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
                            <input type="text" class="form-control" v-model="step9.nine_name" v-validate="'required'"
                                name="nine_name" placeholder="" value="{{$form_data->step9->nine_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_start_date"
                                v-validate="'required'" name="nine_start_date" placeholder=""
                                value="{{$form_data->step9->nine_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_end_date"
                                v-validate="'required'" name="nine_end_date" placeholder=""
                                value="{{$form_data->step9->nine_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_mohila" v-validate="'required'"
                                name="nine_mohila" placeholder="" value="{{$form_data->step9->nine_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_nondor" v-validate="'required'"
                                name="nine_nondor" placeholder="" value="{{$form_data->step9->nine_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_ahota" v-validate="'required'"
                                name="nine_ahota" placeholder="" value="{{$form_data->step9->nine_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_pathdam" v-validate="'required'"
                                name="nine_pathdam" placeholder="" value="{{$form_data->step9->nine_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_7_diniya"
                                v-validate="'required'" name="nine_7_diniya" placeholder=""
                                value="{{$form_data->step9->nine_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.nine_15_diniya"
                                v-validate="'required'" name="nine_15_diniya" placeholder=""
                                value="{{$form_data->step9->nine_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>১০</td>
                        <td> <input type="text" class="form-control" v-model="step9.ten_name" v-validate="'required'"
                                name="ten_name" placeholder="" value="{{$form_data->step9->ten_name}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_start_date"
                                v-validate="'required'" name="ten_start_date" placeholder=""
                                value="{{$form_data->step9->ten_start_date}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_end_date"
                                v-validate="'required'" name="ten_end_date" placeholder=""
                                value="{{$form_data->step9->ten_end_date}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_mohila" v-validate="'required'"
                                name="ten_mohila" placeholder="" value="{{$form_data->step9->ten_mohila}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_nondor" v-validate="'required'"
                                name="ten_nondor" placeholder="" value="{{$form_data->step9->ten_nondor}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_ahota" v-validate="'required'"
                                name="ten_ahota" placeholder="" value="{{$form_data->step9->ten_ahota}}" />

                        <td> <input type="text" class="form-control" v-model="step9.ten_pathdam" v-validate="'required'"
                                name="ten_pathdam" placeholder="" value="{{$form_data->step9->ten_pathdam}}" />


                        <td> <input type="text" class="form-control" v-model="step9.ten_7_diniya"
                                v-validate="'required'" name="ten_7_diniya" placeholder=""
                                value="{{$form_data->step9->ten_7_diniya}}" />
                        <td> <input type="text" class="form-control" v-model="step9.ten_15_diniya"
                                v-validate="'required'" name="ten_15_diniya" placeholder=""
                                value="{{$form_data->step9->ten_15_diniya}}" />

                    </tr>
                    <tr>
                        <td>১১</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_name" v-validate="'required'"
                                name="eleven_name" placeholder="" value="{{$form_data->step9->eleven_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_start_date"
                                v-validate="'required'" name="eleven_start_date" placeholder=""
                                value="{{$form_data->step9->eleven_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_end_date"
                                v-validate="'required'" name="eleven_end_date" placeholder=""
                                value="{{$form_data->step9->eleven_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_mohila"
                                v-validate="'required'" name="eleven_mohila" placeholder=""
                                value="{{$form_data->step9->eleven_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_nondor"
                                v-validate="'required'" name="eleven_nondor" placeholder=""
                                value="{{$form_data->step9->eleven_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_ahota" v-validate="'required'"
                                name="eleven_ahota" placeholder="" value="{{$form_data->step9->eleven_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_pathdam"
                                v-validate="'required'" name="eleven_pathdam" placeholder=""
                                value="{{$form_data->step9->eleven_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_7_diniya"
                                v-validate="'required'" name="eleven_7_diniya" placeholder=""
                                value="{{$form_data->step9->eleven_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.eleven_15_diniya"
                                v-validate="'required'" name="eleven_15_diniya" placeholder=""
                                value="{{$form_data->step9->eleven_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>১২</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_name" v-validate="'required'"
                                name="twelve_name" placeholder="" value="{{$form_data->step9->twelve_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_start_date"
                                v-validate="'required'" name="twelve_start_date" placeholder=""
                                value="{{$form_data->step9->twelve_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_end_date"
                                v-validate="'required'" name="twelve_end_date" placeholder=""
                                value="{{$form_data->step9->twelve_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_mohila"
                                v-validate="'required'" name="twelve_mohila" placeholder=""
                                value="{{$form_data->step9->twelve_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_nondor"
                                v-validate="'required'" name="twelve_nondor" placeholder=""
                                value="{{$form_data->step9->twelve_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_ahota" v-validate="'required'"
                                name="twelve_ahota" placeholder="" value="{{$form_data->step9->twelve_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_pathdam"
                                v-validate="'required'" name="twelve_pathdam" placeholder=""
                                value="{{$form_data->step9->twelve_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_7_diniya"
                                v-validate="'required'" name="twelve_7_diniya" placeholder=""
                                value="{{$form_data->step9->twelve_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.twelve_15_diniya"
                                v-validate="'required'" name="twelve_15_diniya" placeholder=""
                                value="{{$form_data->step9->twelve_15_diniya}}" />

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
                            <input type="text" class="form-control" v-model="step9.thirteen_name"
                                v-validate="'required'" name="thirteen_name" placeholder=""
                                value="{{$form_data->step9->thirteen_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_start_date"
                                v-validate="'required'" name="thirteen_start_date" placeholder=""
                                value="{{$form_data->step9->thirteen_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_end_date"
                                v-validate="'required'" name="thirteen_end_date" placeholder=""
                                value="{{$form_data->step9->thirteen_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_mohila"
                                v-validate="'required'" name="thirteen_mohila" placeholder=""
                                value="{{$form_data->step9->thirteen_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_nondor"
                                v-validate="'required'" name="thirteen_nondor" placeholder=""
                                value="{{$form_data->step9->thirteen_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_ahota"
                                v-validate="'required'" name="thirteen_ahota" placeholder=""
                                value="{{$form_data->step9->thirteen_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_pathdam"
                                v-validate="'required'" name="thirteen_pathdam" placeholder=""
                                value="{{$form_data->step9->thirteen_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_7_diniya"
                                v-validate="'required'" name="thirteen_7_diniya" placeholder=""
                                value="{{$form_data->step9->thirteen_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.thirteen_15_diniya"
                                v-validate="'required'" name="thirteen_15_diniya" placeholder=""
                                value="{{$form_data->step9->thirteen_15_diniya}}" />

                        </td>
                    </tr>
                    <tr>
                        <td>১৪</td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_name"
                                v-validate="'required'" name="fourteen_name" placeholder=""
                                value="{{$form_data->step9->fourteen_name}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_start_date"
                                v-validate="'required'" name="fourteen_start_date" placeholder=""
                                value="{{$form_data->step9->fourteen_start_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_end_date"
                                v-validate="'required'" name="fourteen_end_date" placeholder=""
                                value="{{$form_data->step9->fourteen_end_date}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_mohila"
                                v-validate="'required'" name="fourteen_mohila" placeholder=""
                                value="{{$form_data->step9->fourteen_mohila}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_nondor"
                                v-validate="'required'" name="fourteen_nondor" placeholder=""
                                value="{{$form_data->step9->fourteen_nondor}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_ahota"
                                v-validate="'required'" name="fourteen_ahota" placeholder=""
                                value="{{$form_data->step9->fourteen_ahota}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_pathdam"
                                v-validate="'required'" name="fourteen_pathdam" placeholder=""
                                value="{{$form_data->step9->fourteen_pathdam}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_7_diniya"
                                v-validate="'required'" name="fourteen_7_diniya" placeholder=""
                                value="{{$form_data->step9->fourteen_7_diniya}}" />

                        </td>
                        <td>
                            <input type="text" class="form-control" v-model="step9.fourteen_15_diniya"
                                v-validate="'required'" name="fourteen_15_diniya" placeholder=""
                                value="{{$form_data->step9->fourteen_15_diniya}}" />

                        </td>
                    </tr>
                </tbody>
            </table>

        </form>
    </div>
</body>

</html>
{{-- @endsection

@section('js_code')


@endsection --}}
