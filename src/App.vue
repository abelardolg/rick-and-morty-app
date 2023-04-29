<template>
  <RickAndMortyLayout />
</template>

<script>

import {defineAsyncComponent} from "vue";

export default {
  name: 'RickAndMortyApp',
  components: {
    RickAndMortyLayout: defineAsyncComponent( () => import("@/layouts/RickAndMortyLayout.vue"))
  }
}
</script>