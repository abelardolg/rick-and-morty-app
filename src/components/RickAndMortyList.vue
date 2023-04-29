<template>
  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-12 alert-info text-center mt-5">
      Espere, por favor
      <h3 class="mt-2">
        <i class="fa fa-spin fa-spinner"></i>
      </h3>
    </div>
  </div>

  <div class="container text-center">
    <div class="row">
      <RickAndMortyCharacter
        v-for="character in charactersByTerm"
        :character="character"
        :key="character.id"
      />
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import {mapActions, mapGetters, mapState} from "vuex";

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
    ...mapGetters("rickAndMorty", ["getCharactersByTerm"]),
    charactersByTerm() {
      return this.getCharactersByTerm( this.term )
    },
    ...mapState("rickAndMorty", ["isLoading"])
  }
}
</script>

<style lang="scss" scoped>

</style>