import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      baseValue: this.value,
    };
  },
});
