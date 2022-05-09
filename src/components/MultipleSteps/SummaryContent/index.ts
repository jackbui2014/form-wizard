import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useMultipleStepsStore } from "@/stores/multipleSteps";
export default defineComponent({
  name: "SummaryContent",
  components: {},
  computed: {
    ...mapState(useMultipleStepsStore, [
      "userName",
      "userAge",
      "selectedPackageObj",
      "userCountryObj",
      "calculatedPremiumText",
    ]),
  },
});
