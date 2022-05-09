import { shallowMount } from "@vue/test-utils";
import MultipleSteps from "@/components/MultipleSteps/MultipleSteps.vue";

describe("BaseSteps.vue", () => {
  it("renders MultipleSteps component", () => {
    const children = "new button";
    const wrapper = shallowMount(MultipleSteps);
    expect(wrapper.text()).toMatch(children);
  });
});
