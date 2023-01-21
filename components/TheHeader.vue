<script setup lang="ts">
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

const isDark = ref(false)

const setIsDark = (value: boolean): void => {
  if (!process.client) return

  isDark.value = value
  localStorage.setItem('isDark', JSON.stringify(value))

  if (value) document.body.classList.add('dark')
  else document.body.classList.remove('dark')
}

const deviceColorSheme = (): void => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true)
  else setIsDark(false)
}

if (process.client) {
  deviceColorSheme()
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', deviceColorSheme)
}

const handleIconsClick = (title: string): void => {
  if (title === 'color') return setIsDark(!isDark.value)
  if (title === 'github')
    window.open('https://github.com/kirillpanfile/', '_blank')
}
</script>

<template>
  <header class="w-full border border-b p-2">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
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
