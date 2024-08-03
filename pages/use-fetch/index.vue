<script setup>
const { data } = await useFetch('/api/posts')
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      useFetch
    </h1>
    <UAlert
      title="You can also useFetch as shortcut of useAsyncData + $fetch"
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
