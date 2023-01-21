<script setup lang="ts">
import {
  LargeArticle as article,
  TinyArticle as tinyArticle,
} from '@/constants/articles'

onMounted(async () => {
  await fetch('https://api.avue-blog.tweenyone.com/accounts/users/', {
    method: 'POST',
  })
})
</script>

<template>
  <div class="w-full mx-auto max-w-6xl">
    <section class="w-full mt-6 flex items-center font-semi">
      <Icon name="material-symbols:home-rounded" /> - Home Page
    </section>
    <section class="flex">
      <div class="relative max-w-3xl max-h-[484px] overflow-hidden rounded-lg">
        <div class="w-full h-full absolute bg-[#1B0042] opacity-80"></div>
        <div class="w-full h-full absolute flex flex-col p-11">
          <h2
            class="text-white leading-10 text-base tracking-wider font-sans font-normal"
          >
            BY TOMAS LAURINAVICIUS IN INSPIRATION
          </h2>
          <h1
            class="text-white leading-10 text-3xl w-5/6 tracking-wider font-sans font-semibold"
          >
            How to accept rejection gracefully — and use it to grow
          </h1>
          <p
            class="text-white mt-7 font-sans leading-9 font-base tracking-wider"
          >
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </div>
        <img
          src="@/assets/img/banner2.png"
          alt="banner1"
          title="banner1"
          class="w-full h-full object-cover z-20 bg-opacity-10"
        />
      </div>
      <div class="">hello</div>
    </section>
  </div>
</template>
