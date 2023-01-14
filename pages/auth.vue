<script lang="ts" setup>
const TheLogIn = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '~~/components/auth/TheLogIn.vue'
  )
})
const TheRegister = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '~~/components/auth/TheRegister.vue'
  )
})
</script>
<template>
  <TheLogIn />
  <hr />
  <TheRegister />
</template>
