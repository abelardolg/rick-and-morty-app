<template>
  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-12 alert-info text-center mt-5">
      Espere, por favor
      <h3 class="mt-2">
        <i class="fa fa-spin fa-spinner"></i>
      </h3>
    </div>
  </div>

  <div v-else class="container text-center">
    <div class="row">
      <RickAndMortyCharacter
        v-for="character in characters"
        :character="character"
        :key="character.id"
      />
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "RickAndMortyList",
  components: {
    RickAndMortyCharacter: defineAsyncComponent( () => import("@/components/RickAndMortyCharacter.vue"))
  },
  methods: {
    ...mapActions("rickAndMorty", ["loadCharacters"])
  },
  created() {
    this.loadCharacters()
  },
  computed: {
    // ...mapGetters("rickAndMorty", ["getCharacters"]),
    characters() {
      return this.getCharacters();
    },
    ...mapState("rickAndMorty", ["isLoading"]),
    ...mapState("rickAndMorty", ["characters"])
  }

}
</script>

<style lang="scss" scoped>

</style>