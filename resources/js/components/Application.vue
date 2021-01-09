<template>
  <div>
    <h1>Application</h1>
    <form @submit.prevent="validateForm()">
      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('new_or_present') || serverErrors.new_or_present != '',
        }"
      >
        <label>Bus Facility</label>

        <select
          v-model="formData.new_or_present"
          class="form-control"
          name="new_or_present"
          v-validate="'required'"
        >
          <option value>Select your choice</option>
          <option value="new_adminssion">New Admission</option>
          <option value="present">Present Re-Admission</option>
        </select>
        <i v-show="errors.has('new_or_present')" class="is-invalid"></i>
        <span v-show="errors.has('new_or_present')" class="text-danger">
          {{ errors.first("new_or_present") }}</span
        >
        <span v-show="serverErrors.new_or_present != ''" class="text-danger">
          {{ serverErrors.new_or_present }}
        </span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('name') || serverErrors.name != '',
        }"
      >
        <label>Student Name</label>
        <input
          id="name"
          v-on:focus="serverErrors.name = ''"
          v-model="formData.name"
          v-validate="'required'"
          data-vv-delay="20"
          name="name"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('name'),
          }"
          placeholder="Student Name"
        />
        <i v-show="errors.has('name')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('name')">{{
          errors.first("name")
        }}</span>
        <span v-show="serverErrors.name != ''" class="text-danger">{{
          serverErrors.name
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('date') || serverErrors.date != '',
        }"
      >
        <label>Date of Birth</label>
        <input
          id="date"
          v-on:focus="serverErrors.date = ''"
          v-model="formData.date"
          v-validate="'required'"
          data-vv-delay="20"
          name="date"
          type="date"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('date'),
          }"
          placeholder="date"
        />
        <i v-show="errors.has('date')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('date')">{{
          errors.first("date")
        }}</span>
        <span v-show="serverErrors.date != ''" class="text-danger">{{
          serverErrors.date
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('age') || serverErrors.age != '',
        }"
      >
        <label>Student Age</label>
        <input
          id="age"
          v-on:focus="serverErrors.age = ''"
          v-model="formData.age"
          v-validate="'required|numeric'"
          data-vv-delay="20"
          name="age"
          type="number"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('age'),
          }"
          placeholder="Student Age"
        />
        <i v-show="errors.has('age')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('age')">{{
          errors.first("age")
        }}</span>
        <span v-show="serverErrors.age != ''" class="text-danger">{{
          serverErrors.age
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('blood') || serverErrors.blood != '',
        }"
      >
        <label>Student Blood Group</label>
        <input
          id="blood"
          v-on:focus="serverErrors.blood = ''"
          v-model="formData.blood"
          v-validate="'required'"
          data-vv-delay="20"
          name="blood"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('blood'),
          }"
          placeholder="Student Name"
        />
        <i v-show="errors.has('blood')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('blood')">{{
          errors.first("blood")
        }}</span>
        <span v-show="serverErrors.blood != ''" class="text-danger">{{
          serverErrors.blood
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('father_name') || serverErrors.father_name != '',
        }"
      >
        <label>Father Name</label>
        <input
          id="father_name"
          v-on:focus="serverErrors.father_name = ''"
          v-model="formData.father_name"
          v-validate="'required'"
          data-vv-delay="20"
          name="father_name"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('father_name'),
          }"
          placeholder="Father Name"
        />
        <i v-show="errors.has('father_name')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('father_name')">{{
          errors.first("father_name")
        }}</span>
        <span v-show="serverErrors.father_name != ''" class="text-danger">{{
          serverErrors.father_name
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('father_occupation') ||
            serverErrors.father_occupation != '',
        }"
      >
        <label>Father Occupation</label>
        <input
          id="father_occupation"
          v-on:focus="serverErrors.father_occupation = ''"
          v-model="formData.father_occupation"
          v-validate="'required'"
          data-vv-delay="20"
          name="father_occupation"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('father_occupation'),
          }"
          placeholder="Father Occupation"
        />
        <i v-show="errors.has('father_occupation')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('father_occupation')">{{
          errors.first("father_occupation")
        }}</span>
        <span
          v-show="serverErrors.father_occupation != ''"
          class="text-danger"
          >{{ serverErrors.father_occupation }}</span
        >
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('father_phone') || serverErrors.father_phone != '',
        }"
      >
        <label>Father Phone Number</label>
        <input
          id="father_phone"
          v-on:focus="serverErrors.father_phone = ''"
          v-model="formData.father_phone"
          v-validate="'required|numeric|min:10|max:10'"
          data-vv-delay="20"
          name="father_phone"
          type="number"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('father_phone'),
          }"
          placeholder="Father Phone Number"
        />
        <i v-show="errors.has('father_phone')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('father_phone')">{{
          errors.first("father_phone")
        }}</span>
        <span v-show="serverErrors.father_phone != ''" class="text-danger">{{
          serverErrors.father_phone
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('mother_name') || serverErrors.mother_name != '',
        }"
      >
        <label>Mother Name</label>
        <input
          id="mother_name"
          v-on:focus="serverErrors.mother_name = ''"
          v-model="formData.mother_name"
          v-validate="'required'"
          data-vv-delay="20"
          name="mother_name"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('mother_name'),
          }"
          placeholder="Mother Name"
        />
        <i v-show="errors.has('mother_name')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('mother_name')">{{
          errors.first("mother_name")
        }}</span>
        <span v-show="serverErrors.mother_name != ''" class="text-danger">{{
          serverErrors.mother_name
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('mother_occupation') ||
            serverErrors.mother_occupation != '',
        }"
      >
        <label>Mother Occupation</label>
        <input
          id="mother_occupation"
          v-on:focus="serverErrors.mother_occupation = ''"
          v-model="formData.mother_occupation"
          v-validate="'required'"
          data-vv-delay="20"
          name="mother_occupation"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('mother_occupation'),
          }"
          placeholder="Mother Occupation"
        />
        <i v-show="errors.has('mother_occupation')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('mother_occupation')">{{
          errors.first("mother_occupation")
        }}</span>
        <span
          v-show="serverErrors.mother_occupation != ''"
          class="text-danger"
          >{{ serverErrors.mother_occupation }}</span
        >
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('mother_phone') || serverErrors.mother_phone != '',
        }"
      >
        <label>Mother Phone Number</label>
        <input
          id="mother_phone"
          v-on:focus="serverErrors.mother_phone = ''"
          v-model="formData.mother_phone"
          v-validate="'required|numeric|min:10|max:10'"
          data-vv-delay="20"
          name="mother_phone"
          type="number"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('mother_phone'),
          }"
          placeholder="Mother Phone Number"
        />
        <i v-show="errors.has('mother_phone')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('mother_phone')">{{
          errors.first("mother_phone")
        }}</span>
        <span v-show="serverErrors.mother_phone != ''" class="text-danger">{{
          serverErrors.mother_phone
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('permanent_address') ||
            serverErrors.permanent_address != '',
        }"
      >
        <label>Permanent Address</label>
        <input
          id="permanent_address"
          v-on:focus="serverErrors.permanent_address = ''"
          v-model="formData.permanent_address"
          v-validate="'required'"
          data-vv-delay="20"
          name="permanent_address"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('permanent_address'),
          }"
          placeholder="Permanent Address"
        />
        <i v-show="errors.has('permanent_address')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('permanent_address')">{{
          errors.first("permanent_address")
        }}</span>
        <span
          v-show="serverErrors.permanent_address != ''"
          class="text-danger"
          >{{ serverErrors.permanent_address }}</span
        >
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('permanent_address') ||
            serverErrors.permanent_address != '',
        }"
      >
        <label>Permanent Address</label>
        <input
          id="permanent_address"
          v-on:focus="serverErrors.permanent_address = ''"
          v-model="formData.permanent_address"
          v-validate="'required'"
          data-vv-delay="20"
          name="permanent_address"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('permanent_address'),
          }"
          placeholder="Permanent Address"
        />
        <i v-show="errors.has('permanent_address')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('permanent_address')">{{
          errors.first("permanent_address")
        }}</span>
        <span
          v-show="serverErrors.permanent_address != ''"
          class="text-danger"
          >{{ serverErrors.permanent_address }}</span
        >
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('present_address') || serverErrors.present_address != '',
        }"
      >
        <label>Present Address</label>
        <input
          id="present_address"
          v-on:focus="serverErrors.present_address = ''"
          v-model="formData.present_address"
          v-validate="'required'"
          data-vv-delay="20"
          name="present_address"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('present_address'),
          }"
          placeholder="Present Address"
        />
        <i v-show="errors.has('present_address')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('present_address')">{{
          errors.first("present_address")
        }}</span>
        <span v-show="serverErrors.present_address != ''" class="text-danger">{{
          serverErrors.present_address
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('mother_tongue') || serverErrors.mother_tongue != '',
        }"
      >
        <label>Mother Tongue</label>
        <input
          id="mother_tongue"
          v-on:focus="serverErrors.mother_tongue = ''"
          v-model="formData.mother_tongue"
          v-validate="'required'"
          data-vv-delay="20"
          name="mother_tongue"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('mother_tongue'),
          }"
          placeholder="Mother Tongue"
        />
        <i v-show="errors.has('mother_tongue')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('mother_tongue')">{{
          errors.first("mother_tongue")
        }}</span>
        <span v-show="serverErrors.mother_tongue != ''" class="text-danger">{{
          serverErrors.mother_tongue
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('community') || serverErrors.community != '',
        }"
      >
        <label>Community</label>
        <input
          id="community"
          v-on:focus="serverErrors.community = ''"
          v-model="formData.community"
          v-validate="'required'"
          data-vv-delay="20"
          name="community"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('community'),
          }"
          placeholder="Community"
        />
        <i v-show="errors.has('community')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('community')">{{
          errors.first("community")
        }}</span>
        <span v-show="serverErrors.community != ''" class="text-danger">{{
          serverErrors.community
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('community') || serverErrors.community != '',
        }"
      >
        <label>Community</label>
        <input
          id="community"
          v-on:focus="serverErrors.community = ''"
          v-model="formData.community"
          v-validate="'required'"
          data-vv-delay="20"
          name="community"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('community'),
          }"
          placeholder="Community"
        />
        <i v-show="errors.has('community')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('community')">{{
          errors.first("community")
        }}</span>
        <span v-show="serverErrors.community != ''" class="text-danger">{{
          serverErrors.community
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('religion') || serverErrors.religion != '',
        }"
      >
        <label>Religoin</label>
        <input
          id="religion"
          v-on:focus="serverErrors.religion = ''"
          v-model="formData.religion"
          v-validate="'required'"
          data-vv-delay="20"
          name="religion"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('religion'),
          }"
          placeholder="Religoin"
        />
        <i v-show="errors.has('religion')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('religion')">{{
          errors.first("religion")
        }}</span>
        <span v-show="serverErrors.religion != ''" class="text-danger">{{
          serverErrors.religion
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error': errors.has('religion') || serverErrors.religion != '',
        }"
      >
        <label>Religion</label>
        <input
          id="religion"
          v-on:focus="serverErrors.religion = ''"
          v-model="formData.religion"
          v-validate="'required'"
          data-vv-delay="20"
          name="religion"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('religion'),
          }"
          placeholder="Religion"
        />
        <i v-show="errors.has('religion')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('religion')">{{
          errors.first("religion")
        }}</span>
        <span v-show="serverErrors.religion != ''" class="text-danger">{{
          serverErrors.religion
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('social_category') || serverErrors.social_category != '',
        }"
      >
        <label>Social Category</label>
        <input
          id="social_category"
          v-on:focus="serverErrors.social_category = ''"
          v-model="formData.social_category"
          v-validate="'required'"
          data-vv-delay="20"
          name="social_category"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('social_category'),
          }"
          placeholder="Social Category"
        />
        <i v-show="errors.has('social_category')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('social_category')">{{
          errors.first("social_category")
        }}</span>
        <span v-show="serverErrors.social_category != ''" class="text-danger">{{
          serverErrors.social_category
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('nationality') || serverErrors.nationality != '',
        }"
      >
        <label>Nationality</label>
        <input
          id="nationality"
          v-on:focus="serverErrors.nationality = ''"
          v-model="formData.nationality"
          v-validate="'required'"
          data-vv-delay="20"
          name="nationality"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('nationality'),
          }"
          placeholder="Nationality"
        />
        <i v-show="errors.has('nationality')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('nationality')">{{
          errors.first("nationality")
        }}</span>
        <span v-show="serverErrors.nationality != ''" class="text-danger">{{
          serverErrors.nationality
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('previous_school') || serverErrors.previous_school != '',
        }"
      >
        <label>Previous School</label>
        <input
          id="previous_school"
          v-on:focus="serverErrors.previous_school = ''"
          v-model="formData.previous_school"
          v-validate="'required'"
          data-vv-delay="20"
          name="previous_school"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('previous_school'),
          }"
          placeholder="Previous School"
        />
        <i v-show="errors.has('previous_school')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('previous_school')">{{
          errors.first("previous_school")
        }}</span>
        <span v-show="serverErrors.previous_school != ''" class="text-danger">{{
          serverErrors.previous_school
        }}</span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('bus_facility') || serverErrors.bus_facility != '',
        }"
      >
        <label>Bus Facility</label>

        <select
          v-model="formData.bus_facility"
          class="form-control"
          name="bus_facility"
          v-validate="'required'"
        >
          <option value>Select your choice</option>
          <option value="yes">Bus Service Needed</option>
          <option value="no">Not Needed</option>
        </select>
        <i v-show="errors.has('bus_facility')" class="is-invalid"></i>
        <span v-show="errors.has('bus_facility')" class="text-danger">
          {{ errors.first("bus_facility") }}</span
        >
        <span v-show="serverErrors.bus_facility != ''" class="text-danger">
          {{ serverErrors.bus_facility }}
        </span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('hostel_facility') || serverErrors.hostel_facility != '',
        }"
      >
        <label>Bus Facility</label>

        <select
          v-model="formData.hostel_facility"
          class="form-control"
          name="hostel_facility"
          v-validate="'required'"
        >
          <option value>Select your choice</option>
          <option value="yes">Hostel Service Needed</option>
          <option value="no">Not Needed</option>
        </select>
        <i v-show="errors.has('hostel_facility')" class="is-invalid"></i>
        <span v-show="errors.has('hostel_facility')" class="text-danger">
          {{ errors.first("hostel_facility") }}</span
        >
        <span v-show="serverErrors.hostel_facility != ''" class="text-danger">
          {{ serverErrors.hostel_facility }}
        </span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('physical_handicapped') ||
            serverErrors.physical_handicapped != '',
        }"
      >
        <label>Bus Facility</label>

        <select
          v-model="formData.physical_handicapped"
          class="form-control"
          name="physical_handicapped"
          v-validate="'required'"
        >
          <option value>Select your choice</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <i v-show="errors.has('physical_handicapped')" class="is-invalid"></i>
        <span v-show="errors.has('physical_handicapped')" class="text-danger">
          {{ errors.first("physical_handicapped") }}</span
        >
        <span
          v-show="serverErrors.physical_handicapped != ''"
          class="text-danger"
        >
          {{ serverErrors.physical_handicapped }}
        </span>
      </div>

      <div
        class="form-group"
        :class="{
          'has-error':
            errors.has('previous_percentage') ||
            serverErrors.previous_percentage != '',
        }"
      >
        <label>Previous Percentage</label>
        <input
          id="previous_percentage"
          v-on:focus="serverErrors.previous_percentage = ''"
          v-model="formData.previous_percentage"
          v-validate="'required'"
          data-vv-delay="20"
          name="previous_percentage"
          type="text"
          :class="{
            'form-control': true,
            'is-invalid': errors.has('previous_percentage'),
          }"
          placeholder="Previous Percentage"
        />
        <i v-show="errors.has('previous_percentage')" class="is-invalid"></i>

        <span class="text-danger" v-show="errors.has('previous_percentage')">{{
          errors.first("previous_percentage")
        }}</span>
        <span
          v-show="serverErrors.previous_percentage != ''"
          class="text-danger"
          >{{ serverErrors.previous_percentage }}</span
        >
      </div>

      <div v-if="wait" class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <button v-if="wait === false" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wait: false,
      formData: {
        new_or_present: "",
        name: "",
        date: "",
        age: "",
        gender: "",
        blood: "",
        father_name: "",
        father_occupation: "",
        father_phone: "",
        mother_name: "",
        mother_occupation: "",
        mother_phone: "",
        permanent_address: "",
        present_address: "",
        mother_tongue: "",
        community: "",
        religion: "",
        social_category: "",
        nationality: "",
        previous_school: "",
        bus_facility: "",
        hostel_facility: "",
        previous_percentage: "",
        class_sought_of: "",
      },
      serverErrors: {
        new_or_present: "",
        name: "",
        age: "",
        date: "",
        gender: "",
        blood: "",
        father_name: "",
        father_occupation: "",
        father_phone: "",
        mother_name: "",
        mother_occupation: "",
        mother_phone: "",
        permanent_address: "",
        present_address: "",
        mother_tongue: "",
        community: "",
        religion: "",
        social_category: "",
        nationality: "",
        previous_school: "",
        bus_facility: "",
        hostel_facility: "",
        previous_percentage: "",
        class_sought_of: "",
      },
    };
  },
  mounted() {
    console.log("Application");
  },
  methods: {},
};
</script>
