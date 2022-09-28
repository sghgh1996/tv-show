<script setup lang="ts">
import useFetchShows from '~api/useFetchShows'
import useShowStore from '~/stores/show'

const showStore = useShowStore()

const { isFetching, error } = useFetchShows()

const dramaList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Drama')).slice(0, 14)
})

const actionList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Action') && !s.genres.includes('Drama')).slice(0, 14)
})

const comedyList = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Comedy') && !s.genres.includes('Drama') && !s.genres.includes('Action')).slice(0, 14)
})
</script>

<template>
  <div class="d-container t-page-content text-white">
    <IconLoadingBlue
      v-if="isFetching"
      component-class="w-6 h-6 inline-block animate-spin"
    />

    <div v-else-if="error">
      error happened: {{ error }}
    </div>

    <template v-else>
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
