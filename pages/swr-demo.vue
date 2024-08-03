<script setup>
const { data } = await useFetch('/api/food')
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      SWR
    </h1>
    <UAlert
      title="This page should always be snappy!"
    />
    <ul
      v-if="data"
      class="flex flex-col gap-4 max-w-md  mx-auto"
    >
      <li
        v-for="(food, idx) in data.food"
        :key="idx"
      >
        {{ food }}
      </li>
    </ul>
  </main>
</template>
