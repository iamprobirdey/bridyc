<template>
  <div>
    <ul class="list-inline steps">
      <li :class="{ active: steps > 0 }" v-if="steps == 1">Basic Details</li>
      <li :class="{ active: steps > 1 }" v-if="steps == 2">
        Lower Class Details
      </li>
      <li :class="{ active: steps > 2 }" v-if="steps == 3">
        Middle Class Details
      </li>
      <li :class="{ active: steps > 3 }" v-if="steps == 4">
        Higher Class Details
      </li>
      <li :class="{ active: steps > 4 }" v-if="steps == 5">
        Higher Class Details
      </li>
    </ul>
    <form
      class="form-horizontal container-lg"
      @submit.prevent="validateStepForm('step1')"
      data-vv-scope="step1"
      v-if="steps === 1"
    >
      <h1>Step 1</h1>
      <div class="form-row">
        <div
          class="form-group col-md-12"
          :class="{
            'has-error':
              errors.has('serverErrors.institute_name') ||
              serverErrors.institute_name != '',
          }"
        >
          <label for="inputEmail4">নিকেতনৰ নাম</label>
          <input
            type="text"
            v-model="step1.institute_name"
            v-validate="'required'"
            name="institute_name"
            class="form-control"
            placeholder="নিকেতনৰ নাম"
          />

          <span
            v-show="errors.has('step1.institute_name')"
            class="text-danger"
            >{{ errors.first("step1.institute_name") }}</span
          >
          <span
            v-show="serverErrors.institute_name != ''"
            class="text-danger"
            >{{ serverErrors.institute_name }}</span
          >
        </div>
      </div>

      <div class="form-row">
        <div
          class="form-group col-md-3 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.city') || serverErrors.city != '',
          }"
        >
          <label for="inputCity">স্থান</label>
          <input
            type="text"
            v-model="step1.city"
            v-validate="'required'"
            name="city"
            class="form-control"
          />
          <span v-show="errors.has('step1.city')" class="text-danger">{{
            errors.first("step1.city")
          }}</span>
          <span v-show="serverErrors.city != ''" class="text-danger">{{
            serverErrors.city
          }}</span>
        </div>
        <div
          class="form-group col-md-3 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.post_office') ||
              serverErrors.post_office != '',
          }"
        >
          <label for="text">ডাকঘৰ</label>
          <input
            v-model="step1.post_office"
            v-validate="'required'"
            name="post_office"
            type="text"
            class="form-control"
          />
          <span v-show="errors.has('step1.post_office')" class="text-danger">{{
            errors.first("step1.post_office")
          }}</span>
          <span v-show="serverErrors.post_office != ''" class="text-danger">{{
            serverErrors.post_office
          }}</span>
        </div>
        <div
          class="form-group col-md-3 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.district') ||
              serverErrors.district != '',
          }"
        >
          <label for="inputZip">জিলা</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.district"
            v-validate="'required'"
            name="district"
          />
          <span v-show="errors.has('step1.district')" class="text-danger">{{
            errors.first("step1.district")
          }}</span>
          <span v-show="serverErrors.district != ''" class="text-danger">{{
            serverErrors.district
          }}</span>
        </div>
        <div
          class="form-group col-md-3 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.pin') || serverErrors.pin != '',
          }"
        >
          <label>পিন</label>
          <input
            type="number"
            class="form-control"
            v-model="step1.pin"
            v-validate="'required|min:6|max:6'"
            name="pin"
          />
          <span v-show="errors.has('step1.pin')" class="text-danger">{{
            errors.first("step1.pin")
          }}</span>
          <span v-show="serverErrors.pin != ''" class="text-danger">{{
            serverErrors.pin
          }}</span>
        </div>
      </div>
      <div class="form-row">
        <div
          class="form-group col-md-4 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.date') || serverErrors.date != '',
          }"
        >
          <label for="inputCity">নিকেতন স্থাপনৰ তাৰিখ</label>
          <input
            type="date"
            class="form-control"
            v-model="step1.date"
            v-validate="'required'"
            name="date"
          />
          <span v-show="errors.has('step1.date')" class="text-danger">{{
            errors.first("step1.date")
          }}</span>
          <span v-show="serverErrors.date != ''" class="text-danger">{{
            serverErrors.date
          }}</span>
        </div>
        <div
          class="form-group col-md-4 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.bibhag') || serverErrors.bibhag != '',
          }"
        >
          <label for="text">বিভাগ</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.bibhag"
            v-validate="'required'"
            name="bibhag"
          />
          <span v-show="errors.has('step1.bibhag')" class="text-danger">{{
            errors.first("step1.bibhag")
          }}</span>
          <span v-show="serverErrors.bibhag != ''" class="text-danger">{{
            serverErrors.bibhag
          }}</span>
        </div>
        <div
          class="form-group col-md-4"
          :class="{
            'has-error':
              errors.has('serverErrors.songkul') || serverErrors.songkul != '',
          }"
        >
          <label for="inputZip">সংকুল</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.songkul"
            v-validate="'required'"
            name="songkul"
          />
          <span v-show="errors.has('step1.songkul')" class="text-danger">{{
            errors.first("step1.songkul")
          }}</span>
          <span v-show="serverErrors.songkul != ''" class="text-danger">{{
            serverErrors.songkul
          }}</span>
        </div>
      </div>
      <div class="form-row">
        <div
          class="form-group col-md-6 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.number') || serverErrors.number != '',
          }"
        >
          <label for="inputCity">প্ৰধানাচাৰ্যৰ মোবাইল নং :</label>
          <input
            type="number"
            class="form-control"
            v-model="step1.number"
            v-validate="'required|min:10|max:10'"
            name="number"
          />
          <span v-show="errors.has('step1.number')" class="text-danger">{{
            errors.first("step1.number")
          }}</span>
          <span v-show="serverErrors.number != ''" class="text-danger">{{
            serverErrors.number
          }}</span>
        </div>
        <div
          class="form-group col-md-6 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.niketan') || serverErrors.niketan != '',
          }"
        >
          <label for="text">নিকেতনৰ দুৰাভাষ</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.niketan"
            v-validate="'required'"
            name="niketan"
          />
          <span v-show="errors.has('step1.niketan')" class="text-danger">{{
            errors.first("step1.niketan")
          }}</span>
          <span v-show="serverErrors.niketan != ''" class="text-danger">{{
            serverErrors.niketan
          }}</span>
        </div>
      </div>

      <div class="form-row">
        <div
          class="form-group col-md-4 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.email') || serverErrors.email != '',
          }"
        >
          <label for="inputCity">E-mail</label>
          <input
            type="email"
            class="form-control"
            v-model="step1.email"
            v-validate="'required|email'"
            name="email"
          />
          <span v-show="errors.has('step1.email')" class="text-danger">{{
            errors.first("step1.email")
          }}</span>
          <span v-show="serverErrors.email != ''" class="text-danger">{{
            serverErrors.email
          }}</span>
        </div>
        <div
          class="form-group col-md-4 col-6"
          :class="{
            'has-error':
              errors.has('serverErrors.website') || serverErrors.website != '',
          }"
        >
          <label for="text">Website</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.website"
            v-validate="'url'"
            name="website"
          />
          <span v-show="errors.has('step1.website')" class="text-danger">{{
            errors.first("step1.website")
          }}</span>
          <span v-show="serverErrors.website != ''" class="text-danger">{{
            serverErrors.website
          }}</span>
        </div>
        <div
          class="form-group col-md-4"
          :class="{
            'has-error':
              errors.has('serverErrors.whatsapp') ||
              serverErrors.whatsapp != '',
          }"
        >
          <label for="text">WhatApp</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">+91</div>
            </div>
            <input
              type="number"
              class="form-control"
              placeholder="Username"
              v-model="step1.whatsapp"
              v-validate="'required|min:10|max:10'"
              name="whatsapp"
            />
            <span v-show="errors.has('step1.whatsapp')" class="text-danger">{{
              errors.first("step1.whatsapp")
            }}</span>
            <span v-show="serverErrors.whatsapp != ''" class="text-danger">{{
              serverErrors.whatsapp
            }}</span>
          </div>
        </div>
      </div>
      <!--
       pdf 2nd & 3rd page start
     -->
<<<<<<< HEAD
    
<link rel="stylesheet" href="afterdelete.css">
<div class="p-2 row">
    <p class="mt-2 mr-2">(ক)</p>
    <p class="mt-2 mr-2">
        নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ
        ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা
    </p>

    <input type="text" class="form-control col-1 mr-2" placeholder="নিকেতনখন ....." />
    <p class="mt-2 mr-2">নগৰীয়া বস্তিৰ সংখ্যা</p>
    <input type="text" class="form-control col-1 mr-2" placeholder="নগৰীয়া বস্তিৰ সংখ্যা" />
    <p class="mt-2 mr-2">ৱাৰ্ডৰ সংখ্যা</p>
    <input type="text" class="form-control col-1 mr-2" placeholder="ৱাৰ্ডৰ সংখ্যা" />
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
                    <input type="text" class="form-control" placeholder="  " />
                </td>
                <td>১মৰ পৰা ৫ ম</td>
                <td>
                    <input type="text" class="form-control" placeholder="  " />
                </td>
            </tr>
            <tr>
                <td>৬ষ্টৰ পৰা ৮ ম</td>
                <td>
                    <input type="text" class="form-control" placeholder="  " />
                </td>
                <td>৯ ম আৰু ১০ ম</td>
                <td>
                    <input type="text" class="form-control" placeholder="  " />
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(গ)</p>
    <p class="mt-2 mr-2">(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন</p>
    <input type="text" class="form-control col-2 mr-2" placeholder="নুন্যতম মানধন.." />
    <p class="mt-2 mr-2">(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন</p>
    <input type="text" class="form-control col-2 mr-2" placeholder="অধিকতম মানধন" />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ঘ)</p>
    <p class="mt-2 mr-2">
        নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি
        প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।
    </p>
    <p class="mt-2 mr-2">যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড
    অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু
    কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">
        (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)
    </p>
    <input type="text" class="form-control col-1 mr-2" placeholder=" " />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">
        (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :
    </p>
    <select class="custom-select col-2">
        <option selected>আছে</option>
        <option value="1">নাই</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">
        (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?
    </p>
    <select class="custom-select col-2">
        <option selected>হয়</option>
        <option value="1">নহয়</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">
        (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত
        কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ
        আওতালৈ আনিব লাগে ।
    </p>
</div>


<div class="p-2 row">
    <p class="mt-2 mr-2 "></p>
    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম </p>
    <input type="text" class="form-control col-2 mr-2 mb-1" placeholder=" " />
    <p class="mt-2 mr-2">
        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">
        শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে) : </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন দিব )।</p>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(খ) নিকেতনখন</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">পঞ্চায়ত,</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">উন্নয়ন খণ্ড (ব্লক)ত</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">মহকুমাত অৱস্থিত ।</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">টা /আলমাৰী সংখ্যা</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">টা/কিতাবৰ সংখ্যা</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )</p>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) । প্ৰথনা বিদ্যা
        ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )
        । বহি প্ৰাৰ্থনা হয়নে ?</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>


<div class=" d-flex justify-content-center ">
    <h5 class="mb-0 h4 titleCentre">
        নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ
        ক্ষেত্ৰত যিটো প্ৰযোজ্য হয়
        তাত (✓) চীন দিব ।
    </h5>
</div>

<!--  -->

<div class="p-2 row">
    <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব
    </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">(ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত হৈছে, পঞ্জীয়ন নম্বৰ দিব
    </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">(ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">(যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা
        চন</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।</p>
    <select class="custom-select col-2">
        <option selected>আছে</option>
        <option value="1">নাই</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা
        বনাই পাঠ দান কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত কেইটাকৈ Class</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">হয় । </p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।</p>
    <select class="custom-select col-2">
        <option selected>আছে</option>
        <option value="1">নাই</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।</p>
    <select class="custom-select col-2">
        <option selected>হৈছে</option>
        <option value="1">হোৱা নাই</option>
    </select>
    <p class="mt-2 mr-2"> শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।</p>
    <select class="custom-select col-2">
        <option selected>দিছে</option>
        <option value="1">দিয়া নাই</option>
    </select>
    <p class="mt-2 mr-2">নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল ৰূপ </p>
    <select class="custom-select col-2">
        <option selected>নমুনা ৰূপ</option>
        <option value="1">প্ৰভাৱীৰূপ</option>
        <option value="1">পযত্নশীল ৰূপ</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।</p>
    <select class="custom-select col-2">
        <option selected>আছে</option>
        <option value="1">নাই</option>
    </select>
    <p class="mt-2 mr-2"> শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই </p>
    <select class="custom-select col-2">
        <option selected>দিছে ।</option>
        <option value="1">দিয়া নাই ।</option>
    </select>
    <p class="mt-2 mr-2">যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা</p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
    <p class="mt-2 mr-2">কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।</p>
    <select class="custom-select col-2">
        <option selected>আছে ।</option>
        <option value="1">নাই ।</option>
    </select>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory)
        বাবে Atal Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই?
        ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা দশম শ্ৰেণীলৈ মুঠ ৪০০
        ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ ক্ষেত্ৰত প্ৰযোজ্য )</p>
