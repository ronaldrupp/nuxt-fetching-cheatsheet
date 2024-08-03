<script setup>
const { data } = await useAsyncData(
  'users',
  () => $fetch('/api/users'),
)
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      useAsyncData + $fetch
    </h1>
    <UAlert
      title="During SSR data is fetched only on the server side and transferred to the client."
    />
    <ul
      v-if="data"
      class="grid grid-cols-6 gap-6"
    >
      <li
        v-for="(user, idx) in data.users"
        :key="idx"
        class="hover:bg-slate-100 transition-all"
      >
        <Nuxt-link :to="`/use-async-data/${user.id}`">
          <img
            :src="user.image"
            class="w-full"
          >
          <p class="text-center">
            {{ user.firstName }}, {{ user.age }}
          </p>
        </Nuxt-link>
      </li>
    </ul>
  </main>
</template>
