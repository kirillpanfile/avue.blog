<script setup lang="ts">
import appService from '~~/services/app.service'
import {
  LargeArticle as article,
  TinyArticle as tinyArticle,
} from '@/constants/articles'
import { useAuthStore } from '~~/store/auth'
const store = useAuthStore()
console.log(store)
const ShowCaseArticle = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '@/components/article/ShowCaseArticle.vue'
  )
})
const ShowTinyCaseArticle = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "ShowCaseArticle" */ '@/components/article/ShowTinyCaseArticle.vue'
  )
})

appService.getArticle()
</script>

<template>
  <div class="w-full mx-auto max-w-7xl">
    <section class="w-full mt-6 flex items-center font-semi gap-2">
      <Icon name="material-symbols:home-rounded" />
      <h4>-</h4>
      <h4>Home Page</h4>
    </section>
    <section class="w-full max-32 mt-4 flex justify-center flex-col">
      <h1 class="sm:text-3xl text-2xl">
        Welcome to <span class="font-bold">A VUE BLOG</span>
      </h1>

      <p class="mt-4 sm:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam
        necessitatibus deserunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aperiam maxime quos delectus facere sed exercitationem
        expedita quis recusandae repudiandae temporibus, tempore saepe molestias
        voluptatem.
      </p>
    </section>
    <ShowCaseArticle :article="article" />
    <ShowTinyCaseArticle :article="tinyArticle" />
  </div>
</template>
