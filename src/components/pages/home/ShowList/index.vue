<template>
  <div class="show-list">
    <div class="mb-4 inline-block	leading-8 text-white">
      <h1 class="text-lg font-bold">Sample title</h1>
    </div>

    <div class="flex flex-wrap just">
      <ShowTile
        v-for="i in 7"
        :key="i"
      />
    </div>
  </div>
</template>

<style scoped>
  .show-list {
    @apply py-4;
  }
</style>