</div>
=======
>>>>>>> ce16f3187792d163513f3c32d552d1f5ede5aa26




      <!--
       pdf 2nd & 3rd End start
     -->

      <div class="d-flex flex-row-reverse">
        <button
          :disabled="steps === 1"
          type="button"
          class="btn btn-outline-secondary"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step2')"
      data-vv-scope="step2"
      v-if="steps === 2"
    >
      <h1>Step 2</h1>
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
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_male_1"
              v-validate="'required|numeric'"
              name="teacher_male_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step2.teacher_male_1')"
              class="text-danger"
            >
              {{ errors.first("step2.teacher_male_1") }}
            </span>
            <span v-show="serverErrors.teacher_male_1 != ''" class="text-danger"
              >{{ serverErrors.teacher_male_1 }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.ankul_1"
              v-validate="'required|numeric'"
              name="ankul_1"
              placeholder="Testing form"
            />
            <span v-show="errors.has('step2.ankul_1')" class="text-danger">{{
              errors.first("step2.ankul_1")
            }}</span>
            <span v-show="serverErrors.ankul_1 != ''" class="text-danger">{{
              serverErrors.ankul_1
            }}</span>
          </th>

          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.mukul_1"
              v-validate="'required|numeric'"
              name="mukul_1"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.mukul_1')" class="text-danger">{{
              errors.first("step2.mukul_1")
            }}</span>
            <span v-show="serverErrors.mukul_1 != ''" class="text-danger">{{
              serverErrors.mukul_1
            }}</span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_1"
              v-validate="'required|numeric'"
              name="muth_1"
              placeholder="Total"
            />
            <span v-show="errors.has('step2.muth_1')" class="text-danger">{{
              errors.first("step2.muth_1")
            }}</span>
            <span v-show="serverErrors.muth_1 != ''" class="text-danger">{{
              serverErrors.muth_1
            }}</span>
          </th>
          <th>আচাৰ্যা</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_female_1"
              v-validate="'required|numeric'"
              name="teacher_female_1"
              placeholder="Ankul"
            />
            <span
              v-show="errors.has('step2.teacher_female_1')"
              class="text-danger"
              >{{ errors.first("step2.teacher_female_1") }}</span
            >
            <span
              v-show="serverErrors.teacher_female_1 != ''"
              class="text-danger"
              >{{ serverErrors.teacher_female_1 }}</span
            >
          </th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.ankul_2"
              v-validate="'required|numeric'"
              name="ankul_2"
              placeholder="abc"
            />
            <span v-show="errors.has('step2.ankul_2')" class="text-danger">{{
              errors.first("step2.ankul_2")
            }}</span>
            <span v-show="serverErrors.ankul_2 != ''" class="text-danger">{{
              serverErrors.ankul_2
            }}</span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.mukul_2"
              v-validate="'required|numeric'"
              name="mukul_2"
              placeholder="pro"
            />
            <span v-show="errors.has('step2.mukul_2')" class="text-danger">{{
              errors.first("step2.mukul_2")
            }}</span>
            <span v-show="serverErrors.mukul_2 != ''" class="text-danger">{{
              serverErrors.mukul_2
            }}</span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_2"
              v-validate="'required|numeric'"
              name="muth_2"
              placeholder="muth"
            />
            <span v-show="errors.has('step2.muth_2')" class="text-danger">{{
              errors.first("step2.muth_2")
            }}</span>
            <span v-show="serverErrors.muth_2 != ''" class="text-danger">{{
              serverErrors.muth_2
            }}</span>
          </th>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_total_1"
              v-validate="'required|numeric'"
              name="teacher_total_1"
              placeholder="muth"
            />
            <span
              v-show="errors.has('step2.teacher_total_1')"
              class="text-danger"
              >{{ errors.first("step2.teacher_total_1") }}</span
            >
            <span
              v-show="serverErrors.teacher_total_1 != ''"
              class="text-danger"
              >{{ serverErrors.teacher_total_1 }}</span
            >
          </th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.ankul_3"
              v-validate="'required|numeric'"
              name="ankul_3"
              placeholder="muth"
            />
            <span v-show="errors.has('step2.ankul_3')" class="text-danger">{{
              errors.first("step2.ankul_3")
            }}</span>
            <span v-show="serverErrors.ankul_3 != ''" class="text-danger">{{
              serverErrors.ankul_3
            }}</span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.mukul_3"
              v-validate="'required|numeric'"
              name="mukul_3"
              placeholder="muth"
            />
            <span v-show="errors.has('step2.mukul_3')" class="text-danger">{{
              errors.first("step2.mukul_3")
            }}</span>
            <span v-show="serverErrors.mukul_3 != ''" class="text-danger">{{
              serverErrors.mukul_3
            }}</span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_3"
              v-validate="'required|numeric'"
              name="muth_3"
              placeholder="muth"
            />
            <span v-show="errors.has('step2.muth_3')" class="text-danger">{{
              errors.first("step2.muth_3")
            }}</span>
            <span v-show="serverErrors.muth_3 != ''" class="text-danger">{{
              serverErrors.muth_3
            }}</span>
          </th>
          <th>অন্য কৰ্মচাৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_karmachari_1"
              v-validate="'required|numeric'"
              name="teacher_karmachari_1"
              placeholder="muth"
            />
            <span
              v-show="errors.has('step2.teacher_karmachari_1')"
              class="text-danger"
              >{{ errors.first("step2.teacher_karmachari_1") }}</span
            >
            <span
              v-show="serverErrors.teacher_karmachari_1 != ''"
              class="text-danger"
              >{{ serverErrors.teacher_karmachari_1 }}</span
            >
          </th>
        </tr>
      </table>
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
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_male_2"
              v-validate="'required|numeric'"
              name="teacher_male_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step2.teacher_male_2')"
              class="text-danger"
            >
              {{ errors.first("step2.teacher_male_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.one_male"
              v-validate="'required|numeric'"
              name="one_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.one_male')" class="text-danger">
              {{ errors.first("step2.one_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.two_male"
              v-validate="'required|numeric'"
              name="two_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.two_male')" class="text-danger">
              {{ errors.first("step2.two_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.three_male"
              v-validate="'required|numeric'"
              name="three_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.three_male')" class="text-danger">
              {{ errors.first("step2.three_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.four_male"
              v-validate="'required|numeric'"
              name="four_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.four_male')" class="text-danger">
              {{ errors.first("step2.four_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.five_male"
              v-validate="'required|numeric'"
              name="five_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.five_male')" class="text-danger">
              {{ errors.first("step2.five_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_male"
              v-validate="'required|numeric'"
              name="muth_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.muth_male')" class="text-danger">
              {{ errors.first("step2.muth_male") }}
            </span>
          </th>
          <th>আচাৰ্যা</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_female_2"
              v-validate="'required|numeric'"
              name="teacher_female_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step2.teacher_female_2')"
              class="text-danger"
            >
              {{ errors.first("step2.teacher_female_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.one_female"
              v-validate="'required|numeric'"
              name="one_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.one_female')" class="text-danger">
              {{ errors.first("step2.one_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.two_female"
              v-validate="'required|numeric'"
              name="two_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.two_female')" class="text-danger">
              {{ errors.first("step2.two_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.three_female"
              v-validate="'required|numeric'"
              name="three_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.three_female')" class="text-danger">
              {{ errors.first("step2.three_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.four_female"
              v-validate="'required|numeric'"
              name="four_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.four_female')" class="text-danger">
              {{ errors.first("step2.four_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.five_female"
              v-validate="'required|numeric'"
              name="five_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.five_female')" class="text-danger">
              {{ errors.first("step2.five_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_female"
              v-validate="'required|numeric'"
              name="muth_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.muth_female')" class="text-danger">
              {{ errors.first("step2.muth_female") }}
            </span>
          </th>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_total_2"
              v-validate="'required|numeric'"
              name="teacher_total_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step2.teacher_total_2')"
              class="text-danger"
            >
              {{ errors.first("step2.teacher_total_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.one_total"
              v-validate="'required|numeric'"
              name="one_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.one_total')" class="text-danger">
              {{ errors.first("step2.one_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.two_total"
              v-validate="'required|numeric'"
              name="two_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.two_total')" class="text-danger">
              {{ errors.first("step2.two_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.three_total"
              v-validate="'required|numeric'"
              name="three_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.three_total')" class="text-danger">
              {{ errors.first("step2.three_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.four_total"
              v-validate="'required|numeric'"
              name="four_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.four_total')" class="text-danger">
              {{ errors.first("step2.four_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.five_total"
              v-validate="'required|numeric'"
              name="five_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.five_total')" class="text-danger">
              {{ errors.first("step2.five_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.muth_total"
              v-validate="'required|numeric'"
              name="muth_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step2.muth_total')" class="text-danger">
              {{ errors.first("step2.muth_total") }}
            </span>
          </th>
          <th>অন্য কৰ্মচাৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step2.teacher_karmachari_2"
              v-validate="'required|numeric'"
              name="teacher_karmachari_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step2.teacher_karmachari_2')"
              class="text-danger"
            >
              {{ errors.first("step2.teacher_karmachari_2") }}
            </span>
          </th>
        </tr>
      </table>
      <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step3')"
      data-vv-scope="step3"
      v-if="steps === 3"
    >
      <h1>Step 3</h1>
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
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_male_1"
              v-validate="'required|numeric'"
              name="teacher_male_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_male_1')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_male_1") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.six_male"
              v-validate="'required|numeric'"
              name="six_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.six_male')" class="text-danger">
              {{ errors.first("step3.six_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.seven_male"
              v-validate="'required|numeric'"
              name="seven_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.seven_male')" class="text-danger">
              {{ errors.first("step3.seven_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.eight_male"
              v-validate="'required|numeric'"
              name="eight_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.eight_male')" class="text-danger">
              {{ errors.first("step3.eight_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_male_1"
              v-validate="'required|numeric'"
              name="muth_male_1"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.muth_male_1')" class="text-danger">
              {{ errors.first("step3.muth_male_1") }}
            </span>
          </th>
          <th>আচাৰ্যা</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_female_1"
              v-validate="'required|numeric'"
              name="teacher_female_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_female_1')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_female_1") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.six_female"
              v-validate="'required|numeric'"
              name="six_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.six_female')" class="text-danger">
              {{ errors.first("step3.six_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.seven_female"
              v-validate="'required|numeric'"
              name="seven_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.seven_female')" class="text-danger">
              {{ errors.first("step3.seven_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.eight_female"
              v-validate="'required|numeric'"
              name="eight_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.eight_female')" class="text-danger">
              {{ errors.first("step3.eight_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_female_1"
              v-validate="'required|numeric'"
              name="muth_female_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.muth_female_1')"
              class="text-danger"
            >
              {{ errors.first("step3.muth_female_1") }}
            </span>
          </th>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_female_1"
              v-validate="'required|numeric'"
              name="teacher_female_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_female_1')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_female_1") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.six_total"
              v-validate="'required|numeric'"
              name="six_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.six_total')" class="text-danger">
              {{ errors.first("step3.six_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.seven_total"
              v-validate="'required|numeric'"
              name="seven_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.seven_total')" class="text-danger">
              {{ errors.first("step3.seven_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.eight_total"
              v-validate="'required|numeric'"
              name="eight_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.eight_total')" class="text-danger">
              {{ errors.first("step3.eight_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_total_1"
              v-validate="'required|numeric'"
              name="muth_total_1"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.muth_total_1')" class="text-danger">
              {{ errors.first("step3.muth_total_1") }}
            </span>
          </th>
          <th>অন্য কৰ্মচাৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_karmachari_1"
              v-validate="'required|numeric'"
              name="teacher_karmachari_1"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_karmachari_1')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_karmachari_1") }}
            </span>
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
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_male_2"
              v-validate="'required|numeric'"
              name="teacher_male_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_male_2')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_male_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.nine_male"
              v-validate="'required|numeric'"
              name="nine_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.nine_male')" class="text-danger">
              {{ errors.first("step3.nine_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.ten_male"
              v-validate="'required|numeric'"
              name="ten_male"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.ten_male')" class="text-danger">
              {{ errors.first("step3.ten_male") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_male_2"
              v-validate="'required|numeric'"
              name="muth_male_2"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.muth_male_2')" class="text-danger">
              {{ errors.first("step3.muth_male_2") }}
            </span>
          </th>
          <th>আচাৰ্যা</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_female_2"
              v-validate="'required|numeric'"
              name="teacher_female_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_female_2')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_female_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.nine_female"
              v-validate="'required|numeric'"
              name="nine_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.nine_female')" class="text-danger">
              {{ errors.first("step3.nine_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.ten_female"
              v-validate="'required|numeric'"
              name="ten_female"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.ten_female')" class="text-danger">
              {{ errors.first("step3.ten_female") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_total_2"
              v-validate="'required|numeric'"
              name="muth_total_2"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.muth_total_2')" class="text-danger">
              {{ errors.first("step3.muth_total_2") }}
            </span>
          </th>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_total_2"
              v-validate="'required|numeric'"
              name="teacher_total_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_total_2')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_total_2") }}
            </span>
          </th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.nine_total"
              v-validate="'required|numeric'"
              name="nine_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.nine_total')" class="text-danger">
              {{ errors.first("step3.nine_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.ten_total"
              v-validate="'required|numeric'"
              name="ten_total"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.ten_total')" class="text-danger">
              {{ errors.first("step3.ten_total") }}
            </span>
          </th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.muth_total_2"
              v-validate="'required|numeric'"
              name="muth_total_2"
              placeholder="Teacher"
            />
            <span v-show="errors.has('step3.muth_total_2')" class="text-danger">
              {{ errors.first("step3.muth_total_2") }}
            </span>
          </th>
          <th>অন্য কৰ্মচাৰী</th>
          <th>
            <input
              type="number"
              class="form-control formOne"
              v-model="step3.teacher_total_2"
              v-validate="'required|numeric'"
              name="teacher_total_2"
              placeholder="Teacher"
            />
            <span
              v-show="errors.has('step3.teacher_total_2')"
              class="text-danger"
            >
              {{ errors.first("step3.teacher_total_2") }}
            </span>
          </th>
        </tr>
      </table>
      <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step4')"
      data-vv-scope="step4"
      v-if="steps === 4"
    >
      <h1>Step 4</h1>
      <div class="table-bordered">
        <div class="row mt-2 ml-2">
          <div class="form-group row ml-2">
            <label class="d-flex align-items-end"
              >চাৰিওটা শাখাৰ সৰ্বমুঠ :</label
            >
              <input
                type="number"
                class="form-control col-4 m-1"
                v-model="step4.one"
                v-validate="'required|numeric'"
                name="one"
                placeholder="ছাত্র "
              />
              <span v-show="errors.has('step4.one')" class="text-danger">
                {{ errors.first("step4.one") }}
              </span>
<input
              type="number"
              class="form-control col-2 m-1"
              v-model="step4.two"
              v-validate="'required|numeric'"
              name="two"
              placeholder="ছাত্ৰী"
            />
            <span v-show="errors.has('step4.two')" class="text-danger">
              {{ errors.first("step4.two") }}
            </span>
            <input 
              type="number"
              class="form-control col-2 m-1"
              v-model="step4.three"
              v-validate="'required|numeric'"
              name="three"
              placeholder="মুঠ"
            />
            <span v-show="errors.has('step4.three')" class="text-danger">
              {{ errors.first("step4.three") }}
            </span>
          </div>
            
        </div>
        <!--  form 2 -->
        <div class="d-flex justify-content-end">
          <div class="form-group col-md-3">
            <input
              type="number"
              class="form-control"
              v-model="step4.four"
              v-validate="'required|numeric'"
              name="four"
              placeholder="আচাৰ্য"
            />
            <span v-show="errors.has('step4.four')" class="text-danger">
              {{ errors.first("step4.four") }}
            </span>
          </div>
          <div class="form-group col-md-3">
            <input
              type="number"
              class="form-control"
              v-model="step4.five"
              v-validate="'required|numeric'"
              name="five"
              placeholder="আচৰ্যা"
            />
            <span v-show="errors.has('step4.five')" class="text-danger">
              {{ errors.first("step4.five") }}
            </span>
          </div>
          <div class="form-group col-md-3">
            <input
              type="number"
              class="form-control"
              v-model="step4.six"
              v-validate="'required|numeric'"
              name="six"
              placeholder="মুঠ"
            />
            <span v-show="errors.has('step4.six')" class="text-danger">
              {{ errors.first("step4.six") }}
            </span>
          </div>
        </div>
        <div class="row mt-2">
          <div class="form-group row col-md-4 ml-2 ">
            <label class="d-flex align-items-end">মুঠ অন্য কৰ্মচাৰী :</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.seven"
                v-validate="'required|numeric'"
                name="seven"
                placeholder=""
              />
              <span v-show="errors.has('step4.seven')" class="text-danger">
                {{ errors.first("step4.seven") }}
              </span>
            </div>
          </div>
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত ..:</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.eight"
                v-validate="'required|numeric'"
                name="eight"
                placeholder=""
              />
              <span v-show="errors.has('step4.eight')" class="text-danger">
                {{ errors.first("step4.eight") }}
              </span>
            </div>
          </div>
        </div>
        <div class="mt-2 row">
          <div class="form-group row col-md-8 ml-2">
            <label class="d-flex align-items-end"
              >প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ
              সংখ্যা</label
            >
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.nine"
                v-validate="'required|numeric'"
                name="nine"
                placeholder="ছাত্র"
              />
              <span v-show="errors.has('step4.nine')" class="text-danger">
                {{ errors.first("step4.nine") }}
              </span>
            </div>
          </div>
          <div class="form-group col-md-2">
            <input
              type="number"
              class="form-control"
              v-model="step4.ten"
              v-validate="'required|numeric'"
              name="ten"
              placeholder="ছাত্ৰী"
            />
            <span v-show="errors.has('step4.ten')" class="text-danger">
              {{ errors.first("step4.ten") }}
            </span>
          </div>
          <div class="form-group col-md-2">
            <input
              type="number"
              class="form-control"
              v-model="step4.eleven"
              v-validate="'required|numeric'"
              name="eleven"
              placeholder="মুঠ"
            />
            <span v-show="errors.has('step4.eleven')" class="text-danger">
              {{ errors.first("step4.eleven") }}
            </span>
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
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.twelve"
                v-validate="'required|numeric'"
                name="twelve"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.twelve')" class="text-danger">
                {{ errors.first("step4.twelve") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.thirteen"
                v-validate="'required|numeric'"
                name="thirteen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.thirteen')" class="text-danger">
                {{ errors.first("step4.thirteen") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.fourteen"
                v-validate="'required|numeric'"
                name="fourteen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.fourteen')" class="text-danger">
                {{ errors.first("step4.fourteen") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.fiveteen"
                v-validate="'required|numeric'"
                name="fiveteen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.fiveteen')" class="text-danger">
                {{ errors.first("step4.fiveteen") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.sixteen"
                v-validate="'required|numeric'"
                name="sixteen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.sixteen')" class="text-danger">
                {{ errors.first("step4.sixteen") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.seventeen"
                v-validate="'required|numeric'"
                name="seventeen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.seventeen')" class="text-danger">
                {{ errors.first("step4.seventeen") }}
              </span>
            </th>
            <th>
            <input
              type="number"
              class="form-control formOne"
                v-model="step4.eighteen"
                v-validate="'required|numeric'"
                name="eighteen"
                placeholder="মুঠ"
              />
              <span v-show="errors.has('step4.eighteen')" class="text-danger">
                {{ errors.first("step4.eighteen") }}
              </span>
            </th>
          </tr>
        </table>
      </div>
      <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step5')"
      data-vv-scope="step5"
      v-if="steps === 5"
    >
      <h1>Step 5</h1>
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
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.sc_male"
                v-validate="'required|numeric'"
                name="sc_male"
                placeholder=""
              />
              <span v-show="errors.has('step5.sc_male')" class="text-danger">
                {{ errors.first("step5.sc_male") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.sc_female"
                v-validate="'required|numeric'"
                name="sc_female"
                placeholder=""
              />
              <span v-show="errors.has('step5.sc_female')" class="text-danger">
                {{ errors.first("step5.sc_female") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control  formOne"
                v-model="step5.sc_total"
                v-validate="'required|numeric'"
                name="sc_total"
                placeholder=""
              />
              <span v-show="errors.has('step5.sc_total')" class="text-danger">
                {{ errors.first("step5.sc_total") }}
              </span>
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
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.st_male"
                v-validate="'required|numeric'"
                name="st_male"
                placeholder=""
              />
              <span v-show="errors.has('step5.st_male')" class="text-danger">
                {{ errors.first("step5.st_male") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.st_female"
                v-validate="'required|numeric'"
                name="st_female"
                placeholder=""
              />
              <span v-show="errors.has('step5.st_female')" class="text-danger">
                {{ errors.first("step5.st_female") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.st_total"
                v-validate="'required|numeric'"
                name="st_total"
                placeholder=""
              />
              <span v-show="errors.has('step5.st_total')" class="text-danger">
                {{ errors.first("step5.st_total") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.muslim_male"
                v-validate="'required|numeric'"
                name="muslim_male"
                placeholder=""
              />
              <span
                v-show="errors.has('step5.muslim_male')"
                class="text-danger"
              >
                {{ errors.first("step5.muslim_male") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.muslim_female"
                v-validate="'required|numeric'"
                name="muslim_female"
                placeholder=""
              />
              <span
                v-show="errors.has('step5.muslim_female')"
                class="text-danger"
              >
                {{ errors.first("step5.muslim_female") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.muslim_total"
                v-validate="'required|numeric'"
                name="muslim_total"
                placeholder=""
              />
              <span
                v-show="errors.has('step5.muslim_total')"
                class="text-danger"
              >
                {{ errors.first("step5.muslim_total") }}
              </span>
            </td>
          </tr>
          <tr>
            <td>(গ) অন্যান্য পিছপৰা জাতি (OBC)</td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.obc_male"
                v-validate="'required|numeric'"
                name="obc_male"
                placeholder=""
              />
              <span v-show="errors.has('step5.obc_male')" class="text-danger">
                {{ errors.first("step5.obc_male") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.obc_female"
                v-validate="'required|numeric'"
                name="obc_female"
                placeholder=""
              />
              <span v-show="errors.has('step5.obc_female')" class="text-danger">
                {{ errors.first("step5.obc_female") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.obc_total"
                v-validate="'required|numeric'"
                name="obc_total"
                placeholder=""
              />
              <span v-show="errors.has('step5.obc_total')" class="text-danger">
                {{ errors.first("step5.obc_total") }}
              </span>
            </td>
            <td>(খ) খ্ৰীষ্টান</td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.chritian_male"
                v-validate="'required|numeric'"
                name="chritian_male"
                placeholder=""
              />
              <span
                v-show="errors.has('step5.chritian_male')"
                class="text-danger"
              >
                {{ errors.first("step5.chritian_male") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.chritian_female"
                v-validate="'required|numeric'"
                name="chritian_female"
                placeholder=""
              />
              <span
                v-show="errors.has('step5.chritian_female')"
                class="text-danger"
              >
                {{ errors.first("step5.chritian_female") }}
              </span>
            </td>
            <td>
              <input
                type="number"
                class="form-control formOne"
                v-model="step5.chritian_total"
                v-validate="'required|numeric'"
                name="chritian_total"
                placeholder="Placeholder"
              />
              <span
                v-show="errors.has('step5.chritian_total')"
                class="text-danger"
              >
                {{ errors.first("step5.chritian_total") }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step6')"
      data-vv-scope="step6"
      v-if="steps === 6"
    >
      <div class="p-2 row">
        <p class="mt-2 mr-2">(ক)</p>
        <p class="mt-2 mr-2">
          নিকেতনখন কত অৱস্থিত -- চহৰত/গাঁৱত/বনাঞ্চলত (✓ চিন দিব ) | নিকেতনলৈ
          ছাত্র-ছাত্ৰী অহা গাঁৱৰ সংখ্যা
        </p>

        <!-- <input type="text" class="form-control "  /> -->
        <input
          type="text"
          class="form-control col-1 mr-2"
          v-model="step6.one"
          v-validate="'required'"
          name="one"
          placeholder="নিকেতনখন ....."
        />
        <span v-show="errors.has('step6.one')" class="text-danger">
          {{ errors.first("step6.one") }}
        </span>
        <p class="mt-2 mr-2">নগৰীয়া বস্তিৰ সংখ্যা</p>
        <input
          type="text"
          class="form-control col-1 mr-2"
          v-model="step6.two"
          v-validate="'required'"
          name="two"
          placeholder="নগৰীয়া বস্তিৰ সংখ্যা"
        />
        <span v-show="errors.has('step6.two')" class="text-danger">
          {{ errors.first("step6.two") }}
        </span>
        <p class="mt-2 mr-2">ৱাৰ্ডৰ সংখ্যা</p>

        <input
          type="text"
          class="form-control col-1 mr-2"
          v-model="step6.three"
          v-validate="'required'"
          name="three"
          placeholder="ৱাৰ্ডৰ সংখ্যা"
        />
        <span v-show="errors.has('step6.three')" class="text-danger">
          {{ errors.first("step6.three") }}
        </span>
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
                <input
                  type="text"
                  class="form-control"
                  v-model="step6.four"
                  v-validate="'required'"
                  name="four"
                  placeholder=""
                />
                <span v-show="errors.has('step6.four')" class="text-danger">
                  {{ errors.first("step6.four") }}
                </span>
              </td>
              <td>১মৰ পৰা ৫ ম</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="step6.five"
                  v-validate="'required'"
                  name="five"
                  placeholder=""
                />
                <span v-show="errors.has('step6.five')" class="text-danger">
                  {{ errors.first("step6.five") }}
                </span>
              </td>
            </tr>
            <tr>
              <td>৬ষ্টৰ পৰা ৮ ম</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="step6.six"
                  v-validate="'required'"
                  name="six"
                  placeholder=""
                />
                <span v-show="errors.has('step6.six')" class="text-danger">
                  {{ errors.first("step6.six") }}
                </span>
              </td>
              <td>৯ ম আৰু ১০ ম</td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  v-model="step6.seven"
                  v-validate="'required'"
                  name="seven"
                  placeholder=""
                />
                <span v-show="errors.has('step6.seven')" class="text-danger">
                  {{ errors.first("step6.seven") }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">(গ)</p>
        <p class="mt-2 mr-2">(১) আচাৰ্য/আচাৰ্জাৰ নুন্যতম মানধন</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step6.eight"
          v-validate="'required'"
          name="eight"
          placeholder="নুন্যতম মানধন.."
        />
        <span v-show="errors.has('step6.eight')" class="text-danger">
          {{ errors.first("step6.eight") }}
        </span>
        <p class="mt-2 mr-2">(২) আচাৰ্য/আচাৰ্জাৰ অধিকতম মানধন</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step6.nine"
          v-validate="'required'"
          name="nine"
          placeholder="অধিকতম মানধন"
        />
        <span v-show="errors.has('step6.nine')" class="text-danger">
          {{ errors.first("step6.nine") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">(ঘ)</p>
        <p class="mt-2 mr-2">
          নিকেতনৰ হিচাব পৰীক্ষকৰ প্ৰতিবেদন ২০১৯ বৰ্ষৰ ৩১ মাৰ্চলৈ সম্পূৰ্ণ কৰি
          প্ৰদেশ কাৰ্যালয়লৈ প্ৰেৰণ কৰিছে/কৰা নাই (✓ চিন দিব ) ।
        </p>
        <p class="mt-2 mr-2">যদি কৰা নাই কোন চনলৈ পঠাইছে লিখিব</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step6.ten"
          v-validate="'required'"
          name="ten"
          placeholder="অধিকতম মানধন "
        />
        <span v-show="errors.has('step6.ten')" class="text-danger">
          {{ errors.first("step6.ten") }}
        </span>
        নিকেতনৰ তথ্য আৰু হিচাব-নিকাচ চাৰ্টাড অকাউন্টটেণ্টৰ (C/A) দ্বাৰা আৰু
        কম্পিউটাৰৰ যোগেদি কৰা হয়/নহয় (✓ চিন দিব )
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (ঙ) নিকেতনৰ বেংক একাউণ্ট নম্বৰ আৰু বেংকৰ নাম (যিমানটা থাকে)
        </p>

        <input
          type="text"
          class="form-control col-1 mr-2"
          v-model="step6.eleven"
          v-validate="'required'"
          name="eleven"
          placeholder="অধিকতম মানধন "
        />
        <span v-show="errors.has('step6.eleven')" class="text-danger">
          {{ errors.first("step6.eleven") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (চ) ভবিষ্য নিধি - E. P. F. আছে/নাই । যদি আছে নম্বৰ দিব :
        </p>
        <select
          class="custom-select col-2"
          v-model="step6.twelve"
          name="twelve"
          v-validate="'required'"
        >
          <option value="আছে" selected>আছে</option>
          <option value="নাই">নাই</option>
        </select>

        <span v-show="errors.has('step6.twelve')" class="text-danger">
          {{ errors.first("step6.twelve") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (জ) নিকেতনৰ আচাৰ্যসকল প্ৰান্তীয় আচাৰ্য কল্যান নিধিৰ সদস্য হয়নে ?
        </p>

        <select
          class="custom-select col-2"
          v-model="step6.thirteen"
          name="thirteen"
          v-validate="'required'"
        >
          <option value="হয়" selected>হয়</option>
          <option value="নহয়">নহয়</option>
        </select>

        <span v-show="errors.has('step6.thirteen')" class="text-danger">
          {{ errors.first("step6.thirteen") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (ঝ) নিকেতনৰ আচাৰ্য/ আৰু কৰ্মচাৰীসকল কোনো স্থ্য স্বা বীমা/অটল অমৃত
          কাৰ্ড / আয়ুষ্মান ভাৰত কাৰ্ড লৈছেনে নাই, যদি লোৱা নাই উপৰোক্ত আঁচনিৰ
          আওতালৈ আনিব লাগে ।
        </p>
      </div>
      <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step7')"
      data-vv-scope="step7"
      v-if="steps === 7"
    >
<div class="p-2 row">
    <p class="mt-2 mr-2"></p>
    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম </p>

        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.one"
          v-validate="'required'"
          name="one"
          placeholder=""
        />
        <span v-show="errors.has('step7.one')" class="text-danger">
          {{ errors.first("step7.one") }}
        </span>
    <p class="mt-2 mr-2 ">
        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ </p>
        <input
          type="text"
          class="form-control col-2 mr-2 mt-1"
          v-model="step7.two"
          v-validate="'required'"
          name="two"
          placeholder=""
        />
        <span v-show="errors.has('step7.two')" class="text-danger">
          {{ errors.first("step7.two") }}
        </span>
    <p class="mt-2 mr-2">
        শিশু শিক্ষা সমিতি, অসমৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.three"
          v-validate="'required'"
          name="three"
          placeholder=""
        />
        <span v-show="errors.has('step7.three')" class="text-danger">
          {{ errors.first("step7.three") }}
        </span>
    <p class="mt-2 mr-2">প্রধানাচাৰ্য স্থায়ী/অস্থায়ী/ভাৰপ্ৰাপ্ত (✓ চিন দিব )। উপ-প্ৰধানাচাৰ্যৰ নাম (যদি আছে) : </p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.four"
          v-validate="'required'"
          name="four"
          placeholder=""
        />
        <span v-show="errors.has('step7.four')" class="text-danger">
          {{ errors.first("step7.four") }}
        </span>
    <p class="mt-2 mr-2">প্রধানাচাৰ্য প্ৰশিক্ষণ লোৱা চন </p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.five"
          v-validate="'required'"
          name="five"
          placeholder=""
        />
        <span v-show="errors.has('step7.five')" class="text-danger">
          {{ errors.first("step7.five") }}
        </span>
    <p class="mt-2 mr-2">নিযুক্তি স্থায়ী/অস্থায়ী (✓ চিন দিব )।</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(৬) (ক) নিকেতনৰ মাটিৰ পৰিমাণ</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.six"
          v-validate="'required'"
          name="six"
          placeholder=""
        />
        <span v-show="errors.has('step7.six')" class="text-danger">
          {{ errors.first("step7.six") }}
        </span>
    <p class="mt-2 mr-2">মাটি নিজৰ হয় / নহয় । (ম্যাদী/চৰকাৰী/দখল) নিকেতনৰ ভৱন পকা/অৰ্দ্ধ পকা/ অস্থায়ী (✓ চিন দিব )।</p>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(খ) নিকেতনখন</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.seven"
          v-validate="'required'"
          name="seven"
          placeholder=""
        />
        <span v-show="errors.has('step7.seven')" class="text-danger">
          {{ errors.first("step7.seven") }}
        </span>
    <p class="mt-2 mr-2">পঞ্চায়ত,</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.eight"
          v-validate="'required'"
          name="eight"
          placeholder=""
        />
        <span v-show="errors.has('step7.eight')" class="text-danger">
          {{ errors.first("step7.eight") }}
        </span>
    <p class="mt-2 mr-2">উন্নয়ন খণ্ড (ব্লক)ত</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.nine"
          v-validate="'required'"
          name="nine"
          placeholder=""
        />
        <span v-show="errors.has('step7.nine')" class="text-danger">
          {{ errors.first("step7.nine") }}
        </span>
    <p class="mt-2 mr-2">মহকুমাত অৱস্থিত ।</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(গ) পুথিভঁৰাল ব্যৱস্থা : অধ্যয়ন কক্ষ</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.ten"
          v-validate="'required'"
          name="ten"
          placeholder=""
        />
        <span v-show="errors.has('step7.ten')" class="text-danger">
          {{ errors.first("step7.ten") }}
        </span>
    <p class="mt-2 mr-2">টা /আলমাৰী সংখ্যা</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.eleven"
          v-validate="'required'"
          name="eleven"
          placeholder=""
        />
        <span v-show="errors.has('step7.eleven')" class="text-danger">
          {{ errors.first("step7.eleven") }}
        </span>
    <p class="mt-2 mr-2">টা/কিতাবৰ সংখ্যা</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.twelve"
          v-validate="'required'"
          name="twelve"
          placeholder=""
        />
        <span v-show="errors.has('step7.twelve')" class="text-danger">
          {{ errors.first("step7.twelve") }}
        </span>
    <p class="mt-2 mr-2">খন । পঞ্জীয়ন বহীত কিতাব কিতাবসমূহ পঞ্জীয়ন কৰা হয়/নহয় । (✓ চিন দিব )</p>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(ঘ) বিজ্ঞানাগাৰৰ ব্যবস্থা আছে/নাই আৰু নিয়মিত ব্যৱহাৰ হয়/নহয় । (✓ চিন দিব )</p>
</div>

<div class="p-2 row">
    <p class="mt-2 mr-2">(ঙ) খেলপথাৰ আছে/নাই । (✓ চিন দিব ) যদি নাই, কি ধৰণৰ ব্যবস্থা আছে</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.thirteen"
          v-validate="'required'"
          name="thirteen"
          placeholder=""
        />
        <span v-show="errors.has('step7.thirteen')" class="text-danger">
          {{ errors.first("step7.thirteen") }}
        </span>
</div>
<div class="p-2 row">
    <p class="mt-2 mr-2">(চ) উপযুক্ত প্ৰাৰ্থনা গৃহ আছে/নাই (✓ চিন দিব ) (যদি নাই সোনকালে ব্যবস্থা কৰিব) । প্ৰথনা বিদ্যা
        ভাৰতীয় ক্ৰম অনুসৰি হয়/নহয় (✓ চিন দিব )
        । বহি প্ৰাৰ্থনা হয়নে ?</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step7.fourteen"
          v-validate="'required'"
          name="fourteen"
          placeholder=""
        />
        <span v-show="errors.has('step7.fourteen')" class="text-danger">
          {{ errors.first("step7.fourteen") }}
        </span>
</div>

    <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
        </button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>

    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step8')"
      data-vv-scope="step8"
      v-if="steps === 8"
    >
      <div class="d-flex justify-content-center">
        <h5 class="mb-0 h4 titleCentre">
          নিম্নলিখিত কাৰ্যব্যবস্থা সমূহৰ আপোনাৰ নিকেতনৰ ক্ষেত্ৰত যিটো প্ৰযোজ্য
          হয় তাত (✓) চীন দিব ।
        </h5>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>

          <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.one"
          v-validate="'required'"
          name="one"
          placeholder=""
        />
        <span v-show="errors.has('step8.one')" class="text-danger">
          {{ errors.first("step8.one") }}
        </span>
        <p class="mt-2 mr-2">
          (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
          হৈছে, পঞ্জীয়ন নম্বৰ দিব
        </p>
          <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.two"
          v-validate="'required'"
          name="two"
          placeholder=""
        />
        <span v-show="errors.has('step8.two')" class="text-danger">
          {{ errors.first("step8.two") }}
        </span>
        <p class="mt-2 mr-2">
          (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
        </p>
          <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.three"
          v-validate="'required'"
          name="three"
          placeholder="3"
        />
        <span v-show="errors.has('step8.three')" class="text-danger">
          {{ errors.first("step8.three") }}
        </span>
      </div>

      <div class="p-2 row">
        <p class="mt-2 mr-2">৭ । (ক) পঞ্জীয়নৰ বাবে চৰকাৰৰ সৈতে হোৱা যোগাযোগ</p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.four"
          v-validate="'required'"
          name="four"
          placeholder="3"
        />
        <span v-show="errors.has('step8.four')" class="text-danger">
          {{ errors.first("step8.four") }}
        </span>
        <p class="mt-2 mr-2">
          (ক) আবেদন কৰিছে (খ) নিকেতন খোলাৰ অনুমতি হৈছে (গ) যদি চৰকাৰী পঞ্জীভূক্ত
          হৈছে, পঞ্জীয়ন নম্বৰ দিব
        </p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.five"
          v-validate="'required'"
          name="five"
          placeholder="3"
        />
        <span v-show="errors.has('step8.five')" class="text-danger">
          {{ errors.first("step8.five") }}
        </span>
        <p class="mt-2 mr-2">
          (ঘ) কোনো ধৰণৰ যোগাযোগ হোৱা নাই । সেৱাৰ কড নম্বৰ দিব
        </p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.six"
          v-validate="'required'"
          name="six"
          placeholder="3"
        />
        <span v-show="errors.has('step8.six')" class="text-danger">
          {{ errors.first("step8.six") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (খ) শিশু শিক্ষা সমিতি, অসমৰ অন্তৰ্ভুক্তৰ পঞ্জীয়ন নম্বৰ দিব
        </p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.seven"
          v-validate="'required'"
          name="seven"
          placeholder="3"
        />
        <span v-show="errors.has('step8.seven')" class="text-danger">
          {{ errors.first("step8.seven") }}
        </span>
        <p class="mt-2 mr-2">
          (যদি নাই অতি সোনকালে মূল প্ৰমাণ পত্ৰ সহ পঞ্জীয়ন নম্বৰ লব )
        </p>
      </div>

      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (গ) ষষ্ঠ শ্ৰেণীৰ‍ পৰা অষ্টম শ্ৰেণীলৈ সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয়
          উপ-সমিতিৰ পৰা অনুমোদন পোৱা চন
        </p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.eight"
          v-validate="'required'"
          name="eight"
          placeholder="3"
        />
        <span v-show="errors.has('step8.eight')" class="text-danger">
          {{ errors.first("step8.eight") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (ঘ) নৱম আৰু দশম শ্ৰেণীৰ‍ বাবে সমিতিৰ উচ্চ মাধ্যমিক বিদ্যালয় উপ-সমিতিৰ
          পৰা অনুমোদন পোৱা চন
        </p>
         <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.nine"
          v-validate="'required'"
          name="nine"
          placeholder="3"
        />
        <span v-show="errors.has('step8.nine')" class="text-danger">
          {{ errors.first("step8.nine") }}
        </span>
      </div>

      <div class="p-2 row">
        <p class="mt-2 mr-2">
          ৮ । (ক) বালিকা শিক্ষাৰ কালাংখ নিমনীয়া ভাবে হৈ আছে/নাই ।
        </p>

         <select
          class="custom-select col-2"
          v-model="step8.ten"
          name="ten"
          v-validate="'required'"
        >
          <option value="আছে" selected>আছে</option>
          <option value="নাই">নাই</option>
        </select>

        <span v-show="errors.has('step8.ten')" class="text-danger">
          {{ errors.first("step8.ten") }}
        </span>

      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (খ) পঞ্চপদী শিক্ষণ পদ্ধতিৰ আধাৰত সকলো আচাৰ্যই পাঠ যোজনা বনাই পাঠ দান
          কৰে/নকৰে । যদি নকৰে কিয় নকৰে জনাব :
        </p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.eleven"
          v-validate="'required'"
          name="eleven"
          placeholder="3"
        />
        <span v-show="errors.has('step8.eleven')" class="text-danger">
          {{ errors.first("step8.eleven") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (গ) Spoken English অথবা Class ত English to English কোন কোন শ্ৰেণীত
          কেইটাকৈ Class
        </p>
               <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.twelve"
          v-validate="'required'"
          name="twelve"
          placeholder="3"
        />
        <span v-show="errors.has('step8.twelve')" class="text-danger">
          {{ errors.first("step8.twelve") }}
        </span>
        <p class="mt-2 mr-2">হয় ।</p>
      </div>

      <div class="p-2 row">
        <p class="mt-2 mr-2">(ঘ) স্মাৰ্ট ক্লাছৰ ব্যবস্থা আছে/নাই ।</p>

          <select
          class="custom-select col-2"
          v-model="step8.thirteen"
          name="thirteen"
          v-validate="'required'"
        >
          <option value="আছে" selected>আছে</option>
          <option value="নাই">নাই</option>
        </select>

        <span v-show="errors.has('step8.thirteen')" class="text-danger">
          {{ errors.first("step8.thirteen") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (ঙ) নিকেতনত শিশু বাটিকাৰ সুকীয়া ব্যবস্থা হৈছে/হোৱা নাই ।
        </p>

         <select
          class="custom-select col-2"
          v-model="step8.fourteen"
          name="fourteen"
          v-validate="'required'"
        >
          <option selected value="হৈছে">হৈছে</option>
          <option value="হোৱা নাই">হোৱা নাই</option>
        </select>

        <span v-show="errors.has('step8.fourteen')" class="text-danger">
          {{ errors.first("step8.fourteen") }}
        </span>
        <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই ।</p>
         <select
          class="custom-select col-2"
          v-model="step8.fiveteen"
          name="fiveteen"
          v-validate="'required'"
        >
          <option selected value="দিছে">দিছে</option>
          <option value="দিয়া নাই">দিয়া নাই</option>
        </select>

        <span v-show="errors.has('step8.fiveteen')" class="text-danger">
          {{ errors.first("step8.fiveteen") }}
        </span>
        <p class="mt-2 mr-2">
          নিকেতন শিশু বাটিকা কোনটো ৰূপত আছে --- নমুনা ৰূপ/ প্ৰভাৱীৰূপ/পযত্নশীল
          ৰূপ
        </p>

         <select
          class="custom-select col-2"
          v-model="step8.sixteen"
          name="sixteen"
          v-validate="'required'"
        >
          <option selected value="নমুনা ৰূপ">নমুনা ৰূপ</option>
          <option value="প্ৰভাৱীৰূপ">প্ৰভাৱীৰূপ</option>
          <option value="পযত্নশীল ৰূপ">পযত্নশীল ৰূপ</option>
        </select>

        <span v-show="errors.has('step8.sixteen')" class="text-danger">
          {{ errors.first("step8.sixteen") }}
        </span>

      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">(চ) কম্পিউটাৰ শিক্ষা ব্যবস্থা আছে/নাই ।</p>
         <select
          class="custom-select col-2"
          v-model="step8.seventeen"
          name="seventeen"
          v-validate="'required'"
        >
          <option selected value="আছে">আছে</option>
          <option value="নাই">নাই</option>
        </select>

        <span v-show="errors.has('step8.seventeen')" class="text-danger">
          {{ errors.first("step8.seventeen") }}
        </span>
        <p class="mt-2 mr-2">শিশু বাটিকা প্ৰমুখ নিযুক্তি দিছে/দিয়া নাই</p>
         <select
          class="custom-select col-2"
          v-model="step8.eighteen"
          name="eighteen"
          v-validate="'required'"
        >
          <option selected value="দিছে ।">দিছে ।</option>
          <option value="দিয়া নাই ।">দিয়া নাই ।</option>
        </select>

        <span v-show="errors.has('step8.eighteen')" class="text-danger">
          {{ errors.first("step8.eighteen") }}
        </span>
        <p class="mt-2 mr-2">যদি আছে কম্পিউটাৰ /লেপটপ (Laptop) কিমানতা</p>
        <input
          type="text"
          class="form-control col-2 mr-2"
          v-model="step8.nineteen"
          v-validate="'required'"
          name="nineteen"
          placeholder="3"
        />
        <span v-show="errors.has('step8.nineteen')" class="text-danger">
          {{ errors.first("step8.nineteen") }}
        </span>
        <p class="mt-2 mr-2">কম্পিউটাৰ বিষয়ৰ আচাৰ্য আছে/নাই ।</p>

         <select
          class="custom-select col-2"
          v-model="step8.twenty"
          name="twenty"
          v-validate="'required'"
        >
          <option selected value="আছে ।">আছে ।</option>
          <option value="নাই ।">নাই ।</option>
        </select>

        <span v-show="errors.has('step8.twenty')" class="text-danger">
          {{ errors.first("step8.twenty") }}
        </span>
      </div>
      <div class="p-2 row">
        <p class="mt-2 mr-2">
          (ছ) অটল টিংকাৰিং প্ৰয়োগ শালাৰ (Atal Tinkering Labortory) বাবে Atal
          Inovation Mission, Niti Ayogত আবেদন কৰিছেনে নাই? ( ষষ্ঠ শ্ৰেণীৰ‍ পৰা
          দশম শ্ৰেণীলৈ মুঠ ৪০০ ছাত্ৰ-ছাত্ৰী থকা, ১৫০০বৰ্গ ফুট স্থানৰ নিকেতনৰ
          ক্ষেত্ৰত প্ৰযোজ্য )
        </p>
      </div>

    <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
    </button>
    </div>
    <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
    </div>
    </form>


    <form
     class="form-horizontal"
      @submit.prevent="submitForm('step9')"
      data-vv-scope="step9"
      v-if="steps === 9">
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
            <input
                type="text"
                class="form-control"
                v-model="step9.institute_name"
                v-validate="'required'"
                name="institute_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.institute_name')" class="text-danger">
                {{ errors.first("step9.institute_name") }}
            </span>
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
            <input
                type="text"
                class="form-control"
                v-model="step9.one_name"
                v-validate="'required'"
                name="one_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_name')" class="text-danger">
                {{ errors.first("step9.one_name") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.one_start_date"
                v-validate="'required'"
                name="one_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_start_date')" class="text-danger">
                {{ errors.first("step9.one_start_date") }}
            </span>
            </td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_end_date"
                v-validate="'required'"
                name="one_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_end_date')" class="text-danger">
                {{ errors.first("step9.one_end_date") }}
            </span>
            </td>
            <td>    <input
                type="text"
                class="form-control"
                v-model="step9.one_mohila"
                v-validate="'required'"
                name="one_mohila"
                placeholder="mohila"
            />
            <span v-show="errors.has('step9.one_mohila')" class="text-danger">
                {{ errors.first("step9.one_mohila") }}
            </span></td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_nondor"
                v-validate="'required'"
                name="one_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_nondor')" class="text-danger">
                {{ errors.first("step9.one_nondor") }}
            </span>
            </td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_ahota"
                v-validate="'required'"
                name="one_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_ahota')" class="text-danger">
                {{ errors.first("step9.one_ahota") }}
            </span>
            </td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_pathdam"
                v-validate="'required'"
                name="one_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_pathdam')" class="text-danger">
                {{ errors.first("step9.one_pathdam") }}
            </span>
            </td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_7_diniya"
                v-validate="'required'"
                name="one_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_7_diniya')" class="text-danger">
                {{ errors.first("step9.one_7_diniya") }}
            </span>
            </td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.one_15_diniya"
                v-validate="'required'"
                name="one_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.one_15_diniya')" class="text-danger">
                {{ errors.first("step9.one_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>২</td>
            <td>
                    <input
                type="text"
                class="form-control"
                v-model="step9.two_name"
                v-validate="'required'"
                name="two_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_name')" class="text-danger">
                {{ errors.first("step9.two_name") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_start_date"
                v-validate="'required'"
                name="two_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_start_date')" class="text-danger">
                {{ errors.first("step9.two_start_date") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_end_date"
                v-validate="'required'"
                name="two_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_end_date')" class="text-danger">
                {{ errors.first("step9.two_end_date") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_mohila"
                v-validate="'required'"
                name="two_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_mohila')" class="text-danger">
                {{ errors.first("step9.two_mohila") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_nondor"
                v-validate="'required'"
                name="two_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_nondor')" class="text-danger">
                {{ errors.first("step9.two_nondor") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_ahota"
                v-validate="'required'"
                name="two_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_ahota')" class="text-danger">
                {{ errors.first("step9.two_ahota") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_pathdam"
                v-validate="'required'"
                name="two_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_pathdam')" class="text-danger">
                {{ errors.first("step9.two_pathdam") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_7_diniya"
                v-validate="'required'"
                name="two_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_7_diniya')" class="text-danger">
                {{ errors.first("step9.two_7_diniya") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.two_15_diniya"
                v-validate="'required'"
                name="two_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.two_15_diniya')" class="text-danger">
                {{ errors.first("step9.two_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>৩</td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.three_name"
                v-validate="'required'"
                name="three_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_name')" class="text-danger">
                {{ errors.first("step9.three_name") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.three_start_date"
                v-validate="'required'"
                name="three_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_start_date')" class="text-danger">
                {{ errors.first("step9.three_start_date") }}
            </span>
            </td>
            <td>
                        <input
                type="text"
                class="form-control"
                v-model="step9.three_end_date"
                v-validate="'required'"
                name="three_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_end_date')" class="text-danger">
                {{ errors.first("step9.three_end_date") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_mohila"
                v-validate="'required'"
                name="three_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_mohila')" class="text-danger">
                {{ errors.first("step9.three_mohila") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_nondor"
                v-validate="'required'"
                name="three_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_nondor')" class="text-danger">
                {{ errors.first("step9.three_nondor") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_ahota"
                v-validate="'required'"
                name="three_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_ahota')" class="text-danger">
                {{ errors.first("step9.three_ahota") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_pathdam"
                v-validate="'required'"
                name="three_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_pathdam')" class="text-danger">
                {{ errors.first("step9.three_pathdam") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_7_diniya"
                v-validate="'required'"
                name="three_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_7_diniya')" class="text-danger">
                {{ errors.first("step9.three_7_diniya") }}
            </span>
            </td>
            <td>
                <input
                type="text"
                class="form-control"
                v-model="step9.three_15_diniya"
                v-validate="'required'"
                name="three_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.three_15_diniya')" class="text-danger">
                {{ errors.first("step9.three_15_diniya") }}
            </span>
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
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_name"
                v-validate="'required'"
                name="four_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_name')" class="text-danger">
                {{ errors.first("step9.four_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_start_date"
                v-validate="'required'"
                name="four_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_start_date')" class="text-danger">
                {{ errors.first("step9.four_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_end_date"
                v-validate="'required'"
                name="four_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_end_date')" class="text-danger">
                {{ errors.first("step9.four_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_mohila"
                v-validate="'required'"
                name="four_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_mohila')" class="text-danger">
                {{ errors.first("step9.four_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_nondor"
                v-validate="'required'"
                name="four_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_nondor')" class="text-danger">
                {{ errors.first("step9.four_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_ahota"
                v-validate="'required'"
                name="four_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_ahota')" class="text-danger">
                {{ errors.first("step9.four_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_pathdam"
                v-validate="'required'"
                name="four_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_pathdam')" class="text-danger">
                {{ errors.first("step9.four_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_7_diniya"
                v-validate="'required'"
                name="four_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_7_diniya')" class="text-danger">
                {{ errors.first("step9.four_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.four_15_diniya"
                v-validate="'required'"
                name="four_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.four_15_diniya')" class="text-danger">
                {{ errors.first("step9.four_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>৫</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_name"
                v-validate="'required'"
                name="five_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_name')" class="text-danger">
                {{ errors.first("step9.five_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_start_date"
                v-validate="'required'"
                name="five_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_start_date')" class="text-danger">
                {{ errors.first("step9.five_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_end_date"
                v-validate="'required'"
                name="five_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_end_date')" class="text-danger">
                {{ errors.first("step9.five_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_mohila"
                v-validate="'required'"
                name="five_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_mohila')" class="text-danger">
                {{ errors.first("step9.five_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_nondor"
                v-validate="'required'"
                name="five_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_nondor')" class="text-danger">
                {{ errors.first("step9.five_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_ahota"
                v-validate="'required'"
                name="five_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_ahota')" class="text-danger">
                {{ errors.first("step9.five_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_pathdam"
                v-validate="'required'"
                name="five_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_pathdam')" class="text-danger">
                {{ errors.first("step9.five_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_7_diniya"
                v-validate="'required'"
                name="five_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_7_diniya')" class="text-danger">
                {{ errors.first("step9.five_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.five_15_diniya"
                v-validate="'required'"
                name="five_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.five_15_diniya')" class="text-danger">
                {{ errors.first("step9.five_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>৬</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_name"
                v-validate="'required'"
                name="six_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_name')" class="text-danger">
                {{ errors.first("step9.six_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_start_date"
                v-validate="'required'"
                name="six_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_start_date')" class="text-danger">
                {{ errors.first("step9.six_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_end_date"
                v-validate="'required'"
                name="six_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_end_date')" class="text-danger">
                {{ errors.first("step9.six_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_mohila"
                v-validate="'required'"
                name="six_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_mohila')" class="text-danger">
                {{ errors.first("step9.six_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_nondor"
                v-validate="'required'"
                name="six_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_nondor')" class="text-danger">
                {{ errors.first("step9.six_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_ahota"
                v-validate="'required'"
                name="six_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_ahota')" class="text-danger">
                {{ errors.first("step9.six_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_pathdam"
                v-validate="'required'"
                name="six_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_pathdam')" class="text-danger">
                {{ errors.first("step9.six_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_7_diniya"
                v-validate="'required'"
                name="six_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_7_diniya')" class="text-danger">
                {{ errors.first("step9.six_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.six_15_diniya"
                v-validate="'required'"
                name="six_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.six_15_diniya')" class="text-danger">
                {{ errors.first("step9.six_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>৭</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_name"
                v-validate="'required'"
                name="seven_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_name')" class="text-danger">
                {{ errors.first("step9.seven_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_start_date"
                v-validate="'required'"
                name="seven_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_start_date')" class="text-danger">
                {{ errors.first("step9.seven_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_end_date"
                v-validate="'required'"
                name="seven_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_end_date')" class="text-danger">
                {{ errors.first("step9.seven_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_mohila"
                v-validate="'required'"
                name="seven_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_mohila')" class="text-danger">
                {{ errors.first("step9.seven_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_nondor"
                v-validate="'required'"
                name="seven_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_nondor')" class="text-danger">
                {{ errors.first("step9.seven_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_ahota"
                v-validate="'required'"
                name="seven_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_ahota')" class="text-danger">
                {{ errors.first("step9.seven_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_pathdam"
                v-validate="'required'"
                name="seven_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_pathdam')" class="text-danger">
                {{ errors.first("step9.seven_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_7_diniya"
                v-validate="'required'"
                name="seven_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_7_diniya')" class="text-danger">
                {{ errors.first("step9.seven_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.seven_15_diniya"
                v-validate="'required'"
                name="seven_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.seven_15_diniya')" class="text-danger">
                {{ errors.first("step9.seven_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>৮</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_name"
                v-validate="'required'"
                name="eight_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_name')" class="text-danger">
                {{ errors.first("step9.eight_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_start_date"
                v-validate="'required'"
                name="eight_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_start_date')" class="text-danger">
                {{ errors.first("step9.eight_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_end_date"
                v-validate="'required'"
                name="eight_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_end_date')" class="text-danger">
                {{ errors.first("step9.eight_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_mohila"
                v-validate="'required'"
                name="eight_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_mohila')" class="text-danger">
                {{ errors.first("step9.eight_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_nondor"
                v-validate="'required'"
                name="eight_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_nondor')" class="text-danger">
                {{ errors.first("step9.eight_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_ahota"
                v-validate="'required'"
                name="eight_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_ahota')" class="text-danger">
                {{ errors.first("step9.eight_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_pathdam"
                v-validate="'required'"
                name="eight_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_pathdam')" class="text-danger">
                {{ errors.first("step9.eight_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_7_diniya"
                v-validate="'required'"
                name="eight_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_7_diniya')" class="text-danger">
                {{ errors.first("step9.eight_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eight_15_diniya"
                v-validate="'required'"
                name="eight_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.eight_15_diniya')" class="text-danger">
                {{ errors.first("step9.eight_15_diniya") }}
            </span>
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
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_name"
                v-validate="'required'"
                name="nine_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_name')" class="text-danger">
                {{ errors.first("step9.nine_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_start_date"
                v-validate="'required'"
                name="nine_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_start_date')" class="text-danger">
                {{ errors.first("step9.nine_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_end_date"
                v-validate="'required'"
                name="nine_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_end_date')" class="text-danger">
                {{ errors.first("step9.nine_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_mohila"
                v-validate="'required'"
                name="nine_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_mohila')" class="text-danger">
                {{ errors.first("step9.nine_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_nondor"
                v-validate="'required'"
                name="nine_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_nondor')" class="text-danger">
                {{ errors.first("step9.nine_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_ahota"
                v-validate="'required'"
                name="nine_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_ahota')" class="text-danger">
                {{ errors.first("step9.nine_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_pathdam"
                v-validate="'required'"
                name="nine_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_pathdam')" class="text-danger">
                {{ errors.first("step9.nine_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_7_diniya"
                v-validate="'required'"
                name="nine_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_7_diniya')" class="text-danger">
                {{ errors.first("step9.nine_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.nine_15_diniya"
                v-validate="'required'"
                name="nine_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.nine_15_diniya')" class="text-danger">
                {{ errors.first("step9.nine_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>১০</td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_name"
                v-validate="'required'"
                name="ten_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_name')" class="text-danger">
                {{ errors.first("step9.ten_name") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_start_date"
                v-validate="'required'"
                name="ten_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_start_date')" class="text-danger">
                {{ errors.first("step9.ten_start_date") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_end_date"
                v-validate="'required'"
                name="ten_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_end_date')" class="text-danger">
                {{ errors.first("step9.ten_end_date") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_mohila"
                v-validate="'required'"
                name="ten_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_mohila')" class="text-danger">
                {{ errors.first("step9.ten_mohila") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_nondor"
                v-validate="'required'"
                name="ten_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_nondor')" class="text-danger">
                {{ errors.first("step9.ten_nondor") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_ahota"
                v-validate="'required'"
                name="ten_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_ahota')" class="text-danger">
                {{ errors.first("step9.ten_ahota") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_pathdam"
                v-validate="'required'"
                name="ten_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_pathdam')" class="text-danger">
                {{ errors.first("step9.ten_pathdam") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_7_diniya"
                v-validate="'required'"
                name="ten_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_7_diniya')" class="text-danger">
                {{ errors.first("step9.ten_7_diniya") }}
            </span></td>
            <td>                        <input
                type="text"
                class="form-control"
                v-model="step9.ten_15_diniya"
                v-validate="'required'"
                name="ten_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.ten_15_diniya')" class="text-danger">
                {{ errors.first("step9.ten_15_diniya") }}
            </span></td>
          </tr>
          <tr>
            <td>১১</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_name"
                v-validate="'required'"
                name="eleven_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_name')" class="text-danger">
                {{ errors.first("step9.eleven_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_start_date"
                v-validate="'required'"
                name="eleven_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_start_date')" class="text-danger">
                {{ errors.first("step9.eleven_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_end_date"
                v-validate="'required'"
                name="eleven_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_end_date')" class="text-danger">
                {{ errors.first("step9.eleven_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_mohila"
                v-validate="'required'"
                name="eleven_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_mohila')" class="text-danger">
                {{ errors.first("step9.eleven_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_nondor"
                v-validate="'required'"
                name="eleven_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_nondor')" class="text-danger">
                {{ errors.first("step9.eleven_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_ahota"
                v-validate="'required'"
                name="eleven_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_ahota')" class="text-danger">
                {{ errors.first("step9.eleven_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_pathdam"
                v-validate="'required'"
                name="eleven_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_pathdam')" class="text-danger">
                {{ errors.first("step9.eleven_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_7_diniya"
                v-validate="'required'"
                name="eleven_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_7_diniya')" class="text-danger">
                {{ errors.first("step9.eleven_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.eleven_15_diniya"
                v-validate="'required'"
                name="eleven_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.eleven_15_diniya')" class="text-danger">
                {{ errors.first("step9.eleven_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>১২</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_name"
                v-validate="'required'"
                name="twelve_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_name')" class="text-danger">
                {{ errors.first("step9.twelve_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_start_date"
                v-validate="'required'"
                name="twelve_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_start_date')" class="text-danger">
                {{ errors.first("step9.twelve_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_end_date"
                v-validate="'required'"
                name="twelve_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_end_date')" class="text-danger">
                {{ errors.first("step9.twelve_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_mohila"
                v-validate="'required'"
                name="twelve_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_mohila')" class="text-danger">
                {{ errors.first("step9.twelve_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_nondor"
                v-validate="'required'"
                name="twelve_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_nondor')" class="text-danger">
                {{ errors.first("step9.twelve_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_ahota"
                v-validate="'required'"
                name="twelve_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_ahota')" class="text-danger">
                {{ errors.first("step9.twelve_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_pathdam"
                v-validate="'required'"
                name="twelve_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_pathdam')" class="text-danger">
                {{ errors.first("step9.twelve_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_7_diniya"
                v-validate="'required'"
                name="twelve_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_7_diniya')" class="text-danger">
                {{ errors.first("step9.twelve_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.twelve_15_diniya"
                v-validate="'required'"
                name="twelve_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.twelve_15_diniya')" class="text-danger">
                {{ errors.first("step9.twelve_15_diniya") }}
            </span>
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
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_name"
                v-validate="'required'"
                name="thirteen_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_name')" class="text-danger">
                {{ errors.first("step9.thirteen_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_start_date"
                v-validate="'required'"
                name="thirteen_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_start_date')" class="text-danger">
                {{ errors.first("step9.thirteen_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_end_date"
                v-validate="'required'"
                name="thirteen_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_end_date')" class="text-danger">
                {{ errors.first("step9.thirteen_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_mohila"
                v-validate="'required'"
                name="thirteen_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_mohila')" class="text-danger">
                {{ errors.first("step9.thirteen_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_nondor"
                v-validate="'required'"
                name="thirteen_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_nondor')" class="text-danger">
                {{ errors.first("step9.thirteen_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_ahota"
                v-validate="'required'"
                name="thirteen_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_ahota')" class="text-danger">
                {{ errors.first("step9.thirteen_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_pathdam"
                v-validate="'required'"
                name="thirteen_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_pathdam')" class="text-danger">
                {{ errors.first("step9.thirteen_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_7_diniya"
                v-validate="'required'"
                name="thirteen_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_7_diniya')" class="text-danger">
                {{ errors.first("step9.thirteen_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.thirteen_15_diniya"
                v-validate="'required'"
                name="thirteen_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.thirteen_15_diniya')" class="text-danger">
                {{ errors.first("step9.thirteen_15_diniya") }}
            </span>
            </td>
          </tr>
          <tr>
            <td>১৪</td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_name"
                v-validate="'required'"
                name="fourteen_name"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_name')" class="text-danger">
                {{ errors.first("step9.fourteen_name") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_start_date"
                v-validate="'required'"
                name="fourteen_start_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_start_date')" class="text-danger">
                {{ errors.first("step9.fourteen_start_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_end_date"
                v-validate="'required'"
                name="fourteen_end_date"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_end_date')" class="text-danger">
                {{ errors.first("step9.fourteen_end_date") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_mohila"
                v-validate="'required'"
                name="fourteen_mohila"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_mohila')" class="text-danger">
                {{ errors.first("step9.fourteen_mohila") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_nondor"
                v-validate="'required'"
                name="fourteen_nondor"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_nondor')" class="text-danger">
                {{ errors.first("step9.fourteen_nondor") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_ahota"
                v-validate="'required'"
                name="fourteen_ahota"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_ahota')" class="text-danger">
                {{ errors.first("step9.fourteen_ahota") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_pathdam"
                v-validate="'required'"
                name="fourteen_pathdam"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_pathdam')" class="text-danger">
                {{ errors.first("step9.fourteen_pathdam") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_7_diniya"
                v-validate="'required'"
                name="fourteen_7_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_7_diniya')" class="text-danger">
                {{ errors.first("step9.fourteen_7_diniya") }}
            </span>
            </td>
            <td>
                                        <input
                type="text"
                class="form-control"
                v-model="step9.fourteen_15_diniya"
                v-validate="'required'"
                name="fourteen_15_diniya"
                placeholder=""
            />
            <span v-show="errors.has('step9.fourteen_15_diniya')" class="text-danger">
                {{ errors.first("step9.fourteen_15_diniya") }}
            </span>
            </td>
          </tr>
        </tbody>
      </table>
            <div class="d-flex flex-row-reverse">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="goPrev()"
        >
          Back
    </button>
    </div>
    <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Submit</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: 1,
      max_steps: 9,
      finalFormData: {},
      step1: {
        institute_name: "", //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: "",
      },
      step2: {
        ankul_1: "",
        ankul_2: "",
        ankul_3: "",
        mukul_1: "",
        mukul_2: "",
        mukul_3: "",
        muth_1: "",
        muth_2: "",
        muth_3: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",
        //Next Form
        one_male: "",
        one_female: "",
        one_total: "",
        two_male: "",
        two_female: "",
        two_total: "",
        three_male: "",
        three_female: "",
        three_total: "",
        four_male: "",
        four_female: "",
        four_total: "",
        five_male: "",
        five_female: "",
        five_total: "",
        muth_male: "",
        muth_female: "",
        muth_total: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: "",
      },
      step3: {
        six_male: "",
        six_female: "",
        six_total: "",
        seven_male: "",
        seven_female: "",
        seven_total: "",
        eight_male: "",
        eight_female: "",
        eight_total: "",
        muth_male_1: "",
        muth_female_1: "",
        muth_total_1: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",

        //next form

        nine_male: "",
        nine_female: "",
        nine_total: "",
        ten_male: "",
        ten_female: "",
        ten_total: "",
        muth_male_2: "",
        muth_female_2: "",
        muth_total_2: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: "",
      },
      step4: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
        fiveteen: "",
        sixteen: "",
        seventeen: "",
        eighteen: "",
      },
      step5: {
        sc_male: "",
        sc_female: "",
        sc_total: "",
        st_male: "",
        st_female: "",
        st_total: "",
        obc_male: "",
        obc_female: "",
        obc_total: "",
        muslim_male: "",
        muslim_female: "",
        muslim_total: "",
        chritian_male: "",
        chritian_female: "",
        chritian_total: "",
      },
      step6: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
      },
      step7: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
      },
      step8: {
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
        seven: "",
        eight: "",
        nine: "",
        ten: "",
        eleven: "",
        twelve: "",
        thirteen: "",
        fourteen: "",
        fiveteen: "",
        sixteen: "",
        seventeen: "",
        eighteen: "",
        nineteen: "",
        twenty: "",
      },
      step9: {
        institute_name: "",
        //row start
        //1st row
        one_name: "",
        one_start_date: "",
        one_end_date: "",
        one_mohila: "",
        one_nondor: "",
        one_ahota: "",
        one_pathdam: "",
        one_7_diniya: "",
        one_15_diniya: "",
        //2nd row
        two_name: "",
        two_start_date: "",
        two_end_date: "",
        two_mohila: "",
        two_nondor: "",
        two_ahota: "",
        two_pathdam: "",
        two_7_diniya: "",
        two_15_diniya: "",
        //3rd row
        three_name: "",
        three_start_date: "",
        three_end_date: "",
        three_mohila: "",
        three_nondor: "",
        three_ahota: "",
        three_pathdam: "",
        three_7_diniya: "",
        three_15_diniya: "",
        //4th row
        four_name: "",
        four_start_date: "",
        four_end_date: "",
        four_mohila: "",
        four_nondor: "",
        four_ahota: "",
        four_pathdam: "",
        four_7_diniya: "",
        four_15_diniya: "",
        //5th
        five_name: "",
        five_start_date: "",
        five_end_date: "",
        five_mohila: "",
        five_nondor: "",
        five_ahota: "",
        five_pathdam: "",
        five_7_diniya: "",
        five_15_diniya: "",
        //6th
        six_name: "",
        six_start_date: "",
        six_end_date: "",
        six_mohila: "",
        six_nondor: "",
        six_ahota: "",
        six_pathdam: "",
        six_7_diniya: "",
        six_15_diniya: "",
        //7th
        seven_name: "",
        seven_start_date: "",
        seven_end_date: "",
        seven_mohila: "",
        seven_nondor: "",
        seven_ahota: "",
        seven_pathdam: "",
        seven_7_diniya: "",
        seven_15_diniya: "",
        //8th
        eight_name: "",
        eight_start_date: "",
        eight_end_date: "",
        eight_mohila: "",
        eight_nondor: "",
        eight_ahota: "",
        eight_pathdam: "",
        eight_7_diniya: "",
        eight_15_diniya: "",
        //9th row
        nine_name: "",
        nine_start_date: "",
        nine_end_date: "",
        nine_mohila: "",
        nine_nondor: "",
        nine_ahota: "",
        nine_pathdam: "",
        nine_7_diniya: "",
        nine_15_diniya: "",
        //10th row
        ten_name: "",
        ten_start_date: "",
        ten_end_date: "",
        ten_mohila: "",
        ten_nondor: "",
        ten_ahota: "",
        ten_pathdam: "",
        ten_7_diniya: "",
        ten_15_diniya: "",
        //11th row
        eleven_name: "",
        eleven_start_date: "",
        eleven_end_date: "",
        eleven_mohila: "",
        eleven_nondor: "",
        eleven_ahota: "",
        eleven_pathdam: "",
        eleven_7_diniya: "",
        eleven_15_diniya: "",
        //12th row
        twelve_name: "",
        twelve_start_date: "",
        twelve_end_date: "",
        twelve_mohila: "",
        twelve_nondor: "",
        twelve_ahota: "",
        twelve_pathdam: "",
        twelve_7_diniya: "",
        twelve_15_diniya: "",
        //13th row
        thirteen_name: "",
        thirteen_start_date: "",
        thirteen_end_date: "",
        thirteen_mohila: "",
        thirteen_nondor: "",
        thirteen_ahota: "",
        thirteen_pathdam: "",
        thirteen_7_diniya: "",
        thirteen_15_diniya: "",
        //14th row
        fourteen_name: "",
        fourteen_start_date: "",
        fourteen_end_date: "",
        fourteen_mohila: "",
        fourteen_nondor: "",
        fourteen_ahota: "",
        fourteen_pathdam: "",
        fourteen_7_diniya: "",
        fourteen_15_diniya: "",
      },
      serverErrors: {
        //step 1
        institute_name: "", //id => number
        city: "",
        post_office: "",
        district: "",
        pin: "",
        date: "",
        bibhag: "",
        songkul: "",
        number: "",
        niketan: "",
        email: "",
        webiste: "",
        whatsapp: "",

        //step 2
        ankul_1: "",
        ankul_2: "",
        ankul_3: "",
        mukul_1: "",
        mukul_2: "",
        mukul_3: "",
        muth_1: "",
        muth_2: "",
        muth_3: "",
        teacher_male_1: "",
        teacher_female_1: "",
        teacher_total_1: "",
        teacher_karmachari_1: "",
        //Next Form
        one_male: "",
        one_female: "",
        one_total: "",
        two_male: "",
        two_female: "",
        two_total: "",
        three_male: "",
        three_female: "",
        three_total: "",
        four_male: "",
        four_female: "",
        four_total: "",
        five_male: "",
        five_female: "",
        five_total: "",
        muth_male: "",
        muth_female: "",
        muth_total: "",
        teacher_male_2: "",
        teacher_female_2: "",
        teacher_total_2: "",
        teacher_karmachari_2: "",
      },
      channelId: "",
    };
  },
  props: {
    channelid: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.channelId = this.channelid;
  },
  mounted() {},
  methods: {
    validateStepForm(scope) {
      //this.$validator.validateAll(scope).then((result) => {
      this.$validator.validate().then((result) => {
        if (result) {
          if (this.steps != this.max_steps) this.steps++;

          //   const el = this.$el.querySelector(".steps");
          //   console.log(el);
          //   el.scrollIntoView();
        } else {
          Vue.toasted.error("Please fill the required fields!", {
            position: "top-center",
            duration: 3000,
          });
          //   const el = this.$el.querySelector(
          //     "[data-vv-id=" + this.$validator.errors.items[1].id + "]"
          //   );
          //   el.scrollIntoView();
          //   el.focus();
        }
      });
    },
    submitForm(scope) {
      this.$validator.validate().then((result) => {
        if (result) {
          this.step1 = { step1: this.step1 };
          this.step2 = { step2: this.step2 };
          this.step3 = { step3: this.step3 };
          this.step4 = { step4: this.step4 };
          this.step5 = { step5: this.step5 };
          this.step6 = { step6: this.step6 };
          this.step7 = { step7: this.step7 };
          this.step8 = { step8: this.step8 };
          this.step9 = { step9: this.step9 };
          this.finalFormData = _.merge(this.finalFormData, this.step1);
          this.finalFormData = _.merge(this.finalFormData, this.step2);
          this.finalFormData = _.merge(this.finalFormData, this.step3);
          this.finalFormData = _.merge(this.finalFormData, this.step4);
          this.finalFormData = _.merge(this.finalFormData, this.step5);
          this.finalFormData = _.merge(this.finalFormData, this.step6);
          this.finalFormData = _.merge(this.finalFormData, this.step7);
          this.finalFormData = _.merge(this.finalFormData, this.step8);
          this.finalFormData = _.merge(this.finalFormData, this.step9);
          axios
            .post(
              "/api/supervisor/form/submit/" + this.channelId,
              this.finalFormData
            )
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Please fill the required fields!", {
                  position: "top-center",
                  duration: 3000,
                });
              }
              this.steps = 1;
            })
            .catch((errors) => {});
        }
      });
    },
    goPrev() {
      console.log("hit");
      if (this.steps > 1) this.steps = this.steps - 1;
    },
  },
};
</script>
<style scoped>
.formOne{
    width: 90px !important;
}
</style>