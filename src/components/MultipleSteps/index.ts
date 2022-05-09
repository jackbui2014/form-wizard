import { defineComponent } from "vue";
import { useMultipleStepsStore } from "../../stores/multipleSteps";
import BaseButton from "../Base/BaseButton/BaseButton.vue";
import GreetingContent from "./GreetingContent/GreetingContent.vue";
import FormContent from "./FormContent/FormContent.vue";
import SummaryContent from "./SummaryContent/SummaryContent.vue";
import ErrorContent from "./ErrorContent/ErrorContent.vue";

export default defineComponent({
  name: "MultipleSteps",
  components: {
    GreetingContent,
    FormContent,
    SummaryContent,
    ErrorContent,
    BaseButton,
  },
  setup() {
    const multipleStepsStore = useMultipleStepsStore();
    return { multipleStepsStore };
  },
  data() {
    return {
      currentTab: "GreetingContent",
      nextTab: "FormContent",
      previousTab: "",
      tabs: [
        {
          name: "GreetingContent",
          buttonText: "Start",
          previousTab: "",
          nextTab: "FormContent",
        },
        {
          name: "FormContent",
          buttonText: "Next",
          previousTab: "GreetingContent",
          nextTab: "SummaryContent",
        },
        {
          name: "SummaryContent",
          buttonText: "Buy",
          previousTab: "FormContent",
          nextTab: "GreetingContent",
        },
        {
          name: "ErrorContent",
          buttonText: "Ok :(",
          previousTab: "",
          nextTab: "GreetingContent",
        },
      ],
      nextText: "Start",
    };
  },
  methods: {
    handleNext() {
      if (
        this.multipleStepsStore.errorData &&
        this.currentTab !== "ErrorContent"
      ) {
        this.setupCurrentTab("ErrorContent");
        this.multipleStepsStore.$reset();
      } else {
        this.setupCurrentTab(this.nextTab);
      }
    },
    handleBack() {
      this.setupCurrentTab(this.previousTab);
    },
    setupCurrentTab(currentTab: string) {
      const currentTabData = this.tabs.find((item) => item.name === currentTab);
      if (currentTabData) {
        this.currentTab = currentTabData.name;
        this.nextText = currentTabData.buttonText;
        this.previousTab = currentTabData.previousTab;
        this.nextTab = currentTabData.nextTab;
      }
    },
  },
});
