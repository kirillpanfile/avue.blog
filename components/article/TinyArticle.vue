<script setup lang="ts">
import { PropType } from 'vue'

type TTinyArticle = {
  author: string
  subtitle: string
  image: {
    file: string
    alt: string
    title: string
  }
}

defineProps({
  article: {
    type: Object as PropType<TTinyArticle>,
    required: true,
  },
})
</script>

<template>
  <article
    class="h-48 border rounded-md overflow-hidden relative dark:border-gray-800"
  >
    <div class="absolute px-6 py-4 z-20 text-white">
      <h1 class="uppercase">BY {{ article.author }}</h1>
      <span> {{ article.subtitle }} </span>
    </div>
    <div class="w-full h-full absolute bg-black opacity-20 z-10"></div>
    <img
      :src="article.image.file"
      :alt="article.image.alt"
      :title="article.image.title"
      class="w-full h-full object-cover absolute"
    />
  </article>
</template>
