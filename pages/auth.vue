<script lang="ts" setup>
const TheSignUp = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '@/components/auth/TheSignUp.vue'
  )
})
</script>
<template>
  <TheSignUp />
</template>
