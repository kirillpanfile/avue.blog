<script setup lang="ts">
import { PropType } from 'vue'
import type { ILargeArticle } from '~~/types'

const MyImage = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "MyImage" */ '@/components/ui/MyImage.vue'
  )
})

defineProps({
  article: {
    type: Object as PropType<ILargeArticle>,
    required: true,
  },
})
</script>

<template>
  <article
    class="flex flex-row p-1 bg-white w-full max-h-72 h-full border border-gray-100 shadow-sm mt-8"
  >
    <div class="relative">
      <MyImage :image="article.image" class="max-w-lg object-cover" />

      <div
        class="top-0 left-0 h-full absolute flex justify-center ml-14 flex-col"
      >
        <strong class="text-3xl"> {{ article.emoji }} </strong>
        <h1 class="text-white font-bold text-3xl mt-4 pr-4">
          {{ article.title }}
        </h1>
      </div>
    </div>
    <div class="p-3 flex flex-col w-full">
      <h6 class="font-bold text-sm text-gray-700 block">
        {{ article.category }} •
        <span class="font-normal">{{ article.timestamp }} h ago</span>
      </h6>
      <strong class="text-gray-700 font-bold text-2xl mt-2 block"
        >Optimizing CSS for faster page loads
      </strong>
      <p class="mt-4 pr-4">
        {{ article.description }}
      </p>

      <div class="flex items-center justify-between mt-auto">
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
