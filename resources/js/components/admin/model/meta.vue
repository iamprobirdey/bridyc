<template>
  <div>
    <button class="btn btn-warning" @click="getMetaModel()">Meta</button>

    <div
      class="modal fade"
      id="metaGenerator"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <form @submit.prevent="metaGenerationForm()">
              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('metaDataError.meta_keywords') ||
                    metaDataError.meta_keywords != '',
                }"
              >
                <label>Meta Keywords</label>
                <input
                  v-model="metaData.meta_keywords"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="meta_keywords"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('meta_keywords'),
                  }"
                  placeholder="Meta Keywords"
                />
                <span
                  v-show="errors.has('meta_keywords')"
                  class="text-danger"
                  >{{ errors.first("meta_keywords") }}</span
                >
                <span
                  v-show="metaDataError.meta_keywords != ''"
                  class="help is-danger"
                  >{{ metaDataError.meta_keywords }}</span
                >
              </div>

              <div
                class="form-group"
                :class="{
                  'has-error':
                    errors.has('metaDataError.meta_descriptions') ||
                    metaDataError.meta_descriptions != '',
                }"
              >
                <label>Meta Description</label>
                <input
                  v-model="metaData.meta_descriptions"
                  v-validate="'required'"
                  data-vv-delay="20"
                  name="meta_descriptions"
                  type="text"
                  :class="{
                    'form-control': true,
                    'is-invalid': errors.has('meta_descriptions'),
                  }"
                  placeholder="Meta Description"
                />
                <span
                  v-show="errors.has('meta_descriptions')"
                  class="text-danger"
                  >{{ errors.first("meta_descriptions") }}</span
                >
                <span
                  v-show="metaDataError.meta_descriptions != ''"
                  class="help is-danger"
                  >{{ metaDataError.meta_descriptions }}</span
                >
              </div>

              <button
                type="button"
                @click="getTheSubmitId(verificationData)"
                class="btn btn-primary"
              >
                Submit
              </button>
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
      metaData: {
        meta_keywords: "",
        meta_descriptions: "",
      },
      metaDataError: {
        meta_keywords: "",
        meta_descriptions: "",
      },
      metaKeywordsDescriptionsId: "",
      verificationData: [],
    };
  },
  props: {
    verification: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.verificationData = this.verification;
  },
  mounted() {},
  methods: {
    getTheSubmitId(data) {
      //this.metaKeywordsDescriptionsId = id;
      //this.metaGenerationForm();
    },
    getMetaModel() {
      $("#metaGenerator").modal("show");
    },
    metaGenerationForm() {
      this.$validator.validate().then((result) => {
        if (result) {
          axios
            .post(
              "verification/api/keywords/description/" +
                this.verificationData.id,
              this.metaData
            )
            .then((response) => {
              if (response.data.message === true) {
                Vue.toasted.success("Meta data is created", {
                  position: "top-center",
                  duration: 5000,
                });
                this.metaData.meta_descriptions = "";
                this.metaData.meta_keywords = "";
                $("#metaGenerator").modal("hide");
              }
            })
            .catch((errors) => {
              Vue.toasted.error("Something went wrong", {
                position: "top-center",
                duration: 5000,
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
    },
  },
};
</script>
