<script setup lang="ts">
import type { InputEmits, InputProps, TargetElement } from './types'
import { IconClear } from '@vue-semi-design/icons'
import { useElementHover } from '@vueuse/core'
import { isNil } from 'es-toolkit'
import { computed, ref, useSlots, useTemplateRef, watch } from 'vue'
import { bem, getValidSize } from '../../utils'
import Icon from '../icon/icon.vue'
import '../../styles/components/input.scss'

defineOptions({
  name: 'SemiInput',
})

const props = defineProps<InputProps>()
const emits = defineEmits<InputEmits>()
const slots = useSlots()

const isFocus = ref(false)
const validSize = computed(() => getValidSize(props.size))

// bem
const inputBlock = bem('input')
const className = computed(() =>
  inputBlock({
    isFocus: isFocus.value,
    size: validSize.value === 'default' ? false : validSize.value,
    disabled: props.disabled,
  }),
)

// inputRef
const inputWrapperRef = useTemplateRef('inputWrapperRef')
// 原生inputRef
const nativeInputRef = useTemplateRef<TargetElement>('nativeInputRef')
// 原生input值
const nativeInputValue = ref()

const isHovering = useElementHover(inputWrapperRef)

watch(
  () => props.modelValue,
  (newValue) => {
    nativeInputValue.value = getFormattedValue(newValue)
  },
  {
    immediate: true,
  },
)

function handleInput(e: Event) {
  const { value } = e.target as TargetElement
  const formattedValue = getFormattedValue(value)
  if (formattedValue === props.modelValue) {
    return
  }
  nativeInputValue.value = formattedValue
  emits('update:modelValue', formattedValue)
  emits('change', formattedValue, e)
}

function handleChange(e: Event) {
  const { value } = e.target as TargetElement
  emits('update:modelValue', value)
  emits('change', value, e)
}

function handleKeydown(e: Event) {
  emits('keydown', e)
}

function handleKeyup(e: Event) {
  emits('keyup', e)
}

function handleKeypress(e: Event) {
  emits('keypress', e)
}

function handleBlur(e: Event) {
  e.preventDefault()
  isFocus.value = false
  emits('blur', e)
  console.log('blur')
}

function handleFocus(e: Event) {
  e.preventDefault()
  isFocus.value = true
  emits('focus', e)
  console.log('focus')
}

// 获取格式化后的值
function getFormattedValue(value?: string) {
  return isNil(value) ? '' : String(value)
}

function handlePrefixOrSuffixClick(e: Event) {
  nativeInputRef.value?.focus()
  if (props.disabled || isFocus.value) return
  handleFocus(e)
}

// 清除事件
function handleClear(e: Event) {
  emits('update:modelValue', '')
  emits('change', '', e)
  emits('clear', e)
}

defineExpose({
  focus: handleFocus,
  blur: handleBlur,
})
</script>

<template>
  <div ref="inputWrapperRef" :class="className">
    <div :class="inputBlock('wrapper')">
      <div v-if="slots.prefix" :class="inputBlock('prefix')" @click="handlePrefixOrSuffixClick">
        <slot name="prefix" />
      </div>
      <input
        ref="nativeInputRef"
        :class="inputBlock('input')"
        autocomplete="false"
        :disabled
        :value="nativeInputValue"
        :placeholder="props.placeholder"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleChange"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
        @keypress="handleKeypress"
      />
      <div
        v-if="!disabled && (isHovering || isFocus)"
        :class="inputBlock('clear-btn')"
        @click.stop="handleClear"
      >
        <Icon v-if="!slots.clearIcon">
          <IconClear />
        </Icon>
        <slot name="clear-icon" />
      </div>
      <div v-if="slots.suffix" :class="inputBlock('suffix')" @click="handlePrefixOrSuffixClick">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>
