<template>
  <select
    class="base-select"
    :placeholder="placeholder"
    v-bind="$attrs"
    v-model="baseSelected"
  >
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
