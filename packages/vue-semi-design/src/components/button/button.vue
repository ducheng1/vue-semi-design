<script setup lang="ts">
import { computed } from 'vue'
import '../../styles/button.scss'

interface Props {
  primary?: boolean
  tertiary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const {
  primary = false,
  tertiary = false,
  backgroundColor = undefined,
  size = 'medium',
  label,
  onClick = undefined,
} = defineProps<Props>()

const mode = computed(() => (primary ? 'demo-button--primary' : 'demo-button--secondary'))
const isTertiary = computed(() => (tertiary ? 'demo-button--tertiary' : ''))
</script>

<template>
  <button
    type="button"
    class="demo-button"
    :class="[`demo-button--${size}`, mode, isTertiary]"
    :style="{ backgroundColor }"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
