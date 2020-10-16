<template>
  <div>
    <div id="infrastrucuter" class="infraheader mb-3 p-1">
      <h3>Let's talk about Infrastructure</h3>
    </div>
    <div>
      <table class="table-responsive" v-if="!infrastructureStatus">
        <thead class="thead-dark">
          <tr>
            <th scope="col-sm-4">No of Class</th>
            <th scope="col">Boys Hostel</th>
            <th scope="col">Girls Hostel</th>
            <th scope="col">Canteen</th>
            <th scope="col">Stationary</th>
            <th scope="col">Computer Learning</th>
            <th scope="col">Wall</th>
            <th scope="col">Library</th>
            <th scope="col">No. of books</th>
            <th scope="col">Playground</th>
            <th scope="col">Bus Services</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ infrastructure.no_of_class }}</th>
            <th>{{ infrastructure.boys_hostel }}</th>
            <th>{{ infrastructure.girls_hostel }}</th>
            <th>{{ infrastructure.canteen }}</th>
            <th>{{ infrastructure.stationary }}</th>
            <th>{{ infrastructure.computer_learning }}</th>
            <th>{{ infrastructure.wall }}</th>
            <th>{{ infrastructure.library }}</th>
            <th>{{ infrastructure.no_of_books }}</th>
            <th>{{ infrastructure.playground }}</th>
            <th>{{ infrastructure.bus_services }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="infrastructureStatus">
      <form @submit.prevent="validateForm()">
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('class') || serverErrors.no_of_class != '',
          }"
        >
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label"
            >Total Class Room:</label
          >
          <input
            class="col-sm-10"
            id="class"
            v-model="formData.no_of_class"
            v-validate="'required|numeric'"
            data-vv-delay="20"
            name="class"
            type="text"
            :class="{ 'form-control': true, 'is-invalid': errors.has('class') }"
            placeholder="Total number of Class room"
          />
          <i v-show="errors.has('class')" class="is-invalid"></i>

          <span v-show="errors.has('class')" class="text-danger">{{
            errors.first("class")
          }}</span>
          <span v-show="serverErrors.class != ''" class="text-danger">{{
            serverErrors.class
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('canteen') || serverErrors.canteen != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Canteen</label>
          <select
            v-model="formData.canteen"
            class="col-sm-10 form-control"
            name="canteen"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('canteen')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('canteen')">{{
            errors.first("canteen")
          }}</span>
          <span v-show="serverErrors.canteen != ''" class="text-danger">{{
            serverErrors.canteen
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('stationary') || serverErrors.stationary != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Stationary</label>
          <select
            v-model="formData.stationary"
            class="col-sm-10 form-control"
            name="stationary"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('stationary')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('stationary')">{{
            errors.first("stationary")
          }}</span>
          <span v-show="serverErrors.stationary != ''" class="text-danger">{{
            serverErrors.stationary
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('computer_learning') ||
              serverErrors.computer_learning != '',
          }"
        >
          <label class="col-sm-3 col-form-label">Computer Learning:</label>
          <select
            v-model="formData.computer_learning"
            class="col-sm-9 form-control"
            name="computer_learning"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('computer_learning')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('computer_learning')">{{
            errors.first("computer_learning")
          }}</span>
          <span
            v-show="serverErrors.computer_learning != ''"
            class="text-danger"
            >{{ serverErrors.computer_learning }}</span
          >
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('boys_hostel') || serverErrors.boys_hostel != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Boys Hostel</label>
          <select
            v-model="formData.boys_hostel"
            class="col-sm-10 form-control"
            name="boys_hostel"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('boys_hostel')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('boys_hostel')">{{
            errors.first("boys_hostel")
          }}</span>
          <span v-show="serverErrors.boys_hostel != ''" class="text-danger">{{
            serverErrors.boys_hostel
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('girls_hostel') || serverErrors.girls_hostel != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Girls Hostel</label>
          <select
            v-model="formData.girls_hostel"
            class="col-sm-10 form-control"
            name="girls_hostel"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('girls_hostel')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('girls_hostel')">{{
            errors.first("girls_hostel")
          }}</span>
          <span v-show="serverErrors.girls_hostel != ''" class="text-danger">{{
            serverErrors.girls_hostel
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('wall') || serverErrors.wall != '',
          }"
        >
          <label class="col-sm-3 col-form-label">Campus Boundary</label>
          <select
            v-model="formData.wall"
            class="col-sm-9 form-control"
            name="wall"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="no_wall">No wall</option>
            <option value="fence">Fence</option>
            <option value="wall">Wall boundary</option>
          </select>
          <i v-show="errors.has('wall')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('wall')">{{
            errors.first("wall")
          }}</span>
          <span v-show="serverErrors.wall != ''" class="text-danger">{{
            serverErrors.wall
          }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('library') || serverErrors.library != '',
          }"
        >
          <label class="col-sm-3 col-form-label">Library Availability:</label>
          <select
            v-model="formData.library"
            class="col-sm-9 form-control"
            name="library"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('library')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('library')">{{
            errors.first("library")
          }}</span>
          <span v-show="serverErrors.library != ''" class="text-danger">{{
            serverErrors.library
          }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error': errors.has('books') || serverErrors.no_of_books != '',
          }"
        >
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label"
            >Total Books:</label
          >
          <input
            class="col-sm-10"
            id="books"
            v-model="formData.no_of_books"
            v-validate="'required|numeric'"
            data-vv-delay="20"
            name="books"
            type="text"
            :class="{ 'form-control': true, 'is-invalid': errors.has('books') }"
            placeholder="Total number of books in library"
          />
          <i v-show="errors.has('class')" class="is-invalid"></i>

          <span v-show="errors.has('books')" class="text-danger">{{
            errors.first("books")
          }}</span>
          <span v-show="serverErrors.no_of_books != ''" class="text-danger">{{
            serverErrors.no_of_books
          }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('playground') || serverErrors.playground != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Playground:</label>
          <select
            v-model="formData.playground"
            class="col-sm-10 form-control"
            name="playground"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('playground')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('playground')">{{
            errors.first("playground")
          }}</span>
          <span v-show="serverErrors.playground != ''" class="text-danger">{{
            serverErrors.playground
          }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{
            'has-error':
              errors.has('bus_services') || serverErrors.bus_services != '',
          }"
        >
          <label class="col-sm-2 col-form-label">Bus Services:</label>
          <select
            v-model="formData.bus_services"
            class="col-sm-10 form-control"
            name="bus_services"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('bus_services')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('bus_services')">{{
            errors.first("bus_services")
          }}</span>
          <span v-show="serverErrors.bus_services != ''" class="text-danger">{{
            serverErrors.bus_services
          }}</span>
        </div>

        <button type="submit" class="btn infrabtn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infrastructure: {},
      infrastructureStatus: true,
      formData: {
        no_of_class: "",
        canteen: "",
        stationary: "",
        boys_hostel: "",
        girls_hostel: "",
        computer_learning: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: "",
        bus_services: "",
      },
      serverErrors: {
        no_of_class: "",
        canteen: "",
        stationary: "",
        boys_hostel: "",
        girls_hostel: "",
        computer_learning: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: "",
        bus_services: "",
      },
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios
        .get("/api/getUserData")
        .then((response) => {
          if (response.status === 200) {
            this.infrastructure = response.data.user;
            if (this.infrastructure.canteen != null)
              this.infrastructureStatus = false;
          }
        })
        .catch((errors) => {
          console.log(errros);
        });
    },
    validateForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post("/api/infra/store/" + this.infrastructure.id, this.formData)
            .then((response) => {
              this.infrastructureStatus = false;
              this.infrastructure = response.data.channel;
            })
            .catch((errors) => {
              if (errors.response.data.errors.no_of_class) {
                this.serverErrors.no_of_class =
                  errors.response.data.errors.no_of_class[0];
              }
              if (errors.response.data.errors.canteen) {
                this.serverErrors.canteen =
                  errors.response.data.errors.canteen[0];
              }
              if (errors.response.data.errors.stationary) {
                this.serverErrors.stationary =
                  errors.response.data.errors.stationary[0];
              }
              if (errors.response.data.errors.computer_learning) {
                this.serverErrors.computer_learning =
                  errors.response.data.errors.computer_learning[0];
              }
              if (errors.response.data.errors.boys_hostel) {
                this.serverErrors.boys_hostel =
                  errors.response.data.errors.boys_hostel[0];
              }
              if (errors.response.data.errors.wall) {
                this.serverErrors.wall = errors.response.data.errors.wall[0];
              }
              if (errors.response.data.errors.library) {
                this.serverErrors.library =
                  errors.response.data.errors.library[0];
              }
              if (errors.response.data.errors.no_of_books) {
                this.serverErrors.no_of_books =
                  errors.response.data.errors.no_of_books[0];
              }
              if (errors.response.data.errors.playground) {
                this.serverErrors.playground =
                  errors.response.data.errors.playground[0];
              }
              if (errors.response.data.errors.girls_hostel) {
                this.serverErrors.girls_hostel =
                  errors.response.data.errors.girls_hostel[0];
              }
            });
        }
      });
    },
  },
};
</script>

<style>
</style>
