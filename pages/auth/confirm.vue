<script setup>
import MyBadge from '@/components/ui/MyBadge.vue'
import MyButton from '@/components/ui/MyButton.vue'
import MyInput from '@/components/ui/MyInput.vue'

import { useAuthStore } from '~~/store/auth'

definePageMeta({
  layout: 'auth',
})

const validationCode = ref('')

const { validateUserCode } = useAuthStore()
const handleCodeSubmision = async () => {
  await validateUserCode(validationCode.value)
}
</script>
<template>
  <main
    class="w-full max-w-7xl mx-auto flex items-center justify-center flex-1"
  >
    <form class="m-auto" @submit.prevent>
      <h1 class="text-center font-medium text-3xl">Log into A Vue Blog</h1>
      <div class="flex gap-8 mt-8 items-center h-max">
        <div class="flex flex-col gap-8">
          <MyInput
            v-model="validationCode"
            title="Validate code"
            placeholder="name@example.com"
          />
          <MyButton title="LOG IN" @click="handleCodeSubmision" />
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
    </form>
  </main>
</template>
