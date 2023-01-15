<script setup lang="ts">
import { PropType } from 'vue'
import type { image } from '~/types'

const props = defineProps({
  image: {
    type: Object as PropType<image>,
    required: true,
  },
})
</script>

<template>
  <img
    :src="props.image.file"
    :alt="props.image.alt"
    :title="props.image.title"
  />
</template>
