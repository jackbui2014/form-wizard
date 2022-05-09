import { shallowMount } from "@vue/test-utils";
import ErrorContent from "@/components/ErrorContent/ErrorContent.vue";

describe("ErrorContent.vue", () => {
  it("renders ErrorContent component", () => {
    const children = "new button";
    const wrapper = shallowMount(ErrorContent);
    expect(wrapper.text()).toMatch(children);
  });
});
