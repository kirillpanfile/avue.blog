<script setup lang="ts">
const links = ref<{ title: string; path: string }[]>([
  { title: 'Articles', path: '/' },
  { title: 'Categories', path: '/' },
  { title: 'Search', path: '/' },
  { title: 'About', path: '/' },
  { title: 'Sign In', path: '/' },
])

const icons = ref<{ name: string; path: string }[]>([
  { name: 'grommet-icons:github', path: '/' },
  { name: 'material-symbols:bedtime-outline-rounded', path: '/' },
])
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
      <nav class="flex sm:gap-8 gap-6 items-center list-none">
        <li
          v-for="({ title, path }, index) in links"
          :key="index"
          class="hidden sm:block"
        >
          <nuxt-link :to="path">{{ title }}</nuxt-link>
        </li>
        <li v-for="({ name }, index) in icons" :key="index">
          <Icon :name="name" class="w-5 h-5" />
        </li>
        <ul
          class="flex sm:hidden flex-col justify-between gap-1 cursor-pointer mr-2"
        >
          <li
            v-for="(item, index) in 3"
            :key="index"
            class="w-8 h-1 bg-black rounded-sm"
          ></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
