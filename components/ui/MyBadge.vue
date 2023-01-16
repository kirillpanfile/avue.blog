<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()

const getIcon = (iconName: String) => {
  let logo = ''
  switch (iconName) {
    case 'Google':
      logo = 'logos:google-icon'
      break
    case 'Github':
      logo = 'logos:github-icon'
      break
    case 'Facebook':
      logo = 'logos:facebook'
      break
  }
  return logo
}
</script>

<template>
  <div
    class="px-8 py-4 outline-2 w-[350px] outline outline-black flex items-center gap-8 text-lg font-medium cursor-pointer bg-white hover:bg-gray-200"
  >
    <Icon class="w-5 h-5" :name="getIcon(title)" />
    <h1 class="flex-1 text-center">Continue with {{ props.title }}</h1>
  </div>
</template>
