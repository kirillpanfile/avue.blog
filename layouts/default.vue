<script setup lang="ts">
const TheHeader = defineAsyncComponent(async function () {
  return await import('@/components/TheHeader.vue')
})

const TheFooter = defineAsyncComponent(async function () {
  return await import('@/components/TheFooter.vue')
})
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <TheHeader />
    <slot></slot>
    <TheFooter />
    <notifications />
  </main>
</template>
