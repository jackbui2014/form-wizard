<template>
  <div class="summary-content text-center">
    <h2>Summary</h2>
    <h3>{{ userName }},</h3>
    <p>Name: {{ userName }}</p>
    <p>Age: {{ userAge }}</p>
    <p>Where do you live: {{ userCountryObj.text }}</p>
    <p>Package: {{ selectedPackageObj.name }}</p>
    <p>Premium: {{ calculatedPremiumText }}</p>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
