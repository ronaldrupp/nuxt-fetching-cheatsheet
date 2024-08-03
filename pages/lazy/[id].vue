<script setup>
const router = useRoute()
const { data: recipe } = await useLazyFetch(`/api/recipes/${router.params.id}`)
</script>

<template>
  <div class="flex flex-col items-start justify-start gap-6">
    <Nuxt-Link
      to="/lazy/use-lazy-fetch"
      class="p-2 hover:bg-slate-100 transition-all flex items-center gap-3"
    >
      <UIcon
        name="fe:arrow-left"
        class="w-5 h-5"
      />
      Go back to all recipes
    </Nuxt-Link>
    <div
      v-if="recipe"
      class="flex flex-col gap-6"
    >
      <div>
        <img
          :src="recipe.image"
          width="200"
          height="200"
        >
        <h3>{{ recipe.name }}</h3>
        <p>{{ recipe.cuisine }}</p>
        <p>{{ recipe.difficulty }}</p>
        <ul class="list-decimal">
          <li
            v-for="(instruction, idx) in recipe.instructions"
            :key="idx"
          >
            {{ instruction }}
          </li>
        </ul>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col gap-6"
    >
      <div class="w-full h-20 bg-slate-100" />
      <div class="flex flex-col gap-4">
        <div class="w-20 h-5 bg-slate-100" />
        <div class="w-20 h-5 bg-slate-100" />
        <div class="w-20 h-5 bg-slate-100" />
      </div>
    </div>
  </div>
</template>
