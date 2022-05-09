<template>
  <button class="base-btn" v-bind="$attrs" @click="$emit('click', $event)">
    {{ children }}
  </button>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
