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
          class="form-group col-md-4 col-sm-6"
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


      <!--  -->

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
          <input type="text" class="form-control col mr-2" placeholder=" " />
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
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>২</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৩</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td colspan="2">আধাৰভূত বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৪</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৫</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৬</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৭</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৮</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td colspan="2">বিজ্ঞান বিষয়ৰ আচৰ্য/আচাৰ্যাৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>৯</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>১০</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>১১</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>১২</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td colspan="2">আচৰ্য/আচাৰ্যাৰ আৰু অন্য কৰ্মচাৰীৰ নাম লিখিব</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>১৩</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
          <tr>
            <td>১৪</td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
            <td><input type="text" value=" " class="form-control" /></td>
          </tr>
        </tbody>
      </table>

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
              class="form-control"
              v-model="step2.teacher_male_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.ankul_1"
              v-validate="'required|number'"
              name="ankul_1"
              placeholder=""
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
              class="form-control"
              v-model="step2.mukul_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_female_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.ankul_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.mukul_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_total_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.ankul_3"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.mukul_3"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_3"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_karmachari_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_male_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.one_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.two_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.three_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.four_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.five_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_female_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.one_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.two_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.three_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.four_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.five_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_total_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.one_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.two_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.three_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.four_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.five_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.muth_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step2.teacher_karmachari_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_male_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.six_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.seven_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.eight_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_male_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_female_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.six_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.seven_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.eight_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_female_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_female_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.six_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.seven_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.eight_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_total_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_karmachari_1"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_male_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.nine_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.ten_male"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_male_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_female_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.nine_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.ten_female"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_total_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_total_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.nine_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.ten_total"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.muth_total_2"
              v-validate="'required|number'"
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
              class="form-control"
              v-model="step3.teacher_total_2"
              v-validate="'required|number'"
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
        <div class="row mt-2">
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end"
              >চাৰিওটা শাখাৰ সৰ্বমুঠ :</label
            >
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.one"
                v-validate="'required|number'"
                name="one"
                placeholder="ছাত্র "
              />
              <span v-show="errors.has('step4.one')" class="text-danger">
                {{ errors.first("step4.one") }}
              </span>
            </div>
          </div>
          <div class="form-group col-md-4">
            <input
              type="number"
              class="form-control"
              v-model="step4.two"
              v-validate="'required|number'"
              name="two"
              placeholder="ছাত্ৰী"
            />
            <span v-show="errors.has('step4.two')" class="text-danger">
              {{ errors.first("step4.two") }}
            </span>
          </div>
          <div class="form-group col-md-4">
            <input
              type="number"
              class="form-control"
              v-model="step4.three"
              v-validate="'required|number'"
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
              v-validate="'required|number'"
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
              v-validate="'required|number'"
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
              v-validate="'required|number'"
              name="six"
              placeholder="মুঠ"
            />
            <span v-show="errors.has('step4.six')" class="text-danger">
              {{ errors.first("step4.six") }}
            </span>
          </div>
        </div>
        <div class="row mt-2">
          <div class="form-group row col-md-4">
            <label class="d-flex align-items-end">মুঠ অন্য কৰ্মচাৰী :</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.seven"
                v-validate="'required|number'"
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
                v-validate="'required|number'"
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
          <div class="form-group row col-md-8">
            <label class="d-flex align-items-end"
              >প্ৰতিটো শ্ৰেণীত থকা বিশেষভাবে সক্ষম ছাত্র-ছাত্ৰীৰ মুঠ
              সংখ্যা</label
            >
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model="step4.nine"
                v-validate="'required|number'"
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
              v-validate="'required|number'"
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
              v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.twelve"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.thirteen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.fourteen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.fiveteen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.sixteen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.seventeen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step4.eighteen"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.sc_male"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.sc_female"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.sc_total"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.st_male"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.st_female"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.st_total"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.muslim_male"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.muslim_female"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.muslim_total"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.obc_male"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.obc_female"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.obc_total"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.chritian_male"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.chritian_female"
                v-validate="'required|number'"
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
                class="form-control"
                v-model="step5.chritian_total"
                v-validate="'required|number'"
                name="chritian_total"
                placeholder=""
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
    <p class="mt-2 mr-2">
        স্থানীয় সমিতিৰ পৰা পোৱা নিযুক্তিৰ তাৰিখ </p>
        <input
          type="text"
          class="form-control col-2 mr-2"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: 8,
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
      step9: {},
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
    };
  },
  mounted() {},
  methods: {
    validateStepForm(scope) {
      //this.$validator.validateAll(scope).then((result) => {
      this.$validator.validate().then((result) => {
        if (result) {
          console.log("hit");
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
    submitForm() {
      console.log("Probir");
    },
    goPrev() {
      console.log("hit");
      if (this.steps > 1) this.steps = this.steps - 1;
    },
  },
};
</script>
