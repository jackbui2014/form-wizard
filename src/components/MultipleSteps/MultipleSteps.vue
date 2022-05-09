<template>
  <div class="multiple-steps">
    <component :is="currentTab" class="tab"></component>
    <div class="multiple-steps-icons">
      <div
        class="multipple-steps-icons-item"
        v-for="tab in filteredSteps"
        :key="tab.name"
      ></div>
    </div>
    <div class="text-center">
      <BaseButton
        v-if="previousTab"
        children="Back"
        @click="handleBack"
        class="back-btn btn-outline"
      />
      <BaseButton :children="nextText" @click="handleNext" class="next-btn" />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
