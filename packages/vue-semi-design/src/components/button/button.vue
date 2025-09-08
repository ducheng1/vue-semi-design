<script setup lang="ts">
import type { ButtonProps } from './types'
import { IconLoading } from '@vue-semi-design/icons'
import { computed } from 'vue'
import { bem } from '../../utils'
import '../../styles/components/button.scss'

defineOptions({
  name: 'SemiButton',
})

const {
  type,
  theme,
  size,
  disabled,
  block,
  htmlType = 'button',
  loading,
} = defineProps<ButtonProps>()

const b = bem('button')

const className = computed<string>(() =>
  b({
    type: type || 'primary',
    theme: theme || 'light',
    disabled,
    loading,
    size: size === 'default' ? false : size,
    block,
  }),
)
</script>

<template>
  <button :type="htmlType" :class="className" :disabled="loading || disabled">
    <span :class="b('content')">
      <slot />
    </span>
    <span v-if="$slots.icon || loading" :class="b('icon')">
      <IconLoading />
      <slot name="icon" />
    </span>
  </button>
</template>
