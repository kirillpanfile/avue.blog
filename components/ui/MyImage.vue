<script setup lang="ts">
import { PropType } from 'vue'
import type { image } from '~/types'

const props = defineProps({
  image: {
    type: Object as PropType<image>,
    required: true,
  },
})

const { file, alt, title } = toRefs(props.image)
</script>

<template>
  <img :src="file" :alt="alt" :title="title" />
</template>
