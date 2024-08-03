<script setup>
const nuxtApp = useNuxtApp()

const { data } = await useFetch('/api/posts', {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  },
})
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      useFetch with getCachedData
    </h1>
    <UAlert
      title="gets data once and caches it on the client until the app lives"
    />
    <ul
      v-if="data"
      class="flex flex-col gap-4 max-w-md  mx-auto"
    >
      <li
        v-for="(post, idx) in data.posts"
        :key="idx"
        class="flex"
      >
        <Nuxt-Link
          :to="`/use-fetch/${post.id}`"
          class="flex-1 hover-bg-slate-100 border-2 rounded-md p-4"
        >
          <ul class="flex gap-2">
            <li
              v-for="tag in post.tags"
              :key="tag"
              class="border-2 rounded-full bg-violet-700 text-white py-1 px-2"
            >{{ tag }}</li>
          </ul>
          <p
            class="text-lg font-semibold"
          >
            {{ post.title }}
          </p>
          <p>{{ post.body }}</p>
        </Nuxt-Link>
      </li>
    </ul>
  </main>
</template>
