<script setup lang="ts">
const router = useRouter()

const links = ref<{ title: string; path: string }[]>([
  { title: 'Articles', path: '/articles' },
  { title: 'Sign In', path: '/auth/login' },
  { title: 'About', path: '/about' },
])

const icons = ref<{ name: string; path: string; title: string }[]>([
  {
    title: 'github',
    name: 'grommet-icons:github',
    path: 'https://github.com/kirillpanfile/',
  },
  {
    title: 'color',
    name: 'material-symbols:bedtime-outline-rounded',
    path: '/',
  },
])

const handleIconsClick = (title: string): void => {
  switch (title) {
    case 'github':
      window.open('https://github.com/kirillpanfile/', '_blank')
      break
    case 'color':
      document.body.classList.toggle('dark')
      break
  }
}
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
        <li v-for="({ title, path }, index) in links" :key="index">
          <nuxt-link :to="path">{{ title }}</nuxt-link>
        </li>
        <li
          v-for="({ name, title }, index) in icons"
          :key="index"
          @click="handleIconsClick(title)"
        >
          <Icon :name="name" class="w-5 h-5 cursor-pointer" />
        </li>
      </nav>
    </div>
  </header>
</template>
