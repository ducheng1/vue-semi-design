<script setup lang="ts">
import { Button } from 'vue-semi-design'
</script>

<template>
  <div>
    <div class="demo-block">
      <Button type="primary" theme="light">浅色主要按钮</Button>
      <Button type="primary" theme="solid">深色主要按钮</Button>
      <Button type="primary" theme="borderless">无背景主要按钮</Button>
      <Button type="primary" theme="outline">边框主要按钮</Button>
    </div>
    <div class="demo-block">
      <Button type="secondary" theme="light">浅色次要按钮</Button>
      <Button type="secondary" theme="solid">深色次要按钮</Button>
      <Button type="secondary" theme="borderless">无背景次要按钮</Button>
      <Button type="secondary" theme="outline">边框次要按钮</Button>
    </div>
    <div class="demo-block">
      <Button type="tertiary" theme="light">浅色第三按钮</Button>
      <Button type="tertiary" theme="solid">深色第三按钮</Button>
      <Button type="tertiary" theme="borderless">无背景第三按钮</Button>
      <Button type="tertiary" theme="outline">边框第三按钮</Button>
    </div>
    <div class="demo-block">
      <Button type="warning" theme="light">浅色警告按钮</Button>
      <Button type="warning" theme="solid">深色警告按钮</Button>
      <Button type="warning" theme="borderless">无背景警告按钮</Button>
      <Button type="warning" theme="outline">边框警告按钮</Button>
    </div>
    <div class="demo-block">
      <Button type="danger" theme="light">浅色危险按钮</Button>
      <Button type="danger" theme="solid">深色危险按钮</Button>
      <Button type="danger" theme="borderless">无背景危险按钮</Button>
      <Button type="danger" theme="outline">边框危险按钮</Button>
    </div>
  </div>
</template>
