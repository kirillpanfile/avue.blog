<script setup lang="ts">
onMounted(async () => {
  await fetch('https://api.avue-blog.tweenyone.com/accounts/users/', {
    method: 'POST',
  })
})
</script>

<template>
  <div class="w-full mx-auto">
    <section
      class="w-full flex flex-col text-center gap-12 items-center justify-center py-32 max-w-6xl mx-auto"
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
      <div class="max-w-6xl mx-auto flex items-center justify-between">
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
        :speed="5000"
        class="mt-12"
      >
        <SwiperSlide v-for="item in 10" :key="item">
          <div
            class="h-48 border rounded-md overflow-hidden relative dark:border-gray-800"
          >
            <div class="absolute px-6 py-4 z-20 text-white">
              <h1>BY TOMAS LAURINAVICIUS</h1>
              <span>
                How to accept rejection gracefully — and use it to grow
              </span>
            </div>
            <div class="w-full h-full absolute bg-black opacity-20 z-10"></div>
            <img
              src="https://wallpaperaccess.com/full/1261204.jpg"
              alt="banner1"
              title="banner1"
              class="w-full h-full object-cover absolute"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="mt-12 mb-12">
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
        :speed="5000"
        class="mt-12"
      >
        <SwiperSlide v-for="item in 10" :key="item">
          <div
            class="h-48 border rounded-md overflow-hidden relative dark:border-gray-800"
          >
            <div class="absolute px-6 py-4 z-20 text-white">
              <h1>BY TOMAS LAURINAVICIUS</h1>
              <span>
                How to accept rejection gracefully — and use it to grow
              </span>
            </div>
            <div class="w-full h-full absolute bg-black opacity-20 z-10"></div>
            <img
              src="@/assets/img/banner2.png"
              alt="banner1"
              title="banner1"
              class="w-full h-full object-cover absolute"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- <section class="flex mt-12 max-w-6xl mx-auto gap-6 mb-12">
      <div
        class="relative max-w-3xl w-full max-h-100 overflow-hidden rounded-lg"
      >
        <div class="w-full h-full absolute bg-base-violet opacity-80"></div>
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
          src="@/assets/img/banner2.png"
          alt="banner1"
          title="banner1"
          class="w-full h-full object-cover z-20"
        />
      </div>
      <div class="flex flex-col w-1/2">
        <div
          class="flex justify-between border-b items-center border-gray-300 pb-1"
        >
          <h1 class="text-2xl font-bold">New</h1>
          <span
            class="text-gray-400 text-sm hover:text-base-violet duration-100 cursor-pointer"
            >View all new</span
          >
        </div>
        <div class="flex flex-col gap-4 mt-4">
          <div
            v-for="item in 5"
            :key="item"
            class="cursor-pointer hover:text-red-400 duration-100"
          >
            <span class="text-gray-400 uppercase tracking-wider font-thin"
              >SEP 04 2018</span
            >
            <h2 class="text-base font-semibold -tracking-wide leading-7">
              Our 15 favorite websites from August 2018
            </h2>
          </div>
        </div>
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
