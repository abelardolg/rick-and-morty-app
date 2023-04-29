<template>
  <div class="row">
    <div class="col-6">
    <label for="name" class="form-control"> Type a name </label>
    <input
        id="name" name="name"
        type="text"
        class="form-control"
    />
    </div>
    <div class="col-6">
      <label for="name" class="form-control"> Choose a status </label>
      <select
          id="status" name="status"
          class="form-control"
      >
        <option id="">Select a status</option>
        <option id="alive">Alive</option>
        <option id="dead">Dead</option>
        <option id="unknown">Unknown</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "RickAndMortyFilter"
}
</script>

<style scoped>

</style>