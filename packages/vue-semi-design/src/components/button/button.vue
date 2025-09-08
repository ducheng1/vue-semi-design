<script setup lang="ts">
import type { ButtonProps } from './types'
import { IconSpin } from '@vue-semi-design/icons'
import { computed, useSlots } from 'vue'
import { bem } from '../../utils'
import SemiIcon from '../icon'
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
  iconPosition,
} = defineProps<ButtonProps>()

const b = bem('button')
const slots = useSlots()

const className = computed<string>(() =>
  b({
    'type': type || 'primary',
    'theme': theme || 'light',
    disabled,
    loading,
    'size': size === 'default' ? false : size,
    block,
    'right-icon': iconPosition === 'right',
    'is-icon': slots.icon && !slots.default,
  }),
)
</script>

<template>
  <button
    :type="htmlType"
    :class="className"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
  >
    <span v-if="slots.icon || loading" :class="b('icon')">
      <SemiIcon v-if="loading" spin :size>
        <IconSpin />
      </SemiIcon>
      <slot v-else name="icon" />
    </span>
    <span v-if="slots.default" :class="b('content')">
      <slot />
    </span>
  </button>
</template>
