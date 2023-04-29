<template>
  <div class="col-sm-12 col-md-4 col-lg-6 ">
        <div class="box">
      <div class="card">
        <div class="card-img-actions m-1">
          <img class="card-img img-fluid"
               :src="character.image" alt="">
        </div>
        <div class="card-body content">
          <div class="d-flex align-items-start flex-nowrap ">
            <div>
              <h3 class="fw-bold me-2">{{ character.name }}</h3>
              <p>
              <i class="fa fa-circle fa-light mb-3"
                 :class="`text-${statusColor}`"></i>
              <span class="text-white">
                {{ character.status }} - {{ character.specie }}
              </span>
              </p>
              <p>
                <small>Last know location:</small>
              </p>
              <p>
              <span class="text-white">
                {{ this.character.status }} - Human
              </span>
              </p>
              <p>
                <small>First seen in:</small>
              </p>
              <span class="text-white">
                Ricky - Minutes
              </span>
            </div>

            <div class="d-inline-flex ms-auto">
              <a href="#" class="text-body"><i class="ph-download-simple"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "RickAndMortyCharacter",
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  computed: {
    statusColor() {
      const statuses = {"dead": "danger", "alive": "success", "unknown": "primary"};

      const status = this.character.status;

      return statuses[status.toLowerCase()];
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  max-width: 800px;
  background-color: rgb(158, 158, 158,);
  h3 {
    color: white;
  }
}
</style>