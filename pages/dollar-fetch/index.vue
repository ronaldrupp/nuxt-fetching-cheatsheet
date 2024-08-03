<script setup>
const dataTwice = await $fetch('/api/products')
</script>

<template>
  <main class="flex flex-col gap-4">
    <h1 class="text-3xl font-bold">
      $fetch
    </h1>
    <UAlert
      title="During SSR data is fetched twice, once on the server and once on the client."
    />
    <ul class="grid grid-cols-4 gap-4">
      <li
        v-for="(product, idx) in dataTwice.products"
        :key="idx"
      >
        <ProductCard :product="product" />
      </li>
    </ul>
  </main>
</template>
