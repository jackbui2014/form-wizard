import { defineComponent } from "vue";
import { mapWritableState, mapActions, mapState } from "pinia";
import { useMultipleStepsStore } from "@/stores/multipleSteps";
import BaseSelect from "@/components/Base/BaseSelect/BaseSelect.vue";
import BaseInput from "@/components/Base/BaseInput/BaseInput.vue";

export default defineComponent({
  name: "FormContent",
  components: {
    BaseInput,
    BaseSelect,
  },
  data() {
    return {
      countries: this.getAllCountries(),
    };
  },
  computed: {
    ...mapWritableState(useMultipleStepsStore, [
      "userName",
      "userAge",
      "selectedPackage",
      "userCountry",
    ]),
    ...mapState(useMultipleStepsStore, [
      "calculatedPremiumText",
      "calculatedPackageDescription",
    ]),
  },
  methods: {
    ...mapActions(useMultipleStepsStore, ["getAllCountries"]),
  },
});
