<template>
  <div>
    <div id="infrastrucuter" class="infraheader mb-3 p-1">
      <h3>Let's talk about Infrastructure</h3>
    </div>
    <div>
      <table class="table-responsive" v-if="infrastructureStatus === false">
        <thead class="thead-dark">
          <tr>
            <th scope="col-sm-4">No of Class</th>
            <th scope="col">Boys Toilet</th>
            <th scope="col">Girls Toilet</th>
            <th scope="col">Computer Learning</th>
            <th scope="col">Electricity</th>
            <th scope="col">Wall</th>
            <th scope="col">Library</th>
            <th scope="col">No. of books</th>
            <th scope="col">Playground</th>
            <th scope="col">Hostel</th>
            <th scope="col">Bus Services</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{infrastructure.no_of_class}}</th>
            <th>{{infrastructure.boys_toilet}}</th>
            <th>{{infrastructure.girls_toilet}}</th>
            <th>{{infrastructure.computer_learning}}</th>
            <th>{{infrastructure.electricity}}</th>
            <th>{{infrastructure.wall}}</th>
            <th>{{infrastructure.library}}</th>
            <th>{{infrastructure.no_of_books}}</th>
            <th>{{infrastructure.playground}}</th>
            <th>{{infrastructure.hostel}}</th>
            <th>{{infrastructure.bus_services}}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="infrastructure.boys_toilet === null && infrastructureStatus === true">
      <form @submit.prevent="validateForm()">
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('class') || serverErrors.no_of_class != '' }"
        >
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Total Class Room</label>
          <input
            class="col-sm-10"
            id="class"
            v-model="formData.no_of_class"
            v-validate="'required|numeric'"
            data-vv-delay="20"
            name="class"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('class') }"
            placeholder="Total number of Class room"
          />
          <i v-show="errors.has('class')" class="is-invalid"></i>

          <span v-show="errors.has('class')" class="text-danger">{{ errors.first('class') }}</span>
          <span v-show="serverErrors.class != ''" class="text-danger">{{ serverErrors.class }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('boys_toilet') || serverErrors.boys_toilet != '' }"
        >
          <label class="col-sm-2 col-form-label">Boys Toilet</label>
          <select
            v-model="formData.boys_toilet"
            class="col-sm-10 form-control"
            name="boys_toilet"
            v-validate="'required'"
          >
            <option value>Select the number of boys toilet</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
            <option value="six">Six</option>
          </select>
          <i v-show="errors.has('boys_toilet')" class="is-invalid"></i>

          <span
            class="text-danger"
            v-show="errors.has('boys_toilet')"
          >{{ errors.first('boys_toilet') }}</span>
          <span
            v-show="serverErrors.boys_toilet != ''"
            class="text-danger"
          >{{ serverErrors.boys_toilet }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('girls_toilet') || serverErrors.girls_toilet != '' }"
        >
          <label  class="col-sm-2 col-form-label">Girls Toilet</label>
          <select
            v-model="formData.girls_toilet"
            class="col-sm-10 form-control"
            name="girls_toilet"
            v-validate="'required'"
          >
            <option value>Select the number of girls toilet</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
            <option value="five">Five</option>
            <option value="six">Six</option>
          </select>
          <i v-show="errors.has('girls_toilet')" class="is-invalid"></i>

          <span
            class="text-danger"
            v-show="errors.has('girls_toilet')"
          >{{ errors.first('girls_toilet') }}</span>
          <span
            v-show="serverErrors.girls_toilet != ''"
            class="text-danger"
          >{{ serverErrors.girls_toilet }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('computer_learning') || serverErrors.computer_learning != '' }"
        >
          <label class="col-sm-3 col-form-label">Computer Learning</label>
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

          <span
            class="text-danger"
            v-show="errors.has('computer_learning')"
          >{{ errors.first('computer_learning') }}</span>
          <span
            v-show="serverErrors.computer_learning != ''"
            class="text-danger"
          >{{ serverErrors.computer_learning }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('electricity') || serverErrors.electricity != '' }"
        >
          <label class="col-sm-2 col-form-label">Electricity</label>
          <select
            v-model="formData.electricity"
            class="col-sm-10 form-control"
            name="electricity"
            v-validate="'required'"
          >
            <option value>Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <i v-show="errors.has('electricity')" class="is-invalid"></i>

          <span
            class="text-danger"
            v-show="errors.has('electricity')"
          >{{ errors.first('electricity') }}</span>
          <span
            v-show="serverErrors.electricity != ''"
            class="text-danger"
          >{{ serverErrors.electricity }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('wall') || serverErrors.wall != '' }"
        >
          <label class="col-sm-3 col-form-label">Campus Boundary</label>
          <select v-model="formData.wall" class="col-sm-9 form-control" name="wall" v-validate="'required'">
            <option value>Select your choice</option>
            <option value="no_wall">No wall</option>
            <option value="fetch">Fentch</option>
            <option value="wall">Wall boundary</option>
          </select>
          <i v-show="errors.has('wall')" class="is-invalid"></i>

          <span class="text-danger" v-show="errors.has('wall')">{{ errors.first('wall') }}</span>
          <span v-show="serverErrors.wall != ''" class="text-danger">{{ serverErrors.wall }}</span>
        </div>
        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('library') || serverErrors.library != '' }"
        >
          <label class="col-sm-3 col-form-label">Library Availability</label>
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

          <span class="text-danger" v-show="errors.has('library')">{{ errors.first('library') }}</span>
          <span v-show="serverErrors.library != ''" class="text-danger">{{ serverErrors.library }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('books') || serverErrors.no_of_books != '' }"
        >
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Total Books</label>
          <input
          class="col-sm-10"
            id="books"
            v-model="formData.no_of_books"
            v-validate="'required|numeric'"
            data-vv-delay="20"
            name="books"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('books') }"
            placeholder="Total number of books in library"
          />
          <i v-show="errors.has('class')" class="is-invalid"></i>

          <span v-show="errors.has('books')" class="text-danger">{{ errors.first('books') }}</span>
          <span
            v-show="serverErrors.no_of_books != ''"
            class="text-danger"
          >{{ serverErrors.no_of_books }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('playground') || serverErrors.playground != '' }"
        >
          <label class="col-sm-2 col-form-label">Playground</label>
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

          <span
            class="text-danger"
            v-show="errors.has('playground')"
          >{{ errors.first('playground') }}</span>
          <span
            v-show="serverErrors.playground != ''"
            class="text-danger"
          >{{ serverErrors.playground }}</span>

        </div>
                <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('hostel') || serverErrors.hostel != '' }"
        >
          <label for="exampleInputEmail1" class="col-sm-2 col-form-label">No.of Hostel</label>
          <input
          class="col-sm-10"
            v-model="formData.hostel"
            v-validate="'required|numeric'"
            data-vv-delay="20"
            name="hostel"
            type="text"
            :class="{'form-control': true, 'is-invalid': errors.has('hostel') }"
            placeholder="Tota number of hostel available"
          />
          <i v-show="errors.has('hostel')" class="is-invalid"></i>

          <span v-show="errors.has('hostel')" class="text-danger">{{ errors.first('hostel') }}</span>
          <span
            v-show="serverErrors.hostel != ''"
            class="text-danger"
          >{{ serverErrors.hostel }}</span>
        </div>

        <div
          class="form-group row mx-lg-5"
          :class="{'has-error': errors.has('bus_services') || serverErrors.bus_services != '' }"
        >
          <label class="col-sm-2 col-form-label">Bus Services</label>
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

          <span
            class="text-danger"
            v-show="errors.has('bus_services')"
          >{{ errors.first('bus_services') }}</span>
          <span
            v-show="serverErrors.bus_services != ''"
            class="text-danger"
          >{{ serverErrors.bus_services }}</span>

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
        boys_toilet: "",
        girls_toilet: "",
        computer_learning: "",
        electricity: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: '',
        bus_services: ''
      },
      serverErrors: {
        no_of_class: "",
        boys_toilet: "",
        girls_toilet: "",
        computer_learning: "",
        electricity: "",
        wall: "",
        library: "",
        no_of_books: "",
        playground: "",
        hostel: '',
        bus_services: ''
      }
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios
        .get("api/getUserData")
        .then(response => {
          if (response.status === 200) {
            this.infrastructure = response.data.user[0];
            if(this.infrastructure.boys_toilet != null)this.infrastructureStatus = false;
          }
        })
        .catch(errors => {
          console.log(errros);
        });
    },
    validateForm() {
      this.$validator.validate().then(result => {
        if (result) {
          axios
            .post("api/infra/store/" + this.infrastructure.id, this.formData)
            .then(response => {
              this.infrastructureStatus = false;
              this.infrastructure = response.data.channel;
            })
            .catch(errors => {
              if (errors.response.data.errors.no_of_class) {
                this.serverErrors.no_of_class =
                  errors.response.data.errors.no_of_class[0];
              }
              if (errors.response.data.errors.boys_toilet) {
                this.serverErrors.boys_toilet =
                  errors.response.data.errors.boys_toilet[0];
              }
              if (errors.response.data.errors.girls_toilet) {
                this.serverErrors.girls_toilet =
                  errors.response.data.errors.girls_toilet[0];
              }
              if (errors.response.data.errors.computer_learning) {
                this.serverErrors.computer_learning =
                  errors.response.data.errors.computer_learning[0];
              }
              if (errors.response.data.errors.electricity) {
                this.serverErrors.electricity =
                  errors.response.data.errors.electricity[0];
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
            });
        }
      });
    }
  }
};
</script>

<style>
</style>
