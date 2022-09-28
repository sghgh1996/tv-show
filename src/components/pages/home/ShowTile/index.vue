<script setup lang="ts">
import { ShowTileProps } from './types'
import { Routes } from '~/routes'
import useShowStore from '~/stores/show'

const { show } = defineProps<ShowTileProps>()
const router = useRouter()
const showStore = useShowStore()

const openShowDetailPage = () => {
  showStore.setShow(show)

  router.push(`${Routes.SHOWS}/${show.id}`)
}
</script>

<template>
  <div
    class="show-tile cursor-pointer"
    @click="openShowDetailPage"
  >
    <img
      class="w-full h-36 md:h-56 xl:h-64 mb-2 object-cover"
      :src="show.image"
      :alt="show.name"
      :title="show.name"
    >

    <div>
      <div class="text-sm text-white mb-1">
        {{ show.name }}
      </div>
      <div class="text-xs text-gray-silver">
        {{ show.rating }} of 10
      </div>
    </div>
  </div>
</template>

<style scoped>
  .show-tile {
    @apply px-2 mb-8 w-24 md:w-36 xl:w-44 inline-block;
  }
</style>
