<script setup lang="ts">
const items = [{
  label: 'SSR: Fetching data with blocking navigation',
  icon: 'fe:download',
  content: 'use useFetch',
}, {
  label: '🤍 SSR: Fetching data without blocking navigation (like in SPA but also SSR)',
  icon: 'fe:download',
  content: 'use useLazyFetch',
}, {
  label: 'Client-only: Fetching data like in SPA',
  icon: 'fe:download',
  content: 'https://nuxt.com/docs/getting-started/data-fetching#client-only-fetching',
}, {
  label: 'Post data from client to server?',
  icon: 'fe:upload',
  content: 'use $fetch',
}]
</script>

<template>
  <div class="flex flex-col gap-6">
    <h1 class="text-3xl font-bold">
      When to use what
    </h1>
    <UAccordion
      color="violet"
      multiple
      variant="solid"
      size="xl"
      :items="items"
    />
    <h2 class="text-2xl font-bold">
      Keep this in mind
    </h2>
    <p class="text-center text-white p-4 border bg-violet-600 rounded-md">
      In a nutshell:<br>
      <b>useFetch</b> is the most straightforward way to handle data fetching in a component setup function.<br>
      <b>$fetch</b> is great to make network requests based on user interaction.<br>
      <b>useAsyncData</b>, combined with $fetch, offers more fine-grained control.
    </p>
    <h2 class="text-2xl font-bold">
      What about caching sites in general?
    </h2>
    <p>
      <a
        href="https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering"
        target="_blank"
        class="text-violet-600"
      >Hybrid-Rendering</a>
    </p>
  </div>
</template>
