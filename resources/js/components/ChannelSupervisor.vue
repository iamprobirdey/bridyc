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
            v-validate="'required|max:100'"
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
          class="form-group col-md-3 col-sm-6"
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
          class="form-group col-md-3 col-sm-6"
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
          class="form-group col-md-3 col-sm-6"
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
          class="form-group col-md-3 col-sm-6"
          :class="{
            'has-error':
              errors.has('serverErrors.pin') || serverErrors.pin != '',
          }"
        >
          <label>পিন</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.pin"
            v-validate="'required'"
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
          class="form-group col-md-4 col-sm-6"
          :class="{
            'has-error':
              errors.has('serverErrors.date') || serverErrors.date != '',
          }"
        >
          <label for="inputCity">নিকেতন স্থাপনৰ তাৰিখ</label>
          <input
            type="text"
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
          class="form-group col-md-4 col-sm-6"
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
          class="form-group col-md-6 col-sm-6"
          :class="{
            'has-error':
              errors.has('serverErrors.number') || serverErrors.number != '',
          }"
        >
          <label for="inputCity">প্ৰধানাচাৰ্যৰ মোবাইল নং :</label>
          <input
            type="text"
            class="form-control"
            v-model="step1.number"
            v-validate="'required'"
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
          class="form-group col-md-6 col-sm-6"
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
          class="form-group col-md-4 col-sm-6"
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
            v-validate="'required'"
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
          class="form-group col-md-4 col-sm-6"
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
            v-validate="'required'"
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
              type="text"
              class="form-control"
              placeholder="Username"
              v-model="step1.whatsapp"
              v-validate="'required'"
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
    <p class="mt-2 mr-2"></p>
    ৫। (ক) প্রধানাচাৰ্য/ভাৰপ্ৰাপ্ত প্রধানাচাৰ্যৰ নাম </p>
    <input type="text" class="form-control col-2 mr-2" placeholder=" " />
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

<!--  -->

<div class=" d-flex justify-content-center ">
    <h5 class="mb-0 h5  ">
        বিদ্যা ভাৰতী অখিল ভাৰতীয় শিক্ষা সংস্থানৰ সংবদ্ধ
    </h5>
</div>
<div class="mt-2 d-flex justify-content-center ">
    <h2 class="mb-0  tit leCentre">
        শিশু শিক্ষা সমিতি, অসম
    </h2>
</div>
<div class="mb-2 mt-2 d-flex justify-content-center ">
    <h5 class="mb-0 h5  ">
        ৰাধাগোবিন্দ বৰুৱা পথ, প্ৰশান্ত পথ, গুৱাহাটী - ৭৮১০২৮
    </h5>
</div>
<div class="p-2 row justify-content-between">
    <div class="col-4 mt-3">
        <p class=""> আচাৰ্য/আচাৰ্যাৰ বিৱৰণ - ২০২০</p>
    </div>

    <div class="p-2 col-4 row">
        <p class="mt-2 mr-2"> নিকেতনৰ নাম</p>
        <input type="text" class="form-control col  mr-2" placeholder=" " />
    </div>
</div>
<!--  -->


<table class="table table-bordered">
    <tbody>
        <tr>
            <td>ক্ৰ: নং.</td>
            <td>প্ৰধানাচাৰ্য, শিশু বাটিকা প্ৰমুখ আৰু বালিকা শিক্ষা প্ৰমুখৰ নাম ক্ৰমে লিখিব ।</td>
            <td>জন্মৰ তাৰিখ আৰু ব্লাড গ্ৰুপ</td>
            <td>নিকেতনৰ যোগদানৰ তাৰিখ আৰু মোবাইল নং </td>
            <td>ই-মেইল আই ডি</td>
            <td>হুৱাটছআপ নম্বৰ</td>
            <td>শিক্ষাগত অৰ্হতা </td>
            <td>পাঠদান কৰা মূল বিষয় </td>
            <td>৭ দিনীয়া</td>
            <td>১৫ দিনীয়া</td>
        </tr>
        <tr>
            <td>১</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ২</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ৩</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td colspan="2">আধাৰভূত বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ৪</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ৫</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ৬</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ৭ </td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td>৮</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td colspan="2">বিজ্ঞান বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td>৯ </td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td>১০</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ১১</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ১২</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td colspan="2">আচৰ্য/আচাৰ্যাৰ আৰু অন্য কৰ্মচাৰীৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td>১৩</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
        <tr>
            <td> ১৪</td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
            <td><input type="text" value=" " class="form-control"></td>
        </tr>
    </tbody>
