<script setup lang="ts">
import { Button, ButtonGroup } from 'vue-semi-design'
</script>

<template>
  <div>
    <div class="example-block">
      <ButtonGroup>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </ButtonGroup>
    </div>
    <div class="example-block">
      <ButtonGroup theme="solid">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </ButtonGroup>
    </div>
    <div class="example-block">
      <ButtonGroup theme="outline">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </ButtonGroup>
    </div>
    <div class="example-block">
      <ButtonGroup theme="borderless">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </ButtonGroup>
    </div>
  </div>
</template>
