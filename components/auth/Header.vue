<script setup lang="ts">
const router = useRoute()

type TLink = {
  name: string
  title: string
  path: string
}

const availableLinks: TLink[] = [
  { name: 'auth-login', title: 'Create Account', path: '/auth/register' },
  { name: 'auth-register', title: 'Sign In', path: '/auth/login' },
]

const currentLinkData = computed(() => {
  return availableLinks.find((link) => link.name === router.name)
})
</script>

<template>
  <header class="w-full border border-b p-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <nuxt-link to="/">
        <img
          src="https://i.ibb.co/tsS37Dp/icon.png"
          class="w-16 h-16"
          alt="logo"
          title="A VUE BLOG"
        />
      </nuxt-link>
      <nav class="flex gap-8 items-center list-none">
        <nuxt-link :to="currentLinkData?.path">
          {{ currentLinkData?.title }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>