</table>

      <!--
       pdf 2nd & 3rd End start
     -->

      <div class="d-flex flex-row-reverse">
        <button
          :disabled="steps === 1"
          type="submit"
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
      @submit.prevent="validateStepForm('step1')"
      data-vv-scope="step1"
      v-if="steps === 2"
    >
      <h1>Step 2</h1>
      <table class="table table-responsive-md table-bordered">
        <tr>
          <th rowspan="4" class="mx-auto">
            শিশু বাটিকাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা - ২০২০ বৰ্ষ ।
          </th>
          <th>শিশু বাটিকা</th>
          <th> অংকুৰ </th>
          <th>মুকুল </th>
          <th>মুঠ </th>
          <th> আচাৰ্য</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>আচাৰ্যা</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>অন্য কৰ্মচাৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
      </table>
      <table class="table table-responsive-md table-bordered">
        <tr>
          <th colspan="3" rowspan="4">
            নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
          </th>
          <th>শ্ৰেণী</th>
          <th> ১ম</th>
          <th> ২য় </th>
          <th>৩য়</th>
          <th>৪ৰ্থ </th>
          <th>৫ম</th>
          <th> মুঠ</th>
          <th>আচাৰ্য</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>আচাৰ্যা</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>অন্য কৰ্মচাৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
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
      @submit.prevent="validateStepForm('step1')"
      data-vv-scope="step1"
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
          <th></th>
        </tr>
        <tr>
          <th>ছাত্র</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>আচাৰ্যা</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th> মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th> মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>অন্য কৰ্মচাৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
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
          <th></th>
        </tr>
        <tr>
          <th> ছাত্র </th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>আচাৰ্যা</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th>ছাত্ৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th> মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
        <tr>
          <th> মুঠ</th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>অন্য কৰ্মচাৰী</th>
          <th><input type="text" class="form-control" value=" " /></th>
        </tr>
      </table>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-secondary">Back</button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="validateStepForm('step1')"
      data-vv-scope="step1"
      v-if="steps === 4"
    >
      <h1>Step 4</h1>
      <div class="table-bordered">
        <div class="row mt-2">
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end"
              >চাৰিওটা শাখাৰ সৰ্বমুঠ :</label
            >
            <div class="col">
              <input type="text" class="form-control" placeholder="ছাত্র " />
            </div>
          </div>
          <div class="form-group col-md-4">
            <input type="text" class="form-control" placeholder="ছাত্ৰী" />
          </div>
          <div class="form-group col-md-4">
            <input type="text" class="form-control" placeholder="মুঠ" />
          </div>
        </div>
        <!--  form 2 -->
        <div class="d-flex justify-content-end">
          <div class="form-group col-md-3">
            <input type="text" class="form-control" placeholder="আচাৰ্য" />
          </div>
          <div class="form-group col-md-3">
            <input type="text" class="form-control" placeholder="আচৰ্যা" />
          </div>
          <div class="form-group col-md-3">
            <input type="text" class="form-control" placeholder="মুঠ" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end">মুঠ অন্য কৰ্মচাৰী :</label>
            <div class="col">
              <input type="text" class="form-control" placeholder=" " />
            </div>
          </div>
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end">প্ৰতিটো শ্ৰেণীত ..:</label>
            <div class="col">
              <input type="text" class="form-control" placeholder=" " />
            </div>
          </div>
        </div>
        <div class="mt-2 row">
          <div class="form-group row col-md-8">
            <label class="d-flex align-items-end"
              >প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ
              সংখ্যা</label
            >
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="ছাত্র"
              />
            </div>
          </div>
          <div class="form-group col-md-2">
            <input type="text" class="form-control" placeholder="ছাত্ৰী" />
          </div>
          <div class="form-group col-md-2">
            <input type="text" class="form-control" placeholder="মুঠ" />
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
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-secondary">Back</button>
      </div>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-primary">Next</button>
      </div>
    </form>

    <form
      class="form-horizontal"
      @submit.prevent="submitForm('step1')"
      data-vv-scope="step1"
      v-if="steps === 5"
    >
      <h1>Step 5</h1>
      <table class="table table-bordered table-responsive">
        <tbody>
          <tr>
            <td>মুঠ ছাত্র-ছাত্ৰীৰ ভিতৰত কিমান জন  </td>
            <td>ছাত্র </td>
            <td>ছাত্ৰী</td>
            <td>মুঠ</td>
            <td colspan="4">অন্য ধর্মাবলম্বী ছাত্র-ছাত্ৰী কিমান জন</td>
          </tr>
          <tr>
            <td>(ক) অনুসূচীত জাতি (SC)</td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
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
            <td>(খ) অনুসূচীত জনজাতি (ST) 
                </td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
          </tr>
          <tr>
            <td>(গ) অন্যান্য পিছপৰা জাতি (OBC)</td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td>(খ) খ্ৰীষ্টান</td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row-reverse">
        <button type="submit" class="btn btn-outline-secondary">Back</button>
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
      max_steps: 5,
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
      },
    };
  },
  mounted() {},
  methods: {
    validateStepForm(scope) {
      //this.$validator.validateAll(scope).then((result) => {
      this.$validator.validate().then((result) => {
        if (result) {
          console.log("hit");
          if (this.steps != this.max_steps) this.steps = this.steps + 1;

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
    submitForm() {
      console.log("Probir");
    },
    goPrev() {
      if (this.steps > 1) this.steps = this.steps - 1;
    },
  },
};
</script>
