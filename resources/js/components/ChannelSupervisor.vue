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
      class="form-horizontal"
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
          <label for="inputEmail4">Institute Name</label>
          <input
            type="text"
            v-model="step1.institute_name"
            v-validate="'required|max:100'"
            name="institute_name"
            class="form-control"
            placeholder="Enter your Institute Name"
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
          class="form-group col-md-3"
          :class="{
            'has-error':
              errors.has('serverErrors.city') || serverErrors.city != '',
          }"
        >
          <label for="inputCity">City</label>
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
          class="form-group col-md-3"
          :class="{
            'has-error':
              errors.has('serverErrors.post_office') ||
              serverErrors.post_office != '',
          }"
        >
          <label for="text">Post Office</label>
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
          class="form-group col-md-3"
          :class="{
            'has-error':
              errors.has('serverErrors.district') ||
              serverErrors.district != '',
          }"
        >
          <label for="inputZip">District</label>
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
          class="form-group col-md-3"
          :class="{
            'has-error':
              errors.has('serverErrors.pin') || serverErrors.pin != '',
          }"
        >
          <label>Pin</label>
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
          class="form-group col-md-4"
          :class="{
            'has-error':
              errors.has('serverErrors.date') || serverErrors.date != '',
          }"
        >
          <label for="inputCity">Date</label>
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
          class="form-group col-md-4"
          :class="{
            'has-error':
              errors.has('serverErrors.bibhag') || serverErrors.bibhag != '',
          }"
        >
          <label for="text">Bibhag</label>
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
          <label for="inputZip">Songkul</label>
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
          class="form-group col-md-6"
          :class="{
            'has-error':
              errors.has('serverErrors.number') || serverErrors.number != '',
          }"
        >
          <label for="inputCity">Mobile Number</label>
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
          class="form-group col-md-6"
          :class="{
            'has-error':
              errors.has('serverErrors.niketan') || serverErrors.niketan != '',
          }"
        >
          <label for="text">Niketan </label>
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
          class="form-group col-md-4"
          :class="{
            'has-error':
              errors.has('serverErrors.email') || serverErrors.email != '',
          }"
        >
          <label for="inputCity">Email</label>
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
          class="form-group col-md-4"
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
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
          <th>Handle</th>
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
      </table>
      <table class="table table-responsive-md table-bordered">
        <tr>
          <th colspan="3" rowspan="4">
            নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
          </th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
          <th>Handle</th>
          <th>Handle</th>
          <th>Handle</th>
          <th>Handle</th>
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
          <th rowspan="4" class="mx-auto">
            উচ্চ মাধ্যমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
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
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th><input type="text" class="form-control" value=" " /></th>
          <th>Handle</th>
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
              নিম্ন প্ৰাথমিক শাখাৰ ছাত্র-ছাত্ৰীৰ সংখ্যা, ২০২০ বৰ্ষ ।
            </th>
            <th>Firfst</th>
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
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td colspan="4">Ottos</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td><input type="text" class="form-control" value=" " /></td>
            <td rowspan="2">Otto</td>
            <td>
              <p>Male</p>
            </td>
            <td>
              <p>Female</p>
            </td>
            <td>Total</td>
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
