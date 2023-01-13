<script setup lang="ts">
import type { image } from '~/types'

const MyImage = defineAsyncComponent(async function () {
  return await import(
    /* webpackChunkName: "MyImage" */ '@/components/ui/MyImage.vue'
  )
})

const bgImage: image = {
  file: 'https://4kwallpapers.com/images/wallpapers/material-design-minimalist-orange-stripes-blue-flat-3840x2160-6718.png',
  alt: 'bg image',
  title: 'bg image',
}

const authorImage: image = {
  file: 'https://mangostudios.com/wp-content/uploads/2018/09/headshot3.jpg',
  alt: 'author image',
  title: 'author image',
}
</script>

<template>
  <div class="w-full">
    <MyImage class="max-h-48 w-full object-cover" :image="bgImage" />

    <div class="max-w-4xl mx-auto px-4">
      <section class="w-full mt-6 flex items-center font-semi">
        <Icon name="material-symbols:home-rounded" /> - Article Page -
        Optimizing CSS for faster page loads
      </section>

      <section class="w-full max-w-4xl mx-auto mt-6">
        <h1 class="text-2xl font-bold mt-4">
          Optimizing CSS for faster page loads
        </h1>
        <div class="flex gap-2 items-center mt-2">
          <MyImage
            :image="authorImage"
            class="w-10 h-10 rounded-full object-cover p-1"
          />
          <h2>Elizabeth Warren</h2>
        </div>
      </section>
    </div>
  </div>
</template>
