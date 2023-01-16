<script lang="ts" setup>
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>
<template>
  <button
    class="px-8 py-4 outline-2 outline outline-black flex items-center justify-center text-sm tracking-wider font-medium bg-white hover:bg-gray-200 disabled:bg-zinc-300 disabled:text-zinc-400 disabled:outline-zinc-400"
  >
    {{ props.title }}
  </button>
</template>
