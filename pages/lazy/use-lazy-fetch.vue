<script setup>
const { data } = await useLazyFetch('/api/recipes')
</script>

<template>
  <main class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      useLazyFetch
    </h1>
    <UAlert
      title="useLazyFetch triggers navigation immediately"
    />
    <UAlert
      icon="fe:info"
      title="Seeing old data and then flashing new one?"
      description="When you have accessed this page before, it will get cached in the vue instance. A refetch occurs in the background. This is also known as stale-while-revalidate but in this case on the client only!"
    />

    <ul
      v-if="data"
      class="flex flex-col gap-4"
    >
      <li
        v-for="(recipe, idx) in data.recipes"
        :key="idx"
      >
        <Nuxt-link
          :to="`/lazy/${recipe.id}`"
          class="grid grid-cols-[200px_1fr] gap-4 border-2 rounded-md p-4"
        >
          <img :src="recipe.image">
          <div>
            <h3>{{ recipe.name }}</h3>
            <p>{{ recipe.cuisine }}</p>
            <p>{{ recipe.difficulty }}</p>
          </div>
        </Nuxt-link>
      </li>
    </ul>
    <ul
      v-else
      class="flex flex-col gap-4"
    >
      <li
        v-for="idx in 10"
        :key="idx"
        class="grid grid-cols-[200px_1fr] gap-4 border-2 rounded-md p-4"
      >
        <div class="w-full h-20 bg-slate-100" />
        <div class="flex flex-col gap-4">
          <div class="w-20 h-5 bg-slate-100" />
          <div class="w-20 h-5 bg-slate-100" />
          <div class="w-20 h-5 bg-slate-100" />
        </div>
      </li>
    </ul>
  </main>
</template>
