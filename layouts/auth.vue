<script setup lang="ts"></script>

<template>
  <main class="flex flex-col min-h-screen">
    <LazyAuthHeader />
    <slot></slot>
    <LazyTheFooter />
    <notifications />
  </main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
