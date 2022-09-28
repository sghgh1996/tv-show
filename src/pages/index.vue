<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import useFetchShows from '~api/useFetchShows'
import useShowStore from '~/stores/show'

const { t } = useI18n()

const showStore = useShowStore()

const { isFetching, error } = useFetchShows()

const drama = computed(() => {
  return showStore.allShows?.filter(s => s.genres.includes('Drama')).slice(0, 20)
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
        :shows="drama"
        title="Drama"
      />
    </template>
  </div>
</template>

