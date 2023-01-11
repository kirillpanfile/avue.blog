<script setup lang="ts">
const links = ref<{ title: string; path: string }[]>([
  { title: 'Articles', path: '/' },
  { title: 'Categories', path: '/' }
]);

const icons = ref<{ name: string; path: string }[]>([
  { name: 'grommet-icons:github', path: '/' },
  { name: 'material-symbols:bedtime-outline-rounded', path: '/' }
]);
</script>

<template>
  <header class="w-full border border-b p-2">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <nuxt-link to="/">
        <nuxt-img src="/icon.png" alt="logo" title="A VUE BLOG" class="w-14" />
      </nuxt-link>
      <nav class="flex gap-8 items-center list-none">
        <li v-for="({ title, path }, index) in links" :key="index">
          <nuxt-link :to="path">{{ title }}</nuxt-link>
        </li>
        <li v-for="({ name, path }, index) in icons" :key="index">
          <Icon :name="name" class="w-5 h-5" />
        </li>
      </nav>
    </div>
  </header>
</template>
