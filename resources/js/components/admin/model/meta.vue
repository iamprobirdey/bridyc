<template>
    <div>

    </div>
</template>
<script>
export default {
  data() {
    return {
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
