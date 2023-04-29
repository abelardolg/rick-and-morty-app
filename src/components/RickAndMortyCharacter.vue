<template>
  <div class="col-12 col-sm-6 col-md-3">
    <div class="box">
      <div class="card">
        <div class="card-img-actions m-1">
          <img class="card-img img-fluid" src="https://rickandmortyapi.com/api/character/avatar/55.jpeg" alt="">
        </div>
        <div class="card-body content">
          <div class="d-flex align-items-start flex-nowrap ">
            <div>
              <h3 class="fw-bold me-2">Celebrity Jerry</h3>
              <p>
              <i class="fa fa-circle text-danger fa-light"></i>
              <span class="text-white">
                Dead - Human
              </span>
              </p>
              <p>
                <small>Last know location:</small>
              </p>
              <p>
              <span class="text-white">
                Dead - Human
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
  name: "RickAndMortyCharacter"
}
</script>

<style lang="scss" scoped>

.content {

  background-color: rgb(158, 158, 158,);
  h3 {
    color: white;
  }
}
</style>