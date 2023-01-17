<script setup lang="ts">
import { PropType } from 'vue'
import type { ITinyArticle } from '~~/types'

const MyImage = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "MyImage" */ '@/components/ui/MyImage.vue'
  )
})

defineProps({
  article: {
    type: Object as PropType<ITinyArticle>,
    required: true,
  },
})
</script>
<template>
  <article
    class="p-1 flex flex-col max-w-sm gap-2 border border-gray-100 shadow-sm"
  >
    <MyImage :image="article.image" class="max-w-sm object-cover" />
    <div class="flex flex-col px-2 gap-2">
      <div class="flex gap-1">
        <h1 class="font-bold text-sm text-gray-700 block">
          {{ article.category }} •
        </h1>
        <h1 class="text-sm text-gray-700 block">
          {{ article.timestamp }} h ago
        </h1>
      </div>
      <h1 class="text-gray-700 font-bold text-2xl block">
        {{ article.title }}
      </h1>
      <p class="">{{ article.description }}</p>
      <div class="flex justify-between items-center">
        <h6 class="text-gray-700">{{ article.readTime }}</h6>
        <NuxtLink
          :to="`/article/${article.slug}`"
          class="text-blue-500 font-bold flex items-center gap-2"
          >Read Full <Icon name="material-symbols:arrow-forward" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
