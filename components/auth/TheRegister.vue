<script lang="ts" setup>
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
const confirmPass = ref('')
</script>
<template>
  <div class="m-auto py-8">
    <h1 class="text-center font-medium text-3xl">Create an account</h1>
    <div class="flex items-center gap-8 mt-8">
      <div class="flex flex-col gap-8 items-center">
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
        <MyInput
          v-model="confirmPass"
          title="CONFIRM PASSWORD"
          placeholder="confirm password"
          :password="true"
        />
        <MyButton title="SUBMIT" />
      </div>
      <div
        class="text-xs font-medium gap-4 flex items-center flex-col h-[280px]"
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
