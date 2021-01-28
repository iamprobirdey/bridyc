<template>
  <div>
    <trumbowyg
      v-model="content"
      :config="config"
      class="form-control"
      name="content"
    ></trumbowyg>
  </div>
</template>

<script>
// Import this component
import Trumbowyg from "vue-trumbowyg";
// Import editor css
import "trumbowyg/dist/ui/trumbowyg.css";

export default {
  data() {
    return {
      content: null,
      config: {
        // Get options from
        // https://alex-d.github.io/Trumbowyg/documentation
        btns: [
          ["viewHTML"],
          ["undo", "redo"], // Only supported in Blink browsers
          ["formatting"],
          ["strong", "em", "del"],
          ["superscript", "subscript"],
          ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
          ["unorderedList", "orderedList"],
          ["horizontalRule"],
          ["removeformat"],
          ["fullscreen"],
        ],
      },
    };
  },
  components: {
    Trumbowyg,
  },
};
</script>
