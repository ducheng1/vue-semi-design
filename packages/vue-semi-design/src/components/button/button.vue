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

const b = bem('button')

const mode = computed(() => (primary ? b({ primary }) : b({ secondary: true })))
const isTertiary = computed(() => (tertiary ? b({ tertiary }) : ''))
</script>

<template>
  <button
    type="button"
    :class="[b(), `semi-button--${size}`, mode, isTertiary]"
    :style="{ backgroundColor }"
  >
    <slot></slot>
  </button>
</template>
