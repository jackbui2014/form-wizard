import { shallowMount } from "@vue/test-utils";
import BaseSelect from "@/components/Base/BaseSelect/BaseSelect.vue";

describe("BaseSelect.vue", () => {
  it("renders BaseSelect component", () => {
    const children = "new button";
    const wrapper = shallowMount(BaseSelect);
    expect(wrapper.text()).toMatch(children);
  });
});
