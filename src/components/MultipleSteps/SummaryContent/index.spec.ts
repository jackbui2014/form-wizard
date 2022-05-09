import { shallowMount } from "@vue/test-utils";
import SummaryContent from "@/components/SummaryContent/SummaryContent.vue";

describe("SummaryContent.vue", () => {
  it("renders SummaryContent component", () => {
    const children = "new button";
    const wrapper = shallowMount(SummaryContent);
    expect(wrapper.text()).toMatch(children);
  });
});
