<script setup lang="ts">
import useFetchShows from '~api/useFetchShows'
import useShowStore from '~/stores/show'

const showStore = useShowStore()

const { isFetching, error } = useFetchShows()

const dramaList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Drama')).slice(0, 10)
})

const actionList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Action') && !s.genres.includes('Drama')).slice(0, 10)
})

const comedyList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Comedy') && !s.genres.includes('Drama') && !s.genres.includes('Action')).slice(0, 10)
})
</script>

<template>
  <div class="d-container t-page-content text-white">
    <div
      v-if="isFetching"
      class="my-12"
    >
      <IconLoadingBlue component-class="w-12 h-12 inline-block animate-spin" />
    </div>

    <div v-else-if="error">
      error happened: {{ error }}
    </div>

    <template v-else>
      <ShowSearch />

      <ShowList
        :shows="dramaList"
        title="Drama"
      />

      <ShowList
        :shows="actionList"
        title="Action"
      />

      <ShowList
        :shows="comedyList"
        title="Comedy"
      />
    </template>
  </div>
</template>
