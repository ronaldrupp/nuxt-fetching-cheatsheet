<script setup>
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-6 w-full h-[50dvh]">
    <h1 class="text-4xl font-bold">
      🌎 Fetching Demo
    </h1>
    <p>This website demos the different fetching methods that are available in Nuxt.</p>
    <p class="text-center text-white p-4 border bg-violet-600 rounded-md">
      In a nutshell:<br>
      <b>useFetch</b> is the most straightforward way to handle data fetching in a component setup function.<br>
      <b>$fetch</b> is great to make network requests based on user interaction.<br>
      <b>useAsyncData</b>, combined with $fetch, offers more fine-grained control.
    </p>
  </main>
</template>
