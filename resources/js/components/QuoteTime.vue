<template>
  <div>
    <div class="datetime mb-2">
      <h1 :style="{color : colorWhite}">{{ timeData.time }}</h1>
      <h5 :style="{color : colorWhite}">{{ timeData.date }}</h5>
    </div>
    
    
      <div class="quote" :style="{backgroundColor: colorMatch}">
        <h3 :style="{color : colorWhite}">{{ quoteName }}</h3>
        <span :style="{color : colorWhite}">~{{ quoteAuthor }}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vuejs",
      colors: [
        "#577399",
        "#495867",
        "#FE5F55",
        "#8E936D",
        "#001011",
        "#F7934C",
        "#C792DF",
        "#3A3042",
        "#FF784F",
        "#0C0F0A",
        "#FF8360",
        "#7A28CB",
        "#2B2D42",
        "#3185FC",
        "#E84855",
        "#4C2B36",
        "#8D6346",
        "#3F334D",
        "#574B60",
        "#06BCC1",
        "#12263A",
        "#841C26",
        "#BA274A",
        "#2191FB",
        "#9792E3"
      ],
      colorWhite: "#fff",
      colorMatch: "",
      quoteData: {},
      quoteName: "",
      quoteAuthor: "",
      timeData: {
        time: "",
        date: ""
      }
    };
  },
  props: {
    date: {
      type: String,
      default: null
    }
  },
  mounted() {
    this.getQuoteData();
    this.timeData.date = this.date;
  },
  methods: {
    getQuoteData() {
      axios
        .get("https://type.fit/api/quotes")
        .then(response => {
          this.quoteData = response.data;
          this.colorMatch = this.colors[_.random(0, 25)];
          this.quoteName = this.quoteData[_.random(0, 1600)].text;
          this.quoteAuthor = this.quoteData[_.random(0, 1600)].author;
        })
        .catch(error => {
          this.getQuoteData();
          console.log(error);
        });
    },
    hi() {
      console.log();
    }
  }
};
</script>

<style scoped>
</style>
