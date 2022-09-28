<script setup lang="ts">
import useShowStore from '~/stores/show'
import useFetchOneShow from '~api/useFetchOneShow'

const route = useRoute()
const showStore = useShowStore()

const { isFetching, error } = useFetchOneShow(Number(route.params.showId))

const show = computed(() => {
  return showStore.show
})
</script>

<template>
  <div class="d-container t-page-content text-white">
    {{ show }}
  </div>
</template>
