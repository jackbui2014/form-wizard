import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/Base/BaseButton/BaseButton.vue";

describe("BaseButton.vue", () => {
  it("renders BaseButton component", () => {
    const children = "new button";
    const wrapper = shallowMount(BaseButton, {
      props: { children },
    });
    expect(wrapper.text()).toMatch(children);
  });
});
