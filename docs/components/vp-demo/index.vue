<script setup lang="ts">
import { IconCode, IconGithubLogo } from '@vue-semi-design/icons'
import { computed, ref } from 'vue'
import { Icon } from 'vue-semi-design'

const props = defineProps<{
  path: string
  source: string
}>()

const visible = ref<boolean>(false)

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})

const githubUrl = computed(
  () => `https://github.com/ducheng1/vue-semi-design/blob/dev/docs/examples/${props.path}.vue`,
)
</script>

<template>
  <div class="demo-block">
    <div class="demo-block__preview">
      <slot name="preview"></slot>
    </div>
    <div class="demo-block__toggle">
      <a :href="githubUrl">
        <Icon>
          <IconGithubLogo />
        </Icon>
      </a>
      <Icon @click="visible = !visible">
        <IconCode />
      </Icon>
    </div>
    <div v-if="visible">
      <div v-html="decoded"></div>
    </div>
    <div v-if="visible" class="demo-block__control" @click="visible = false">收起代码</div>
  </div>
</template>

<style scoped>
.demo-block {
  position: relative;
  border: 1px solid var(--vp-c-gray-3);
  border-radius: 4px;
  background-color: var(--semi-color-bg-0);
}

.demo-block__preview {
  padding: 24px;
}

.demo-block__toggle {
  position: relative;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;

  padding: 8px 12px;
}

.demo-block__toggle::before,
.demo-block__control::before {
  content: ' ';

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 1px;

  background-color: var(--vp-c-gray-3);
}

.demo-block__control {
  cursor: pointer;

  position: sticky;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 0;

  font-size: 14px;

  background-color: var(--semi-color-bg-0);
}

.semi-icon {
  cursor: pointer;
  color: var(--vp-c-text-3);
}

a {
  display: inline-flex;
}
</style>
