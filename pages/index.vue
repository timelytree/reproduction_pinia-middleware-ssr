<template>
  <div class="page">
    {{ cat }}
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

const store = useCatStore()
const { cat } = storeToRefs(store)
</script>
