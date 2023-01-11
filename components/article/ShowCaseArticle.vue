<script setup lang="ts"></script>

<template>
  <article
    class="flex flex-row p-1 bg-white w-full max-h-72 h-full border border-gray-100 shadow-sm mt-8"
  >
    <div class="relative">
      <img
        class="max-w-lg object-cover"
        src="@/static/large.png"
        alt=" Big Blog Image"
        title="Big Blog Image"
      />

      <div class="top-0 left-0 w-full h-full absolute flex justify-center ml-14 flex-col">
        <strong class="text-3xl"> 🚀 </strong>
        <h1 class="text-white font-bold text-3xl mt-4">
          Optimizing CSS for faster <br />
          page loads
        </h1>
      </div>
    </div>
    <div class="p-3 flex flex-col w-full">
      <h6 class="font-bold text-sm text-gray-700 block">
        Nuxt.js • <span class="font-normal">1h ago</span>
      </h6>
      <strong class="text-gray-700 font-bold text-2xl mt-2 block"
        >Optimizing CSS for faster page loads
      </strong>
      <p class="mt-4 pr-4">
        Not long ago I decided to improve the loading times of my website. It already
        loads pretty fast, but I knew there was still room for improvement and one of them
        was CSS loading. I will walk you through the process and show you how you can
        improve your load times as well. To see how CSS affects the load time of a webpage
        we first have to know how the browser converts an HTML document into a functional
        webpage...
      </p>

      <div class="flex items-center justify-between mt-auto">
        <h6 class="text-gray-700">3 min read</h6>
        <a href="" class="text-blue-500 font-bold flex items-center gap-2"
          >Read Full <Icon name="material-symbols:arrow-forward" />
        </a>
      </div>
    </div>
  </article>
</template>
