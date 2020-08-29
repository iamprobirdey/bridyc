<template>
  <div>
    <table class="table responsive">
      <thead>
        <tr>
          <th scope="col">Block</th>
          <th scope="col">Status</th>
          <th scope="col">Slug Generator </th>
          <th scope="col">Keywords Generator</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">State</th>
          <th scope="col">District</th>
          <th scope="col">City</th>
          <th scope="col">Medium</th>
          <th scope="col">Udise</th>
          <th scope="col">Title</th>
          <th scope="col">Founded</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(verification,index) in usersData" :key="verification.id">
          <td>
            <button
              class="btn btn-primary"
              @click="blockTheUser(verification.user_id ,verification.id,index)"
              v-if="verification.status === 1 || verification.status === 2"
            >Block</button>
            <button
              class="btn btn-primary"
              @click="offTheStatus(verification.user_id ,verification.id,index)"
              v-if="verification.status === 3"
            >unBlock</button>
          </td>
          <td>
            <button
              v-if="verification.status === 2"
              class="btn btn-success"
              @click="offTheStatus(verification.user_id , verification.id,index)"
            >ON</button>
            <button
              v-if="verification.status === 1"
              class="btn btn-danger"
              @click="onTheStatus(verification.user_id ,verification.id,index)"
            >OFF</button>
            <span class="text-danger" v-if="verification.status === 3">user is block</span>
          </td>
          <td>
              <button
                    class="btn btn-info"
                    :disabled="verification.slug_creation === 'created' ? true : false"
                    @click="slugGenetor(verification.title,verification.state.name,verification.user.id,index)">
                    URl Gen.
              </button>
          </td>
          <td>
              <button class="btn btn-warning" @click="getMetaModel(verification)">
                Meta
              </button>
          </td>
          <td>{{verification.user.name}}</td>
          <td>{{verification.user.email}}</td>
          <td>{{verification.state.name}}</td>
          <td>{{verification.district.name}}</td>
          <td>{{verification.village.name}}</td>
          <td>{{verification.language.name}}</td>
          <td>{{verification.udise}}</td>
          <td>{{verification.title}}</td>
          <td>{{verification.founded}}</td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="slugGenerator" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <form @submit.prevent="slugGenerated()">
                    <div
                        class="form-group"
                        :class="{'has-error':errors.has('slugError.slug') || slugError.slug != ''}"
                    >
                        <label>Url for Channel</label>
                            <input
                            id="slug"
                            v-model="slugData.slug"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="slug"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('slug')}"
                            placeholder="Url Generator"
                            />
                        <span v-show="errors.has('slug')" class="text-danger">{{errors.first("slug")}}</span>
                        <span v-show="slugError.slug != ''" class="help is-danger">{{slugError.slug}}</span>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    <div class="modal fade" id="metaGenerator" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <form @submit.prevent="metaGenerationForm()">
                    <div
                        class="form-group"
                        :class="{'has-error':errors.has('metaDataError.meta_keywords') || metaDataError.meta_keywords != ''}"
                    >
                        <label>Meta Keywords</label>
                            <input
                            v-model="metaData.meta_keywords"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="meta_keywords"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('meta_keywords')}"
                            placeholder="Meta Keywords"
                            />
                        <span v-show="errors.has('meta_keywords')" class="text-danger">{{errors.first("meta_keywords")}}</span>
                        <span v-show="metaDataError.meta_keywords != ''" class="help is-danger">{{metaDataError.meta_keywords}}</span>
                    </div>

                     <div
                        class="form-group"
                        :class="{'has-error':errors.has('metaDataError.meta_descriptions') || metaDataError.meta_descriptions != ''}"
                    >
                        <label>Meta Description</label>
                            <input
                            v-model="metaData.meta_descriptions"
                            v-validate="'required'"
                            data-vv-delay="20"
                            name="meta_descriptions"
                            type="text"
                            :class="{'form-control': true,'is-invalid': errors.has('meta_descriptions')}"
                            placeholder="Meta Description"
                            />
                        <span v-show="errors.has('meta_descriptions')" class="text-danger">{{errors.first("meta_descriptions")}}</span>
                        <span v-show="metaDataError.meta_descriptions != ''" class="help is-danger">{{metaDataError.meta_descriptions}}</span>
                    </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: [],
      slugData:{
          slug: ''
      },
      slugError:{
          slug: ''
      },
      slugUserId: '',
      slugIndex: '',
      metaData : {
          meta_keywords : '',
          meta_descriptions : ''
      },
      metaDataError : {
          meta_keywords : '',
          meta_descriptions : ''
      },
      metaKeywordsDescriptionsId : ''
    };
  },
  props: {
    users: {
      type: Array,
      default: null
    }
  },
  mounted() {
      if(this.users != null) this.usersData = this.users;
  },
  methods: {
    offTheStatus(userId, Id, index) {
      axios
        .get("verification/api/updatingforoff/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 1;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    },
    onTheStatus(userId, Id, index) {
      axios
        .get("verification/api/updatingforon/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 2;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    },
    blockTheUser(userId, Id, index) {
      axios
        .get("verification/api/updatingforblock/" + userId + "/" + Id)
        .then(response => {
          if (response.status === 200 && response.data.msg === true) {
            this.usersData[index].status = 3;
          }
        })
        .catch(errors => {
          Vue.toasted.error("Something went wrong", {
            position: "top-center",
            duration: 5000
          });
        });
    },
    slugGenetor(title,name,userId,index){
        let slug = title+ '-' +name;
        this.slugUserId = userId;
        this.slugData.slug = this.slugify(slug);
        this.slugIndex = index;
        $('#slugGenerator').modal('show');
    },
    slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')

        return string.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    },
    slugGenerated(){
        this.$validator.validate().then(result => {
            if (result) {
            axios
                .post('verification/api/channel-slug/'+this.slugUserId, this.slugData)
                .then(response => {
                if (response.data.msg === true) {
                    Vue.toasted.success("Slug is created", {
                    position: "top-center",
                    duration: 5000
                    });
                    $('#slugGenerator').modal('hide');
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.slug) {
                        this.slugError.slug =
                        errors.response.data.errors.slug[0];
                    }
                });
            }
        });
    },

    getMetaModel(verification){
        this.metaKeywordsDescriptionsId = '';
        this.metaKeywordsDescriptionsId = verification.id;
        if(verification.meta_keywords != undefined) {
            this .metaData.meta_keywords = this.verification.meta_keywords;
        }
        if(verification.meta_descriptions != undefined) {
            this .metaData.meta_descriptions = this.verification.meta_descriptions;
        }
        $('#metaGenerator').modal('show');
    },
    metaGenerationForm(){
        this.$validator.validate().then(result => {
            if (result) {
                console.log('called');
            axios
                .post('verification/api/keywords/description/'+this.metaKeywordsDescriptionsId,this.metaData)
                .then(response => {
                if (response.data.msg === true) {
                    Vue.toasted.success("Meta data is created", {
                    position: "top-center",
                    duration: 5000
                    });
                    $('#slugGenerator').modal('hide');
                }
                })
                .catch(errors => {
                     Vue.toasted.error("Something went wrong", {
                        position: "top-center",
                        duration: 5000
                    });
                    if (errors.response.data.errors.meta_keywords) {
                        this.metaDataError.meta_keywords =
                        errors.response.data.errors.meta_keywords[0];
                    }
                    if (errors.response.data.errors.meta_descriptions) {
                        this.metaDataError.meta_descriptions =
                        errors.response.data.errors.meta_descriptions[0];
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
