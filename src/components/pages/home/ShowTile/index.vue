<script setup lang="ts">
import { ShowTileProps } from './types'

defineProps<ShowTileProps>()
</script>

<template>
  <div class="show-tile">
    <img
      class="w-full mb-2"
      :src="show.image"
      :alt="show.name"
      :title="show.name"
    >

    <div>
      <div class="text-sm text-white mb-1">
        {{ show.name }}
      </div>
      <!-- <div class="text-xs text-gray-silver">Drama, Science-Fiction, Thriller</div> -->
      <div class="text-xs text-gray-silver">
        {{ show.rating }} of 10
      </div>
    </div>
  </div>
</template>

<style scoped>
  .show-tile {
    @apply px-2 w-44 inline-block;
  }
</style>
