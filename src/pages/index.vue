<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import useFetchShows from '~api/useFetchShows'
import useShowStore from '~/stores/show'

const { t } = useI18n()

const showStore = useShowStore()

const { isFetching, error } = useFetchShows()

const drama = computed(() => {
  // return showStore.allShows
  return showStore.allShows?.filter(s => s.genres.includes('Drama'))
})
</script>

<template>
  <div class="t-page-content text-white">
    <IconLoadingBlue
      v-if="isFetching"
      component-class="w-6 h-6 inline-block animate-spin"
    />

    <div v-else-if="error">
      error happened: {{ error }}
    </div>

    <template v-else>
      <ShowList />
      here=> {{ drama[11] }}
    </template>
  </div>
</template>

