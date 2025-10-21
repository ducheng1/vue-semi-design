<script setup lang="ts">
import { IconCamera } from '@vue-semi-design/icons'
import { Button, Icon } from 'vue-semi-design'
</script>

<template>
  <div class="example-block">
    <Button>
      <template #icon>
        <Icon>
          <IconCamera />
        </Icon>
      </template>
    </Button>
  </div>
</template>
