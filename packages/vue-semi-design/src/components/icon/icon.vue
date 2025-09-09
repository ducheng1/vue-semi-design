<script setup lang="ts">
import type { IconProps } from './types'
import { computed } from 'vue'
import { bem } from '../../utils'
import '../../styles/components/icon.scss'

defineOptions({
  name: 'SemiIcon',
})

const { size, rotate, spin } = defineProps<IconProps>()

const b = bem('icon')

const className = computed(() => b({ size: size || 'default', spin }))
</script>

<template>
  <div
    :class="className"
    :style="{
      rotate: `${rotate}deg`,
    }"
  >
    <i :class="b('inner')">
      <slot></slot>
    </i>
  </div>
</template>
