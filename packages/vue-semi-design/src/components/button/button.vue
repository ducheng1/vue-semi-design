<script setup lang="ts">
import type { ButtonProps } from './types'
import { computed } from 'vue'
import { bem } from '../../utils'

defineOptions({
  name: 'SemiButton',
})

const { type, theme, size, disabled, block, htmlType = 'button' } = defineProps<ButtonProps>()

const b = bem('button')

const className = computed<string>(() =>
  b({
    type: disabled ? false : type || 'primary',
    theme: theme || 'light',
    disabled,
    size: size === 'default' ? false : size,
    block,
  }),
)
</script>

<template>
  <button :type="htmlType" :class="className" :disabled>
    <span :class="b('content')">
      <slot />
    </span>
    <span v-if="$slots.icon" :class="b('icon')">
      <slot name="icon" />
    </span>
  </button>
</template>
