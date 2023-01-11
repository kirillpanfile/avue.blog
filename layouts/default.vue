<script setup lang="ts">
const TheHeader = defineAsyncComponent(async function () {
  return await import(/*  webpackChunkName: "TheHeader"*/ '@/components/TheHeader.vue');
});

const TheFooter = defineAsyncComponent(async function () {
  return await import(/* webpackChunkName: "TheFooter" */ '@/components/TheFooter.vue');
});
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <TheHeader />
    <slot></slot>
    <TheFooter />
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
