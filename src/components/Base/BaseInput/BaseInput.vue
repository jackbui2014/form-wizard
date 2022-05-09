<template>
  <label v-if="label" class="base-label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="base-input"
  />
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
