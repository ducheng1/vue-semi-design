<script setup lang="ts">
import type { ButtonGroupProps } from './types'
import { computed, onMounted, useTemplateRef } from 'vue'
import { themeList, typeList } from '../../constants'
import { bem, getValidSize, getValidTheme, getValidType } from '../../utils'
import '../../styles/components/button-group.scss'

defineOptions({
  name: 'SemiButtonGroup',
})

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  size: 'default',
  theme: 'light',
  type: 'primary',
})

const buttonGroupBlock = bem('button-group')
const buttonBlock = bem('button', true)

const validSize = computed(() => getValidSize(props.size))
const buttonGroupRef = useTemplateRef('buttonGroupRef')

const className = computed(() =>
  buttonGroupBlock({
    size: validSize.value === 'default' ? false : validSize.value,
    theme: getValidTheme(props.theme),
    type: getValidType(props.type),
    disabled: props.disabled,
  }),
)

function updateChildrenButtonClass() {
  if (!buttonGroupRef.value || !buttonGroupRef.value.children?.length) return
  for (let i = 0; i < buttonGroupRef.value.children.length; i++) {
    const child = buttonGroupRef.value?.children.item(i)
    themeList.forEach((theme) => {
      child?.classList.replace(buttonBlock({ theme }), buttonBlock({ theme: props.theme }))
    })
    typeList.forEach((type) => {
      child?.classList.replace(buttonBlock({ type }), buttonBlock({ theme: props.type }))
    })
  }
}

onMounted(() => {
  updateChildrenButtonClass()
})
</script>

<template>
  <div ref="buttonGroupRef" :class="className">
    <slot></slot>
  </div>
</template>
