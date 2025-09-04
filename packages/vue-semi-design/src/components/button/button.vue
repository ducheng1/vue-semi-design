<script setup lang="ts">
import type { ButtonProps } from './types'
import { computed } from 'vue'
import { bem } from '../../utils'

defineOptions({
  name: 'SemiButton',
})

const {
  primary = false,
  tertiary = false,
  backgroundColor = undefined,
  size = 'medium',
} = defineProps<ButtonProps>()

const baseClass = bem('button')

const mode = computed(() => (primary ? 'semi-button--primary' : 'semi-button--secondary'))
const isTertiary = computed(() => (tertiary ? 'semi-button--tertiary' : ''))
</script>

<template>
  <button
    type="button"
    :class="[baseClass(), `semi-button--${size}`, mode, isTertiary]"
    :style="{ backgroundColor }"
  >
    <slot></slot>
  </button>
</template>
