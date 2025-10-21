<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'IconShieldStroked',
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke="#000"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 4.128 12.001 2.5 21 4.128v5.389A13.16 13.16 0 0 1 12.001 22 13.16 13.16 0 0 1 3 9.514z"
    />
    <path
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M11.975 7.475v8M7.975 11.475h8"
    />
  </svg>
</template>
