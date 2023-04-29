<template>
  <RickAndMortyNavbar/>
  <RickAndMortyContent />
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "RickAndMortyLayout",
  components: {
    RickAndMortyNavbar: defineAsyncComponent( ()=> import("@/components/RickAndMortyNavbar.vue")),
    RickAndMortyContent: defineAsyncComponent( ()=> import("@/components/RickAndMortyContent.vue"))
  }
}
</script>