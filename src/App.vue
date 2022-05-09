<template>
  <div id="app" class="app">
    <div class="container">
      <div class="inner">
        <MultipleSteps />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultipleSteps from "@/components/MultipleSteps/MultipleSteps.vue";
export default defineComponent({
  name: "App",
  components: {
    MultipleSteps,
  },
});
</script>

<style lang="scss"></style>
