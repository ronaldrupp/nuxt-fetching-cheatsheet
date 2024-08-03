<script setup>
defineProps({
  product: Object,
})
</script>

<template>
  <Nuxt-Link
    :to="`/dollar-fetch/${product.id}`"
    class="flex flex-col"
  >
    <div class="overflow-hidden w-full h-[400px]">
      <img
        width="200"
        height="400"
        :src="product.images[0]"
        alt=""
        class="bg-[#9146ff] object-cover hover:scale-125 duration-300 transition-all w-full h-[400px] p-6"
      >
    </div>
    <h2>{{ product.title }}</h2>
    <p>€ {{ product.price }}</p>
  </Nuxt-Link>
</template>
