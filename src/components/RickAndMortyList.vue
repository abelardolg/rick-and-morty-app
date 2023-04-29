<template>
  <div class="container text-center">
    <div class="row">
      <RickAndMortyCharacter />
      <RickAndMortyCharacter />
      <RickAndMortyCharacter />
      <RickAndMortyCharacter />
      <RickAndMortyCharacter />
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "RickAndMortyList",
  components: {
    RickAndMortyCharacter: defineAsyncComponent( () => import("@/components/RickAndMortyCharacter.vue"))
  }

}
</script>

<style lang="scss" scoped>

</style>