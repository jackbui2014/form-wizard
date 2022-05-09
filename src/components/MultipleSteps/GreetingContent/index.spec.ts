import { shallowMount } from "@vue/test-utils";
import GreetingContent from "@/components/GreetingContent/GreetingContent.vue";

describe("GreetingContent.vue", () => {
  it("renders GreetingContent component", () => {
    const children = "new button";
    const wrapper = shallowMount(GreetingContent);
    expect(wrapper.text()).toMatch(children);
  });
});
