import { shallowMount } from "@vue/test-utils";
import FormContent from "@/components/FormContent/FormContent.vue";

describe("FormContent.vue", () => {
  it("renders FormContent component", () => {
    const children = "new button";
    const wrapper = shallowMount(FormContent);
    expect(wrapper.text()).toMatch(children);
  });
});
