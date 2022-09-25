<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main>
    <RouterView />
    <div>
      <button @click="$router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
