<script setup>
defineProps({
  to: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <Nuxt-Link
    :to="to"
    class="hover:bg-slate-100 p-2 rounded-md flex-1"
    active-class="bg-violet-300 animate-pulse"
  >
    <h2 class="text-lg font-bold">
      {{ title }}
    </h2>
  </Nuxt-Link>
</template>
