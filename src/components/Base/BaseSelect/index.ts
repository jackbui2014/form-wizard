import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseSelect",
  components: {},
  props: {
    selected: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      baseSelected: this.selected,
    };
  },
});
