<script lang="ts" setup>
import { ref } from 'vue'
interface Props {
  title: string
  placeholder: string
  password?: boolean
  modelValue?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const isTargetValid = (
  target: EventTarget | null
): target is HTMLInputElement => {
  return target !== null
}

const handleInput = (event: Event) => {
  if (isTargetValid(event?.target))
    emit('update:modelValue', event.target.value)
}

const passFlag = ref(true)

const changePassFlag = () => {
  passFlag.value = !passFlag.value
}

const getInputType = (flag: boolean) => {
  if (flag) return 'password'
  else return 'text'
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <label
      class="text-gray-400 font-medium text-xs tracking-wider"
      for="input"
      >{{ props.title }}</label
    >
    <input
      v-if="!props.password"
      class="outline-none border-b-gray-400 border-1 border-b px-2 py-1 select-none"
      type="text"
      name="input"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="handleInput"
    />
    <div v-else class="w-[350px] relative">
      <input
        class="outline-none w-full border-b-gray-400 border-1 border-b px-2 py-1 pr-9 select-none"
        :type="getInputType(passFlag)"
        name="input"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="handleInput"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        class="absolute right-[4px] top-1/2 -translate-y-1/2 cursor-pointer fill-zinc-800 hover:fill-zinc-700"
        @click="changePassFlag"
      >
        <path
          v-if="passFlag"
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
        />
        <path
          v-else
          d="M12 7c2.76 0 5 2.24 5 5c0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28l.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22L21 20.73L3.27 3L2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65c0 1.66 1.34 3 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53c-2.76 0-5-2.24-5-5c0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15l.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        />
      </svg>
    </div>
  </div>
</template>
