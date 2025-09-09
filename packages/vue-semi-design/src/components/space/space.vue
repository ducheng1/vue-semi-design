<script setup lang="ts">
import type { SpaceProps } from './types'
import { computed } from 'vue'
import { namespace } from '../../constants'
import { bem, getValidAlign, getValidSpacing } from '../../utils'
import '../../styles/components/space.scss'

defineOptions({
  name: 'SemiSpace',
})

const props = withDefaults(defineProps<SpaceProps>(), {
  align: 'center',
  spacing: 'tight',
})

const validAlign = computed(() => getValidAlign(props.align))
const computedSpacing = computed(() => {
  const spacing = getValidSpacing(props.spacing)
  if (Array.isArray(spacing)) {
    return `${spacing?.[0] ?? 0}px ${spacing?.[1] ?? 0}px`
  }
  if (typeof spacing === 'number') {
    return `${spacing}px`
  }
  return `var(--${namespace}-spacing-${spacing === 'medium' ? 'base' : spacing})`
})

// bem
const spaceBlock = bem('space')
const className = computed(() =>
  spaceBlock({
    align: validAlign.value === 'center' ? false : validAlign.value,
    vertical: props.vertical,
    wrap: props.wrap,
  }),
)
</script>

<template>
  <div :class="className" :style="{ gap: computedSpacing }">
    <slot />
  </div>
</template>
