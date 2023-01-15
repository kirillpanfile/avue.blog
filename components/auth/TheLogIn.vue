<script lang="ts" setup>
import { ref } from 'vue'
const MyBadge = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '~~/components/ui/MyBadge.vue'
  )
})
const MyButton = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '~~/components/ui/MyButton.vue'
  )
})
const MyInput = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '~~/components/ui/MyInput.vue'
  )
})

const email = ref('')
const password = ref('')
</script>
<template>
  <div class="m-auto">
    <h1 class="text-center font-medium text-3xl">Log into A Vue Blog</h1>
    <div class="flex gap-8 mt-8 items-center h-max">
      <div class="flex flex-col gap-8">
        <MyInput
          v-model="email"
          title="EMAIL ADDRESS"
          placeholder="name@example.com"
        />
        <MyInput
          v-model="password"
          title="PASSWORD"
          placeholder="password"
          :password="true"
        />
        <MyButton title="LOG IN" />
      </div>
      <div
        class="text-xs font-medium gap-4 flex items-center flex-col h-[220px]"
      >
        <div class="h-full w-[2px] bg-gray-300"></div>
        <h1 class="">OR</h1>
        <div class="h-full w-[2px] bg-gray-300"></div>
      </div>
      <div class="flex flex-col gap-4">
        <MyBadge title="Google" />
        <MyBadge title="Github" />
        <MyBadge title="Facebook" />
      </div>
    </div>
    <div class="flex flex-col gap-1 justify-center mt-8">
      <h3 class="text-center font-medium text-md">CAN'T LOG IN?</h3>
      <h4 class="text-center font-medium text-sm text-zinc-400 mt-8">
        Secure Login reCAPTCHA subject to Google
      </h4>
      <nuxt-link
        class="mx-auto font-medium text-sm text-zinc-400 underline"
        to="/"
        >Terms & Privacy</nuxt-link
      >
    </div>
  </div>
</template>
