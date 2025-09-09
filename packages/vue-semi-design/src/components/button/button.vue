<script setup lang="ts">
import type { ButtonProps } from './types'
import { IconSpin } from '@vue-semi-design/icons'
import { computed, useSlots } from 'vue'
import { bem, getValidSize, getValidTheme, getValidType } from '../../utils'
import SemiIcon from '../icon'
import '../../styles/components/button.scss'

defineOptions({
  name: 'SemiButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  htmlType: 'button',
  type: 'primary',
  theme: 'light',
  size: 'default',
  iconPosition: 'left',
})

const buttonBlock = bem('button')
const slots = useSlots()

const validSize = computed(() => getValidSize(props.size))

const className = computed<string>(() =>
  buttonBlock({
    'type': getValidType(props.type),
    'theme': getValidTheme(props.theme),
    'disabled': props.disabled,
    'loading': props.loading,
    'size': validSize.value === 'default' ? false : validSize.value,
    'block': props.block,
    'right-icon': props.iconPosition === 'right',
    'is-icon': slots.icon && !slots.default,
    'is-px-0': props.noHorizontalPadding,
  }),
)
</script>

<template>
  <button
    :type="props.htmlType"
    :class="className"
    :disabled="props.disabled || props.loading"
    :aria-disabled="props.disabled || props.loading"
  >
    <span v-if="slots.icon || props.loading" :class="buttonBlock('icon')">
      <SemiIcon v-if="props.loading" spin :size="props.size">
        <IconSpin />
      </SemiIcon>
      <slot v-else name="icon" />
    </span>
    <span v-if="slots.default" :class="buttonBlock('content')">
      <slot />
    </span>
  </button>
</template>
