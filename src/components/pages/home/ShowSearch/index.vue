<script setup lang="ts">
import useSearchShows from '~api/useSearchShows'
import useShowStore from '~/stores/show'

const showStore = useShowStore()

const searchText = ref('')
const isLoading = ref(false)

watch(searchText, async (newSearchText) => {
  if (newSearchText.length < 3) {
    return
  }

  isLoading.value = true
  await useSearchShows(newSearchText)
  isLoading.value = false
})

const searchResults = computed(() => {
  return showStore.searchedShows?.slice(0, 10)
})
</script>

<template>
  <div class="show-search">
    <input
      v-model="searchText"
      id="search-input"
      name="search-input"
      type="text"
      class="d-input mb-12"
    >

    <div
      v-if="isLoading"
      class="my-12"
    >
      <IconLoadingBlue component-class="w-6 h-6 inline-block animate-spin" />
    </div>

    <ShowList
      v-else-if="searchResults.length"
      :shows="searchResults"
      title="Result"
    />
  </div>
</template>

<style scoped>
  .show-search {
    @apply py-4 mt-44 mb-16 flex flex-col items-center;
  }
</style>
