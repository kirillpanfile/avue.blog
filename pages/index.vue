<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

const popularArticles = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i,
    author: 'avueblog',
    subtitle: 'How to accept rejection gracefully — and use it to grow',
    image: {
      file: 'https://wallpaperaccess.com/full/1261204.jpg',
      alt: 'image',
      title: 'image',
    },
  }
})

const newArticles = Array.from({ length: 10 }, (_, i) => {
  return {
    id: i,
    author: 'THOMAS EDISON',
    subtitle: 'How to accept rejection gracefully — and use it to grow',
    image: {
      file: 'https://wallpapercave.com/wp/wp7159906.jpg',
      alt: 'image',
      title: 'image',
    },
  }
})
</script>

<template>
  <div class="w-full mx-auto">
    <section
      class="w-full flex flex-col text-center gap-12 items-center justify-center py-32 max-w-7xl mx-auto"
    >
      <h1 class="uppercase text-7xl font-black font-sans">
        Welocme To a vue blog
      </h1>
      <p class="text-xl w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque
        pariatur et odit, labore corporis unde nihil odio nulla velit numquam
        sed aut recusandae iusto voluptate qui omnis, exercitationem, quae
        architecto esse dolor. Recusandae.
      </p>
    </section>
    <section class="">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="upperxase text-3xl font-bold">Popular now</h1>
        <span> View All </span>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperFreeMode]"
        :slides-per-view="5"
        :loop="true"
        :free-mode="true"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
        }"
        :space-between="32"
        :speed="10000"
        class="mt-12"
      >
        <SwiperSlide v-for="{ id, ...rest } in popularArticles" :key="id">
          <LazyArticleTinyArticle :article="rest" />
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="mt-12 mb-12">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="upperxase text-3xl font-bold">New articles</h1>
        <span> View All </span>
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperFreeMode]"
        :slides-per-view="5"
        :loop="true"
        :free-mode="true"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }"
        :space-between="32"
        :speed="10000"
        class="mt-12"
      >
        <SwiperSlide v-for="{ id, ...rest } in newArticles" :key="id">
          <LazyArticleTinyArticle :article="rest" />
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="flex flex-col mt-12 max-w-7xl mx-auto gap-6 mb-12">
      <h1 class="upperxase text-3xl font-bold text-center mb-6">Topics</h1>
      <div class="grid grid-cols-3 gap-6">
        <LazyTopicsLargeTopicCard />
        <LazyTopicsLargeTopicCard />
        <LazyTopicsLargeTopicCard />
        <LazyTopicsLargeTopicCard />
        <LazyTopicsLargeTopicCard />
        <LazyTopicsLargeTopicCard />
      </div>
    </section>

    <div class="grid grid-cols-8 grid-rows-4">
      <!-- <div class="h-32 col-span-4 bg-red-400"></div>
      <div class="col-span-4 row-span-2 bg-blue-400"></div>
      <div class="h-32 col-span-4 bg-red-400"></div>
      <div class="h-32 col-span-4 bg-red-400"></div> -->
      <!-- <div class="h-32 col-span-4 bg-red-400"></div> -->
    </div>
    <!-- <section class="grid grid-cols-12 grid-rows-2">
      <div
        class="relative max-w-3xl w-full max-h-100 overflow-hidden rounded-lg col-span-6 row-span-2"
      >
        <div class="w-full h-full absolute bg-black opacity-60"></div>
        <div class="w-full h-full absolute flex flex-col p-11">
          <h2
            class="text-white leading-10 text-base tracking-wider font-normal"
          >
            BY TOMAS LAURINAVICIUS IN INSPIRATION
          </h2>
          <h1
            class="text-white leading-10 text-3xl w-5/6 tracking-normal font-semibold"
          >
            How to accept rejection gracefully — and use it to grow
          </h1>
          <p class="text-white mt-7 leading-9 font-base tracking-wider">
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="banner1"
          title="banner1"
          class="w-full h-full object-cover z-20"
        />
      </div>
      <div
        class="relative max-w-3xl w-full max-h-100 overflow-hidden rounded-lg col-span-6 row-span-2"
      >
        <div class="w-full h-full absolute bg-black opacity-60"></div>
        <div class="w-full h-full absolute flex flex-col p-11">
          <h2
            class="text-white leading-10 text-base tracking-wider font-normal"
          >
            BY TOMAS LAURINAVICIUS IN INSPIRATION
          </h2>
          <h1
            class="text-white leading-10 text-3xl w-5/6 tracking-normal font-semibold"
          >
            How to accept rejection gracefully — and use it to grow
          </h1>
          <p class="text-white mt-7 leading-9 font-base tracking-wider">
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          alt="banner1"
          title="banner1"
          class="w-full h-full object-cover z-20"
        />
      </div>
    </section> -->
  </div>
</template>

<style>
.swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}
</style>
