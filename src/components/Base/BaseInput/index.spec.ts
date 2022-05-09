import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/Base/BaseInput/BaseInput.vue";

describe("BaseInput.vue", () => {
  it("renders BaseInput component", () => {
    const children = "new button";
    const wrapper = shallowMount(BaseInput, {
      props: { children },
    });
    expect(wrapper.text()).toMatch(children);
  });
});
