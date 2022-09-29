<script setup lang="ts">
import { format } from 'date-fns'
import useShowStore from '~/stores/show'
import useFetchOneShow from '~api/useFetchOneShow'

const route = useRoute()
const showStore = useShowStore()

const { isFetching, error } = useFetchOneShow(Number(route?.params?.showId))

const show = computed(() => {
  return showStore.show
})

const premieringDate = computed(() => {
  if (show.value?.premiered && show.value?.ended) {
    const dateFormat = 'MMM yyyy'
    return `From ${format(new Date(show.value.premiered), dateFormat)} to ${format(new Date(show.value.ended), dateFormat)}`
  }

  return ''
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

    <div
      v-else-if="show"
      class="flex justify-center lg:justify-start flex-wrap"
    >
      <img
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[400px] h-auto mb-12"
        :src="show.image"
        :alt="show.name"
        :title="show.name"
      >

      <div class="lg:ml-16 max-w-lg">
        <h1 class="mb-4">
          {{ show.name }}
        </h1>

        <div class="mb-8 text-sm">
          <div class="mb-1">
            <span class="mr-4">
              {{ show.rating }} of 10
            </span>
            <span>
              {{ show.genres.join(', ') }}
            </span>
          </div>
          <div>
            <span class="mr-4">
              {{ show.averageRuntime }} minutes
            </span>
            <span v-if="premieringDate">
              {{ premieringDate }}
            </span>
          </div>
        </div>

        <p v-html="show.summary" />

        <div class="mt-8">
          official website:
          <a
            class="text-azure-radiance"
            :href="show.officialSite"
          >
            {{ show.officialSite }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
