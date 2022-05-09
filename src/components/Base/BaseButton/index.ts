import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "BaseButton",
  components: {},
  props: {
    children: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    onClick: {
      type: Function,
      required: false,
    },
  },
});
