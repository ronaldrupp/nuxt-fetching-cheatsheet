<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-[rgba(0,0,0,0.1)]',
  },
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#9146ff" />

    <div class="p-4">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
