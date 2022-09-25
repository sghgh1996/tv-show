<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'tv-show',
  meta: [
    { name: 'description', content: 'tv show sample description' }
  ]
})
</script>

<template>
  <RouterView />
</template>
