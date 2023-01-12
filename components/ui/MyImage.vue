<script setup lang="ts">
import type { image } from '~/types';
import { PropType } from 'vue';

const props = defineProps({
  image: {
    type: Object as PropType<image>,
    required: true
  }
});
const { file, alt, title } = props.image;
</script>

<template>
  <img :src="file" :alt="alt" :title="title" />
</template>
