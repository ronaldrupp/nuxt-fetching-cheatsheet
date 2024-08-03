<script setup>
const router = useRoute()
const product = await $fetch(`/api/products/${router.params.id}`)
</script>

<template>
  <div class="flex flex-col items-start justify-start gap-6">
    <Nuxt-Link
      to="/dollar-fetch"
      class="p-2 hover:bg-slate-100 transition-all flex items-center gap-3"
    >
      <UIcon
        name="fe:arrow-left"
        class="w-5 h-5"
      />
      Go back to all products
    </Nuxt-Link>
    <div class="grid grid-cols-2 gap-6">
      <img
        width="400"
        height="400"
        :src="product.images[0]"
        alt=""
        class="bg-[#9146ff] object-contain w-full h-[400px]"
      >
      <div>
        <h2 class="text-3xl font-bold">
          {{ product.title }}
        </h2>
        <p class="text-2xl">
          € {{ product.price }}
        </p>
      </div>
    </div>
  </div>
</template>
