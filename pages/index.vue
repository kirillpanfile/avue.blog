<script setup lang="ts">
import { LargeArticle as article } from '@/constants/articles';

const ShowCaseArticle = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '@/components/article/ShowCaseArticle.vue'
  );
});
</script>

<template>
  <div class="w-full mx-auto max-w-7xl">
    <section class="w-full mt-6 flex items-center font-semi">
      <Icon name="material-symbols:home-rounded" /> - Home Page
    </section>
    <section class="w-full max-32 mt-4 flex justify-center flex-col">
      <h1 class="text-3xl">Welcome to <span class="font-bold">A VUE BLOG</span></h1>

      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam
        necessitatibus deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aperiam maxime quos delectus facere sed exercitationem expedita quis recusandae
        repudiandae temporibus, tempore saepe molestias voluptatem.
      </p>
    </section>
    <ShowCaseArticle :article="article" />
  </div>
</template>
