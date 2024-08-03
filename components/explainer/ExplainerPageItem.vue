<script setup>
import { useRoute as useNativeRoute } from 'vue-router'

const nativeRoute = useNativeRoute()
</script>

<template>
  <Nuxt-Link to="/ssr-without-blocked-nav">
    <div class="grid grid-cols-[0.75rem_1fr] gap-4 hover:bg-slate-100 p-4 rounded-md">
      <div>
        <UTooltip
          v-if="nativeRoute.fullPath === '/ssr-without-blocked-nav'"
          text="Current page"
        >
          <span class="relative flex items-baseline h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
          </span>
        </UTooltip>
      </div>
      <div>
        <h2 class="text-lg font-bold">
          Page using <UKbd>$fetch</UKbd>
        </h2>
        <div class="flex flex-col gap-3">
          <Shiki
            lang="js"
            code="const { data } = await useAsyncData(
  'mountains', // key because Nuxt caches this data in the vue instance
  () => $fetch('/api/products'),
)"
          />
          <ul>
            <li>🟢 SSR</li>
            <li>🔴 blocking navigation</li>
          </ul>
        </div>
      </div>
    </div>
  </Nuxt-Link>
</template>
