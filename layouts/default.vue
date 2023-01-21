<script setup lang="ts">
const TheHeader = defineAsyncComponent(async function () {
  return await import('@/components/TheHeader.vue')
})

const TheFooter = defineAsyncComponent(async function () {
  return await import('@/components/TheFooter.vue')
})
</script>

<template>
  <main
    class="flex flex-col min-h-screen bg-gray-200 font-sans antialiased dark:text-slate-100 dark:bg-black transition-colors duration-300"
  >
    <TheHeader />
    <slot></slot>
    <TheFooter />
    <notifications />
  </main>
</template>
