<script setup>
const router = useRoute()
const user = await $fetch(`/api/users/${router.params.id}`)
</script>

<template>
  <div class="flex flex-col items-start justify-start gap-6">
    <Nuxt-Link
      to="/use-async-data"
      class="p-2 hover:bg-slate-100 transition-all flex items-center gap-3"
    >
      <UIcon
        name="fe:arrow-left"
        class="w-5 h-5"
      />
      Go back to all users
    </Nuxt-Link>
    <div class="grid grid-cols-2 gap-6">
      <img
        width="400"
        height="400"
        :src="user.image"
        alt=""
        class="bg-[#9146ff] object-contain w-full h-[400px]"
      >
      <div>
        <h2 class="text-3xl font-bold">
          {{ user.firstName }}
        </h2>
      </div>
    </div>
  </div>
</template>
