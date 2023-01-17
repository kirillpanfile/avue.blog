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
    class="flex md:flex-row flex-col p-1 bg-white w-full h-full border border-gray-100 shadow-sm mt-8"
  >
    <div class="relative sm:max-w-lg max-w-full">
      <MyImage :image="article.image" class="sm:max-w-lg object-cover" />
      <div
        class="flex flex-col gap-4 absolute top-0 left-0 h-full w-full justify-center p-2"
      >
        <strong class="text-3xl">{{ article.emoji }}</strong>
        <h1 class="text-white font-bold sm:text-3xl text-xl">
          {{ article.title }}
        </h1>
      </div>
    </div>
    <div class="p-3 flex flex-col w-full">
      <h6 class="font-bold text-sm text-gray-700 block">
        {{ article.category }} •
        <span class="font-normal">{{ article.timestamp }} h ago</span>
      </h6>
      <strong class="text-gray-700 font-bold sm:text-2xl text-xl mt-2 block"
        >Optimizing CSS for faster page loads
      </strong>
      <p
        class="mt-4 pr-4 max-h-36 h-36 w-full sm:text-base text-sm text-ellipsis overflow-hidden"
      >
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
