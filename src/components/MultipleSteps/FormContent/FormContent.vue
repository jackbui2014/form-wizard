<template>
  <div class="form-content">
    <h2 class="text-center">Tell us about yourself</h2>
    <form>
      <BaseInput
        v-model="userName"
        type="text"
        label="name"
        placeholder="Add text"
      />
      <BaseInput
        v-model="userAge"
        type="number"
        label="Age"
        placeholder="Add number"
      />
      <BaseSelect
        class="country-select"
        :options="countries"
        :selected="userCountry"
        v-model="userCountry"
      />
      <ul class="form-content-packages-list">
        <li
          class="form-content-package-item"
          v-for="item in calculatedPackageDescription"
          :key="item.sku"
        >
          <input
            type="radio"
            :id="item.sku"
            :value="item.sku"
            v-model="selectedPackage"
          />
          <label :for="item.sku"
            >{{ item.name
            }}<span v-if="!!item.description">
              ( {{ item.description }} )
            </span></label
          >
        </li>
      </ul>
    </form>
    <div class="form-content-calculated-text">
      <h3>Your premium is: {{ calculatedPremiumText }}</h3>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" src="./index.scss"></style>
