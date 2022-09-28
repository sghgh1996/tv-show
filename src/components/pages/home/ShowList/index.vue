<script setup lang="ts">
import { ShowListProps } from './types'

defineProps<ShowListProps>()
</script>

<template>
  <div class="show-list">
    <div class="mb-4 inline-block	leading-8 text-white">
      <h1 class="text-lg font-bold">
        {{ title }}
      </h1>
    </div>

    <div class="flex flex-wrap just">
      <ShowTile
        v-for="show in shows"
        :key="show.id"
        :show="show"
      />
    </div>
  </div>
</template>

<style scoped>
  .show-list {
    @apply py-4 mb-4;
  }
</style>
