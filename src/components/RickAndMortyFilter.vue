<template>
  <div class="row">
    <div class="col-6">
    <label for="name" class="form-control"> Type a name </label>
    <input
        id="name" name="name"
        type="text"
        class="form-control"
        v-model="name"
    />
    </div>
    <div class="col-6">
      <label for="name" class="form-control"> Choose a status </label>
      <select
          id="status" name="status"
          class="form-control"
          v-model="selectedStatus"
          @change="clearSelectFilter"
      >
        <option v-for="status in statuses"
                :key="status.id"
                v-bind:value="{ id: status.id, text: status.text }">
          {{ status.text }}
        </option>
      </select>

    </div>
    <button class="btn btn-info mx-2 mt-3"
            @click="findFromFilters()"
    >
      <i class="fa fa-search"></i> Buscar</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {hasFilterData} from "@/helpers/payloadHelper";

export default {
  name: "RickAndMortyFilter",
  data() {
    return  {
      name: "",
      selectedStatus: "",
      statuses : [
        {id: "", text: "Seleccione un estado"},
        {id: "alive", text: "Alive"},
        {id: "dead", text: "Dead"},
        {id: "unknown", text: "Unknown"}
      ]
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.getItem("name");
    }
    if (localStorage.status) {
      this.selectedStatus =   localStorage.getItem("status");
    }
    const payload = {
      name: this.name ?? "", status: this.selectedStatus.id ?? ""
    };
    if (hasFilterData(payload)) {
      this.getCharactersFromFilters(payload);
    } else {
      this.loadCharacters();
    }
  },
  watch: {
    name(newValue) {
      localStorage.setItem('name', newValue);
    },
    selectedStatus(newValue) {
      localStorage.setItem('status', newValue);
    }
  },
  methods: {
    ...mapActions("rickAndMorty", ["getFilteredCharacters"]),
    ...mapActions("rickAndMorty", ["loadCharacters"]),
    findFromFilters() {
      const payload = {
        name: this.name ?? "", status: this.selectedStatus.id ?? ""
      };
      if (hasFilterData(payload)) {
        this.getCharactersFromFilters(payload);
      } else {
        this.loadCharacters();
      }
    },
    getCharactersFromFilters(payload) {
      this.$store.commit("rickAndMorty/setFilters", payload);
      this.getFilteredCharacters(payload);
    },
  }

}
</script>

<style scoped>

</style>