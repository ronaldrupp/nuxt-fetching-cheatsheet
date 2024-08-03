<script setup>
const router = useRoute()
const post = await $fetch(`/api/posts/${router.params.id}`)
</script>

<template>
  <div class="flex flex-col items-start justify-start gap-6">
    <Nuxt-Link
      to="/use-fetch"
      class="p-2 hover:bg-slate-100 transition-all flex items-center gap-3"
    >
      <UIcon
        name="fe:arrow-left"
        class="w-5 h-5"
      />
      Go back to all posts
    </Nuxt-Link>
    <div class="flex flex-col gap-6">
      <div>
        <h2 class="text-3xl font-bold">
          {{ post.title }}
        </h2>
        <p class="text-2xl">
          {{ post.body }}
        </p>
      </div>
    </div>
  </div>
</template>
